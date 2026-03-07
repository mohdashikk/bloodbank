import db from "../config/db.js";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const register = async (req, res) => {
  const {
    name,
    email,
    phone,
    address,
    blood_group,
    gender,
    last_donate_date,
    password,
  } = req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !address ||
    !blood_group ||
    !gender ||
    !last_donate_date ||
    !password
  )
    return await res.status(401).json({ message: "Required fields" });

  try {
    //check the value is there in db

    const checkQuery = "SELECT * FROM users WHERE email = ?";

    const [result] = await db.promise().query(checkQuery, [email]);

    if (result.length > 0)
      return res.status(404).json({ message: " Email already exist" });

    const insertData =
      "INSERT INTO users(name, email,phone,address ,blood_group,gender ,last_donate_date, password , role  ) VALUES (?,?,?,?,?,?,?,?,?)";

    //hash password

    const hashPassword = await bycrypt.hash(password, 10);

    await db
      .promise()
      .query(insertData, [
        name,
        email,
        phone,
        address,
        blood_group,
        gender,
        last_donate_date,
        hashPassword,
        "user",
      ]);

    res.status(201).json({ message: "User successfully added" });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkQuery = "SELECT * FROM users WHERE email = ?";

    const [result] = await db.promise().query(checkQuery, [email, password]);
    console.log("Hitted sucssussfully");

    if (result.length == 0)
      return res.status(401).json({ message: "Email not founded enter a" });
    const user = result[0];
    const comparePassword = await bycrypt.compare(password, user.password);

    //Password decode

    if (!comparePassword)
      return res.status(401).json({ message: " Password is not match" });

    //Genereate token

    const token = jwt.sign(
      {
        userId: user.id,
        emailId: user.email,
        userName: user.name,
        role: user.role,
      },
      process.env.JWT,
      { expiresIn: "1h" },
    );

    return res.status(201).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export { register, login };

import db from "../config/db.js";

const fetchData = async (req, res) => {
  const role = req.user?.role;
  const loggedUser = req.user?.userId;

  let getData = "SELECT * FROM  users";
  let params = [];

  try {
    if (role !== "admin") {
      getData += " WHERE is_approved = $1 AND id != $2 ";
      params.push(1, loggedUser);
    }

    if (role == "admin") {
      getData += " WHERE id != $1";
      params.push(1);
    }
    const { rows: result } = await db.query(getData, params);
    console.log("here is the", role, loggedUser);

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

const fetchUser = async (req, res) => {

  const { userId } = req.user;

  let fetchDataQUery = "SELECT * FROM users WHERE id = $1";
  let params = [userId]

  try {

    const { rows: result } = await db.query(fetchDataQUery, params);
    console.log("the final result is ", result)
    return res.status(200).json(result)

  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: "error" })
  }

}

export { fetchData, fetchUser };

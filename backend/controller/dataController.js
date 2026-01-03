import db from "../config/db.js";

const fetchData = async (req, res) => {
  const role = req.user?.role;
  const loggedUser = req.user?.userId;

  let getData = "SELECT * FROM  users";
  let params = [];

  try {
    if (role !== "admin") {
      getData += " WHERE is_approved =? AND id != ? ";
      params.push(1, loggedUser);
    }

    if (role == "admin") {
      getData += " WHERE id != ?";
      params.push(1);
    }
    const [result] = await db.promise().query(getData, params);
    console.log("here is the", role, loggedUser);

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

export default fetchData;

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
  let params = [userId];

  try {
    const { rows: result } = await db.query(fetchDataQUery, params);
    console.log("the final result is ", result);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: "error" });
  }
};

const approveUser = async (req, res) => {
  const { id } = req.params;
  const role = req.user?.role;

  if (role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }

  try {
    const updateQuery =
      "UPDATE users SET is_approved = 1 WHERE id = $1 RETURNING id, name, is_approved";
    const { rows: result } = await db.query(updateQuery, [id]);

    if (result.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User approved successfully",
      user: result[0],
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error during approval" });
  }
};

export { fetchData, fetchUser, approveUser };

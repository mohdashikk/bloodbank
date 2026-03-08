import db from "../config/db.js";

const profileController = async (req, res) => {
  const { name, address, blood_group, gender, last_donate_date } = req.body;
  const userId = req.user.userId;

  try {
    const changeQuery = `
      UPDATE users 
      SET name = $1,
          address = $2,
          blood_group = $3,
          gender = $4,
          last_donate_date = $5
      WHERE id = $6
      RETURNING *
    `;

    const result = await db.query(changeQuery, [
      name,
      address,
      blood_group,
      gender,
      last_donate_date,
      userId,
    ]);

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: result.rows[0],
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Server error while updating profile",
    });
  }
};

export default profileController;
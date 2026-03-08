import db from "../config/db.js";


const profileController = async (req, res) => {
    const { name, address, blood_group, gender, last_donate_date } = req.body
    const userId = req.user.userId;
    try {
        console.log(userId)
        const changeQuery = "UPDATE users SET name = $1 , address = $2, blood_group= $3, gender = $4 ,last_donate_date = $5 WHERE id = $6"

        await db.query(changeQuery, [name, address, blood_group, gender, last_donate_date, userId])

        res.status(200).json({
            message: "Profile Update success"
        })

    } catch (err) {
        console.log(err)
        return err

    }

    console.log('profile')
}


export default profileController;
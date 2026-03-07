import { UserDataContext } from "../../Context/UserContext"
import { useContext, useEffect, useState } from "react"
import api from "../../api/axiosInstance";


const EditProfile = () => {

    const { singleUser, setSingleUser } = useContext(UserDataContext)
    const onDataChange = (e) => {
        const { name, value } = e.target;
        setSingleUser((prev) => ({
            ...prev,
            [name]: value
        }))

    }


    const onHandleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.put("user/createprofile", singleUser);
            alert("Profile updated successfully");
        } catch (error) {
            console.error(error);
            alert("Update failed");
        }
    };

    return (
        <>
            <form action="" onSubmit={onHandleSubmit}>
                <div className="info-grid">
                    <div className="info-group">
                        <span className="info-label">Full Name</span>
                        <input
                            type="text"
                            name="name"
                            className="info-value"
                            value={singleUser.name}
                            onChange={onDataChange}
                            placeholder="Not Provided"
                        />
                    </div>

                    <div className="info-group">
                        <span className="info-label">Email Address</span>
                        <input
                            type="email"
                            className="info-value"
                            value={singleUser.email}
                            onChange={onDataChange}
                            placeholder="Not Provided"
                        />
                    </div>

                    <div className="info-group">
                        <span className="info-label">Phone Number</span>
                        <input
                            type="tel"
                            className="info-value"

                            placeholder="Not Provided"
                        />
                    </div>

                    <div className="info-group">
                        <span className="info-label">Blood Group</span>
                        <input
                            type="text"
                            className="info-value"
                            placeholder="Not Provided"
                        />
                    </div>

                    <div className="info-group">
                        <span className="info-label">Address</span>
                        <input
                            type="text"
                            className="info-value"
                            name="address"
                            value={singleUser.address}
                            onChange={onDataChange}
                            placeholder="Not Provided"
                        />
                    </div>

                    <div className="info-group">
                        <span className="info-label">Gender</span>
                        <input
                            type="text"
                            className="info-value"
                            placeholder="Not Provided"
                        />
                    </div>
                </div>

                <button type="submit">Save</button>
            </form>
        </>
    )
}

export default EditProfile
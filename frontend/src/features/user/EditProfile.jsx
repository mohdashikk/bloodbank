import { UserDataContext } from "../../Context/UserContext";
import { useContext } from "react";
import api from "../../api/axiosInstance";
import { toast } from "react-toastify";

const EditProfile = () => {
    const { singleUser, setSingleUser } = useContext(UserDataContext);

    const onDataChange = (e) => {
        const { name, value } = e.target;
        setSingleUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put("user/createprofile", singleUser);
            toast.success("Profile updated successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Update failed. Please try again.");
        }
    };

    return (
        <form className="edit-profile-form" onSubmit={onHandleSubmit}>
            <div className="info-grid">
                <div className="info-group">
                    <span className="info-label">Full Name</span>
                    <div className="info-value-box">
                        <input
                            type="text"
                            name="name"
                            value={singleUser?.name || ""}
                            onChange={onDataChange}
                            placeholder="Full Name"
                            required
                        />
                    </div>
                </div>

                <div className="info-group">
                    <span className="info-label">Email Address</span>
                    <div className="info-value-box">
                        <input
                            type="email"
                            name="email"
                            value={singleUser?.email || ""}
                            onChange={onDataChange}
                            placeholder="Email Address"
                            required
                        />
                    </div>
                </div>

                <div className="info-group">
                    <span className="info-label">Phone Number</span>
                    <div className="info-value-box">
                        <input
                            type="tel"
                            name="phone"
                            value={singleUser?.phone || ""}
                            onChange={onDataChange}
                            placeholder="Phone Number"
                        />
                    </div>
                </div>

                <div className="info-group">
                    <span className="info-label">Blood Group</span>
                    <div className="info-value-box">
                        <select
                            name="blood_group"
                            value={singleUser?.blood_group || ""}
                            onChange={onDataChange}
                            style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', font: 'inherit' }}
                        >
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                </div>

                <div className="info-group">
                    <span className="info-label">Address</span>
                    <div className="info-value-box">
                        <input
                            type="text"
                            name="address"
                            value={singleUser?.address || ""}
                            onChange={onDataChange}
                            placeholder="Address"
                        />
                    </div>
                </div>

                <div className="info-group">
                    <span className="info-label">Gender</span>
                    <div className="info-value-box">
                        <select
                            name="gender"
                            value={singleUser?.gender || ""}
                            onChange={onDataChange}
                            style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', font: 'inherit' }}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
            </div>

            <button className="submit-btn" type="submit">
                Save Changes
            </button>
        </form>
    );
};

export default EditProfile;
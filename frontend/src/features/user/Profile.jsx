import { useContext, useState } from "react";
import { UserDataContext } from "../../Context/UserContext";
import EditProfile from "./EditProfile";

import "./Profile.css";

const Profile = () => {
  const { singleUser } = useContext(UserDataContext);

  const [editorScreen, setEditor] = useState(false)

  const openEditor = () => {
    setEditor(true)
  }


  // Helper to get initials
  const getInitials = (name) => {
    return name
      ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .substring(0, 2)
      : "U";
  };

  return (
    <div className="profile-container">
      {/* Left Column: Summary */}
      <div className="profile-card profile-sidebar">
        <div className="avatar-wrapper">{getInitials(singleUser?.name)}</div>
        <h3 className="profile-name">{singleUser?.name || "User"}</h3>
        <div className="blood-group-badge">
          {singleUser?.blood_group || "N/A"}
        </div>

        <div className="sidebar-stats">
          <div className="stat-item">
            <span className="stat-label">Member Since</span>
            <span>
              {singleUser?.created_at
                ? new Date(singleUser.created_at).toLocaleDateString()
                : "N/A"}
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Last Donation</span>
            <span>{singleUser?.last_donate_date || "Never"}</span>
          </div>
        </div>
      </div>

      {/* Right Column: Full Details */}
      <div className="profile-card profile-details">
        <div className="section-header">
          <h2>Personal Information</h2>
          <div className="edit-btn" onClick={openEditor}>Edit</div>
        </div>

        {
          editorScreen ? <EditProfile /> === false : <div className="info-grid">
            <div className="info-group">
              <span className="info-label">Full Name</span>
              <input
                type="text"
                className="info-value"
                value={singleUser?.name || ""}
                readOnly
                placeholder="Not Provided"
              />
            </div>

            <div className="info-group">
              <span className="info-label">Email Address</span>
              <input
                type="email"
                className="info-value"
                value={singleUser?.email || ""}
                readOnly
                placeholder="Not Provided"
              />
            </div>

            <div className="info-group">
              <span className="info-label">Phone Number</span>
              <input
                type="tel"
                className="info-value"
                value={singleUser?.phone || ""}
                readOnly
                placeholder="Not Provided"
              />
            </div>

            <div className="info-group">
              <span className="info-label">Blood Group</span>
              <input
                type="text"
                className="info-value"
                value={singleUser?.blood_group || ""}
                readOnly
                placeholder="Not Provided"
              />
            </div>

            <div className="info-group">
              <span className="info-label">Address</span>
              <input
                type="text"
                className="info-value"
                value={singleUser?.address || ""}
                readOnly
                placeholder="Not Provided"
              />
            </div>

            <div className="info-group">
              <span className="info-label">Gender</span>
              <input
                type="text"
                className="info-value"
                value={singleUser?.gender || ""}
                readOnly
                placeholder="Not Provided"
              />
            </div>
          </div>
        }



      </div>
    </div>
  );
};

export default Profile;

import { useContext } from "react";
import { UserDataContext } from "../../Context/UserContext";



import "./Profile.css";

const Profile = () => {


  const { singleUser } = useContext(UserDataContext);

  console.log(singleUser)

  // Helper to get initials
  const getInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : 'U';
  };

  return (
    <div className="profile-container">
      {/* Left Column: Summary */}
      <div className="profile-card profile-sidebar">
        <div className="avatar-wrapper">
          {getInitials(singleUser?.name)}
        </div>
        <h3 className="profile-name">{singleUser?.name || 'User'}</h3>
        <div className="blood-group-badge">
          {singleUser?.blood_group || 'N/A'}
        </div>

        <div className="sidebar-stats">
          <div className="stat-item">
            <span className="stat-label">Member Since</span>
            <span>{singleUser?.created_at ? new Date(singleUser.created_at).toLocaleDateString() : 'N/A'}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Last Donation</span>
            <span>{singleUser?.last_donate_date || 'Never'}</span>
          </div>
        </div>
      </div>

      {/* Right Column: Full Details */}
      <div className="profile-card profile-details">
        <div className="section-header">
          <h2>Personal Information</h2>
        </div>

        <div className="info-grid">
          <div className="info-group">
            <span className="info-label">Full Name</span>
            <div className="info-value">{singleUser?.name || 'Not Provided'}</div>
          </div>

          <div className="info-group">
            <span className="info-label">Email Address</span>
            <div className="info-value">{singleUser?.email || 'Not Provided'}</div>
          </div>

          <div className="info-group">
            <span className="info-label">Phone Number</span>
            <div className="info-value">{singleUser?.phone || 'Not Provided'}</div>
          </div>

          <div className="info-group">
            <span className="info-label">Blood Group</span>
            <div className="info-value">{singleUser?.blood_group || 'Not Provided'}</div>
          </div>

          <div className="info-group">
            <span className="info-label">Address</span>
            <div className="info-value">{singleUser?.address || 'Not Provided'}</div>
          </div>

          <div className="info-group">
            <span className="info-label">Gender</span>
            <div className="info-value">{singleUser?.gender || 'Not Provided'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import { useContext } from "react";
import { DonorsContext } from "../../Context/ListContext";
import "./Dashboard.scss";

const Dashboard = () => {
  const { donors, approveDonor } = useContext(DonorsContext);

  if (!donors) return <div className="admin-dashboard"><p className="loading-text">Loading...</p></div>;
  if (donors.length === 0) return <div className="admin-dashboard"><p className="empty-text">No Donors Available</p></div>;

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard - User Approvals</h2>
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Blood Group</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donors?.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.blood_group}</td>
                <td>{user.location || "N/A"}</td>
                <td>
                  <span className={`status-badge ${user.is_approved ? 'approved' : 'pending'}`}>
                    {user.is_approved ? "Approved" : "Pending"}
                  </span>
                </td>
                <td className="actions">
                  {!user.is_approved ? (
                    <button 
                      className="btn-approve" 
                      onClick={() => approveDonor(user.id)}
                    >
                      Approve
                    </button>
                  ) : (
                    <span style={{ color: '#2ed573', fontWeight: "bold" }}>Approved</span>
                  )}
                  <button className="btn-reject">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

import { DonorsContext } from "../Context/ListContext";
import { useContext } from "react";
import "./DonorsList.scss";

// Reusable Icon Wrapper
const Icon = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    {children}
  </svg>
);

const MapPinIcon = () => (
  <Icon>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </Icon>
);

const PhoneIcon = () => (
  <Icon>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </Icon>
);

const CalendarIcon = () => (
  <Icon>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </Icon>
);

const UserIcon = () => (
  <Icon>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </Icon>
);

const DonorsList = () => {
  const { donors, filter, setFilter, onHandleClear } = useContext(DonorsContext);

  const onHandleFilter = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const filteredDonors = donors.filter((donor) => {
    const matchesBlood = !filter.blood_group || donor.blood_group === filter.blood_group;
    const matchesGender = !filter.gender || donor.gender === filter.gender;
    const matchesLocation = (donor.address || "").toLowerCase().includes((filter.location || "").toLowerCase());
    return matchesBlood && matchesGender && matchesLocation;
  });

  return (
    <div className="donors-page">
      <div className="filter-tab">
        <select name="blood_group" value={filter.blood_group} onChange={onHandleFilter}>
          <option value="">All Blood Groups</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <input type="text" placeholder="Search Location..." name="location" value={filter.location} onChange={onHandleFilter} />
        <select name="gender" value={filter.gender || ""} onChange={onHandleFilter}>
          <option value="">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button onClick={onHandleClear}>Reset Filters</button>
      </div>

      <div className="list-wrapper">
        {filteredDonors.length === 0 ? (
          <div className="no-data">No donors found matching your criteria.</div>
        ) : (
          filteredDonors.map((donor) => (
            <div className="donor-card" key={donor.id || donor.email}>
              <div className="card-header">
                <div className="donor-info">
                  <div className="donor-avatar">
                    {donor.name ? donor.name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <h3>{donor.name}</h3>
                </div>
                <div className="blood-group">{donor.blood_group}</div>
              </div>

              <div className="card-body">
                <p><MapPinIcon /> <span>{donor.address || "City Not Provided"}</span></p>
                <p><PhoneIcon /> <span>{donor.phone || "Private"}</span></p>
                <p><CalendarIcon /> <span>Last: {donor.last_donate_date || "N/A"}</span></p>
                <p><UserIcon /> <span>{donor.gender ? donor.gender.charAt(0).toUpperCase() + donor.gender.slice(1) : "Any"}</span></p>
              </div>

              <div className="card-actions">
                <button className="btn-connect">
                  Get in Touch
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DonorsList;

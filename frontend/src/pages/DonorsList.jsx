import { DonorsContext } from "../Context/ListContext"
import { useContext } from "react"
import "./DonorsList.scss"
import { data } from "react-router-dom";

// SVG Icons
const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const DonorsList = () => {
    const { donors, filter, setFilter, onHandleClear } = useContext(DonorsContext);

    const onHandleFilter = (e) => {

        const { name, value } = e.target;

        setFilter((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const filteredProducts = donors.filter((donor) => {
        return (
            (!filter.blood_group || donor.blood_group === filter.blood_group) &&
            (!filter.gender || donor.gender === filter.gender) &&
            donor.address
                .toLowerCase()
                .includes(filter.location.toLowerCase())

        )
    })


    return (
        <div className="donors-page">
            <div className="filter-tab"  >
                <select defaultValue="" name="blood_group" value={filter.blood_group} onChange={onHandleFilter}>
                    <option value="" disabled>Blood Type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>
                <input type="text" placeholder="Location" name="location" onChange={onHandleFilter} />
                <select defaultValue="" name="gender" onChange={onHandleFilter}>
                    <option value="" disabled>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <button onClick={onHandleClear}>Clear</button>
            </div>


            <div className="list-wrapper">





                {
                    filteredProducts.length === 0 ? (
                        <p>No data found</p>
                    ) :
                        filteredProducts?.map((datas) => (
                            <div className="donor-card">
                                <div className="card-header">
                                    <div className="donor-info">
                                        <div className="donor-avatar">A</div>
                                        <h3>{datas.name}</h3>
                                    </div>
                                    <div className="blood-group">
                                        {datas.blood_group}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p><MapPinIcon /> <span>{datas.address}</span></p>
                                    <p><PhoneIcon /> <span>{datas.phone}</span></p>
                                    <p><ClockIcon /> <span>{datas.last_donate_date}</span></p>
                                    <p><UserIcon /> <span>Any Time</span></p>
                                </div>
                                <div className="card-actions">
                                    <button className="btn-connect" onClick={onHandleClear}>Connect Now</button>
                                </div>
                            </div>
                        ))
                }


            </div>
        </div>
    )
}

export default DonorsList
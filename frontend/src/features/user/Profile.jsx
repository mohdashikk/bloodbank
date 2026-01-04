import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { DonorsContext } from "../../Context/ListContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { donors } = useContext(DonorsContext);
  

  if (!donors) return <p>Loading.......</p>;
  if (donors.length === 0) return <p>No Donors Available</p>;

  console.log(user);
  return (
    <div>
      <h2>Welcome{user.name}</h2>

      {donors.map((datas) => (
        <div key={datas.id}>
          <h2>{datas.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Profile;

import { useContext } from "react";
import { DonorsContext } from "../../Context/ListContext";

const Dashboard = () => {
  const { donors } = useContext(DonorsContext);

  if (!donors) return <p>Loading.......</p>;
  if (donors.length === 0) return <p>No Donors Available</p>;

  console.log(donors);
  return (
    <div>
      <h2>hellow</h2>
      {donors?.map((datas) => (
        <div key={datas.id}>
          <h3>{datas.name}</h3>
          <p>{datas.blood_group}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

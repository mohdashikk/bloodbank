import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axiosInstance";
import { AuthContext } from "./AuthContext";

export const DonorsContext = createContext(null);

export const DonorsProvider = ({ children }) => {

  const { user, loading: authLoading } = useContext(AuthContext);

  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    blood_group: "",
    gender: "",
    location: ""
  })
  const token = localStorage.getItem("token");
  console.log("data from input ", filter)

  const donorsList = async () => {
    setLoading(true);
    setDonors([]);
    try {
      const res = await api.get("data/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDonors(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onHandleClear = () => {


    setFilter({
      blood_group: "",
      gender: "",
      location: "",
    });

  }

  useEffect(() => {
    if (authLoading) return
    if (!user) {
      setDonors([]);
      return
    }
    donorsList();
  }, [user, authLoading, filter]);

  return (
    <DonorsContext.Provider value={{ donors, loading, filter, setFilter, onHandleClear }}>
      {children}
    </DonorsContext.Provider>
  );
};

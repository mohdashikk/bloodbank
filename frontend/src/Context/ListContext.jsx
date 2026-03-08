import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axiosInstance.js";
import { AuthContext } from "./AuthContext";

export const DonorsContext = createContext(null);

export const DonorsProvider = ({ children }) => {
  const { user, loading: authLoading } = useContext(AuthContext);

  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    blood_group: "",
    gender: "",
    location: "",
  });
  const token = localStorage.getItem("token");
  console.log("data from input ", filter);

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
    } finally {
      setLoading(false);
    }
  };

  const approveDonor = async (id) => {
    try {
      const res = await api.post(
        `data/approve/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (res.status === 200) {
        setDonors((prevDonors) =>
          prevDonors.map((donor) =>
            donor.id === id ? { ...donor, is_approved: true } : donor,
          ),
        );
        return true;
      }
    } catch (err) {
      console.error("Failed to approve donor:", err);
      return false;
    }
  };

  const onHandleClear = () => {
    setFilter({
      blood_group: "",
      gender: "",
      location: "",
    });
  };

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setDonors([]);
      return;
    }
    donorsList();
  }, [user, authLoading, filter]);

  return (
    <DonorsContext.Provider
      value={{
        donors,
        loading,
        filter,
        setFilter,
        onHandleClear,
        approveDonor,
      }}
    >
      {children}
    </DonorsContext.Provider>
  );
};

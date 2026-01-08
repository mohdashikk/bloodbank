import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axiosInstance";
import { AuthContext } from "./AuthContext";

export const DonorsContext = createContext(null);

export const DonorsProvider = ({ children }) => {

  const { user, loading: authLoading } = useContext(AuthContext);

  const [donors, setDonors] = useState();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

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

  useEffect(() => {
    if (authLoading) return
    if (!user) {
      setDonors([]);
      return
    }
    donorsList();
  }, [user, authLoading]);

  return (
    <DonorsContext.Provider value={{ donors, loading }}>
      {children}
    </DonorsContext.Provider>
  );
};

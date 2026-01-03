import { createContext, useEffect, useState } from "react";
import api from "../api/axiosInstance";

export const DonorsContext = createContext();

export const DonorsProvider = ({ children }) => {
  const [donors, setDonors] = useState();
  const donorsList = async () => {
    const res = await api.get("data/users");
    setDonors(res.data);
  };

  useEffect(() => {
    donorsList();
  }, []);

  return (
    <DonorsContext.Provider value={donors}>{children}</DonorsContext.Provider>
  );
};

import { createContext, useContext } from "react";
import api from "../api/axiosInstance";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const { user } = useContext(AuthContext);

    const [singleUser, setSingleUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            if (!token) {
                setSingleUser(null);
                setLoading(false);
                return;
            }

            try {
                const res = await api.get("data/single-user", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setSingleUser(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [user]);

    return (
        <UserDataContext.Provider value={{ singleUser }}>
            {children}
        </UserDataContext.Provider>
    );
};

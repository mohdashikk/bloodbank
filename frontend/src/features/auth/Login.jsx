import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router";

const login = () => {
  const [formData, setFomData] = useState({
    email: "",
    password: "",
  });
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFomData({ ...formData, [name]: value });
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    alert("its working well");

    const userLoggeIn = await login(formData);

    if (userLoggeIn.role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/profile");
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  console.log("user data from main auth", user);

  return (
    <div>
      <h1>Login {name}</h1>
      <form action="" onSubmit={onHandleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={onHandleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={onHandleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default login;

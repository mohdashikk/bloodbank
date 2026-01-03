import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {
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

    const userLoggeIn = await login(formData);

    console.log("user login", userLoggeIn);

    if (userLoggeIn.role === "admin") {
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/profile", { replace: true });
    }
  };

  console.log("user data from main auth", user);

  return (
    <div>
      <h1>Logins</h1>
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

export default Login;

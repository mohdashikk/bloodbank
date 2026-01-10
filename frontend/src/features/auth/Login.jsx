import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [formData, setFomData] = useState({
    email: "",
    password: "",
  });

  const notify = () => toast("Wow so easy!");

  const [error, setError] = useState(false);

  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();


  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFomData({ ...formData, [name]: value });
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userLoggeIn = await login(formData);
      console.log("user login", userLoggeIn);

      if (userLoggeIn && userLoggeIn.role === "admin") {
        navigate("/dashboard", { replace: true });
      

      } else if (userLoggeIn) {
        navigate("/profile", { replace: true });
      
      }
    } catch (error) {
      console.error("Login failed", error);
      setError(true);
    }
  };



  return (
    <div className="login-container">
        
      <h1>Logins</h1>
      <form action="" onSubmit={onHandleSubmit} className="login-form">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={onHandleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={onHandleChange}
        />
        <button type="submit">Login</button>

        {error && <ToastContainer />}
      </form>
    </div>
  );
};

export default Login;

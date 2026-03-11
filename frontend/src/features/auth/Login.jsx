import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Logo from "../../components/Logo";
import "./Login.scss";

const Login = () => {
  const [formData, setFomData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();


  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFomData({ ...formData, [name]: value });
    if (error) setError(null); // Clear error on typing
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const userLoggeIn = await login(formData);
      console.log("user login", userLoggeIn);

      if (userLoggeIn && userLoggeIn.role === "admin") {
        navigate("/dashboard", { replace: true });


      } else if (userLoggeIn) {
        navigate("/profile", { replace: true });

      }
    } catch (err) {
      console.error("Login failed", err);

      let errorMessage = "Login failed. Please check your credentials.";
      if (err?.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.message) {
        errorMessage = `Error: ${err.message}`;
      }

      setError(errorMessage);
      toast.error(errorMessage);
    }
  };



  return (
    <div className="auth-form-content">
      <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'center' }}>
        <Logo />
      </div>

      <h1>Welcome Back</h1>
      <p className="subtitle">Please sign in to your LifeDrop account.</p>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={onHandleSubmit} className="login-form">
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            onChange={onHandleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={onHandleChange}
            required
          />
        </div>

        <div className="form-options">
          <label className="remember-me">
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>

        <button type="submit">Sign In</button>

        <p className="redirect">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

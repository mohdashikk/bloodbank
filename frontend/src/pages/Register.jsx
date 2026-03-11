import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Logo from "../components/Logo";
import "../features/auth/Login.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    blood_group: "",
    gender: "",
    last_donate_date: "",
    password: "",
  });

  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      toast.success("Successfully registered! Please login.");
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Registration failed", error);
      toast.error(error?.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="login-container register">
      <div className="login-card">
        <div className="auth-form-content">
          <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'center' }}>
            <Logo />
          </div>

          <h1>Join Our Community</h1>
          <p className="subtitle">Sign up today and help us save lives with LifeDrop.</p>

          <form onSubmit={onHandleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <input type="text" name="name" placeholder="Full Name" onChange={onHandleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" onChange={onHandleChange} required />
              </div>
              <div className="form-group">
                <input type="text" name="phone" placeholder="Phone Number" onChange={onHandleChange} required />
              </div>
              <div className="form-group">
                <input type="text" name="address" placeholder="Residential Address" onChange={onHandleChange} required />
              </div>
              <div className="form-group">
                <select name="blood_group" onChange={onHandleChange} required>
                  <option value="">Select Blood Group</option>
                  <option value="a+">A+</option>
                  <option value="a-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="form-group">
                <select name="gender" onChange={onHandleChange} required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="last_donate_date"
                  placeholder="Last Donate Date (YYYY-MM-DD)"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  onChange={onHandleChange}
                  pattern="\d{4}-\d{2}-\d{2}"
                  title="Date must be in YYYY-MM-DD format"
                  required
                />
              </div>
              <div className="form-group">
                <input type="password" name="password" placeholder="Create Password" onChange={onHandleChange} required />
              </div>
            </div>
            <button type="submit">Sign Up</button>
            <p className="redirect">
              Already have an account? <Link to="/">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
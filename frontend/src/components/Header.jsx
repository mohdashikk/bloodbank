import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Logo from "./Logo";
const Header = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const onHandleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <header>
        <div className="main-container">
          <div className="wrapper">
            <Logo />
            <div className="navigation">
              <ul>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/donorsList">Find Donors</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            </div>
            <div className="buttons">
              {!token ? (
                <button className="primary-button" onClick={onHandleClick}>
                  Register
                </button>
              ) : (
                <button className="primary-button" onClick={onHandleClick}>
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
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
            <div className="logo">
              <h2>Blood Bank</h2>
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

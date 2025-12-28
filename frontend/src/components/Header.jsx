import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
const Header = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onHandleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <div className="flex">
        <h2>Blood Bank</h2>
        <button onClick={onHandleClick}>Logout</button>
      </div>
    </>
  );
};

export default Header;

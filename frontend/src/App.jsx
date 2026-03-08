import AppRouter from "./routes/AppRouter";
import Header from './components/Header'
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { ToastContainer } from 'react-toastify';

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && <Header />}
      <div className="main-container">
        <AppRouter />
      </div>
      <ToastContainer />
    </>
  );
};

export default App;

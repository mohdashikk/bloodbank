import AppRouter from "./routes/AppRouter";
import Header from './components/Header'
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && <Header />}
      <div className="main-container">
        <AppRouter />
      </div>

    </>
  );
};

export default App;

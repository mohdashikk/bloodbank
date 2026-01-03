import AppRouter from "./routes/AppRouter";
import Header from './components/Header'
import { BrowserRouter as Router} from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";

const App = () => {
  return (
    <>
   <Header />
      <div className="main-container">
    <AppRouter />
      </div>

    </>
  );
};

export default App;

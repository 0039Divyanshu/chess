import { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Switch,
  Redirect,
} from "react-router-dom";
import GoogleLoginPage from "./Login Page/GoogleLogin";
import ListOfMovesTable from "./ListOfMovesTable/ListOfMovesTable";
const App = () => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [currentUserType, setCurrentUserType] = useState(null);
  const [userTypes, setUserTypes] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  return (
      <Router>
      <Routes>
        <Route path="/" element={<GoogleLoginPage/>} />
        <Route path="/send-a-move" element={<ListOfMovesTable/>} />
        </Routes>
     </Router>
  );
};

export default App;

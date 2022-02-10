import { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Switch,
  Redirect,
} from "react-router-dom";
import GoogleLoginPage from "./Login Page/GoogleLogin";
import Navbar from "./Navbar/Navbar";
import Login from "./Login Page/Login";
import Container from "./Container/Container";

const App = () => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [currentUserType, setCurrentUserType] = useState(null);
  const [userTypes, setUserTypes] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      <Navbar />

      {/* For main (chess) page */}
      <Container />

      {/* For Login Page */}
      {/* <Router>
        <Login />
      </Router> */}
    </>
  );
};

export default App;

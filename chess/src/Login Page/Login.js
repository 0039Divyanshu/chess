import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Switch,
  Redirect,
} from "react-router-dom";
import GoogleLoginPage from "./GoogleLogin";
import * as style from "./style/style.js";

const Login = () => {
  return (
    <>
      <div style={style.LoginBox}>
        <h1 style={style.centerstuff}>Login</h1>
        <p style={style.LoginBoxP}>Please use @iitdh.ac.in account</p>
        <div style={style.centerstuff}>
          <Routes>
            <Route path="/*" element={<GoogleLoginPage></GoogleLoginPage>} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Login;

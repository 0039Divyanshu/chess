import { React, useState, useEffect } from "react";
import postMethod from "../api";
import { GoogleLogin } from "react-google-login";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

const GoogleLoginPage = (props) => {
  const {
    auth,
    setAuth,
    backendResponse,
    updateBackendResponse,
    userName,
    updateUserName,
    obj,
    updateObj,
  } = props;

  const [isloading, updateLoadingState] = useState(true);
  useEffect(() => {
    if (props) {
      updateLoadingState(false);
    }
  });

  const responseGoogle = async (res) => {
    try {
      const data = await res.profileObj;
      const response = await postMethod(data, "", "/");
      updateBackendResponse(data);
      if (response.status === 200) {
        setAuth(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isloading) {
    return <img alt="loader" src="../img/Snooker.gif"></img>;
  } else {
    return (
      <>
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </>
    );
  }
};

export { GoogleLoginPage };

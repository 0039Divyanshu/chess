import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}

const GoogleLoginPage = () => {
  return(<>
  <GoogleLogin
    clientId={process.env.CLIENT_ID}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
  />
  <GoogleLogout
      clientId={process.env.CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={responseGoogle}
    />
  </>
  )
}

export default GoogleLoginPage;
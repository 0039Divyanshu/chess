import React from 'react';
import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}

const GoogleLoginPage = () => {
  return(<>
  <GoogleLogin
    clientId="800012552860-hr0cps11o2gec06jne7k2141hski3iud.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  </>
  )
}

export default GoogleLoginPage;
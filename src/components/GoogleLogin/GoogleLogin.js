import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId =
  "702121191168-sbq7ipqbrji9t75h21spb87lkhnlh5g8.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );
    refreshTokenSetup(res);
    window.location.replace("http://localhost:3000/dashboard");
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

//   const responseGoogle = (response) => {
//     console.log(response);
//   }
// ^^to look at full google signin object^^

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
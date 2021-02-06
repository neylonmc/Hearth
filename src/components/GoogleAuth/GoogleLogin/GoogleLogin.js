import React from 'react';
import "../GoogleAuth.css";

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../../utils/refreshToken';

const clientId =
  "702121191168-sbq7ipqbrji9t75h21spb87lkhnlh5g8.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        render={renderProps => (
          <button  
            id="google-auth"
            className="google-login"
            onClick={renderProps.onClick} 
            disabled={renderProps.disabled}>
              Login with Google
          </button>
        )}
      />
    </div>
  );
}

export default Login;
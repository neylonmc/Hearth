import React from 'react';
import "./GoogleLogin.css";
import API from "../../../utils/API";
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../../../utils/refreshToken';

const clientId =
  "702121191168-sbq7ipqbrji9t75h21spb87lkhnlh5g8.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );
    refreshTokenSetup(res);

    const newUser = {
      name: res.profileObj.name,
      image: res.profileObj.imageUrl,
      _id: res.profileObj.googleId
    };
    var myUserEntity = {};
      myUserEntity.Id = res.profileObj.googleId;
      myUserEntity.Name = res.profileObj.name;
      myUserEntity.Image = res.profileObj.imageUrl;
  
  //Store the entity object in sessionStorage where it will be accessible from all pages of your site.
    sessionStorage.setItem('myUserEntity',JSON.stringify(myUserEntity));

    API.saveUser(newUser)
      .then((res) => {
        console.log(res)
        console.log("user saved")
      }).catch(err => err)
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
import React from 'react';
import "../GoogleAuth.css";
import { GoogleLogout } from 'react-google-login';

const clientId =
  "702121191168-sbq7ipqbrji9t75h21spb87lkhnlh5g8.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    // alert('Logout made successfully ✌');
    window.location.replace("http://localhost:3000/")
  };

  return (
    <div>
    <p>Click below if you are sure you would like to logout.</p>
      <GoogleLogout
        id="google-auth"
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        render={renderProps => (
          <button  
            id="google-auth"
            className="google-logout"
            onClick={renderProps.onClick} 
            disabled={renderProps.disabled}>
              Logout
          </button>
        )}/> 
    </div>
  );
}

export default Logout;
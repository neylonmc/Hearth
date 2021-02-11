import React from 'react';
import "./GoogleLogout.css";
import { GoogleLogout } from 'react-google-login';

const clientId =
  "702121191168-sbq7ipqbrji9t75h21spb87lkhnlh5g8.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    // alert('Logout made successfully ✌');
    window.location.replace("https://hearthcommunity.netlify.app/" || "http://localhost:3000/")
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        render={renderProps => (
          <button  
            className="google-logout"
            onClick={renderProps.onClick} 
            disabled={renderProps.disabled}>
              logout
          </button>
        )}/> 
    </div>
  );
}

export default Logout;

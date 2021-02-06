import React from 'react';
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
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
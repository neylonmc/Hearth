import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  "702121191168-sbq7ipqbrji9t75h21spb87lkhnlh5g8.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
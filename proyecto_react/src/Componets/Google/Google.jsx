import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

// const responseGoogle = (response) => {
//   console.log(response);
// }

ReactDOM.render(
  <GoogleLogin
    clientId="737691121751-1ukdm2td5rrivg53cblsg893ppk6vcfl.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('googleButton')
);

export default responseGoogle;
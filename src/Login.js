import { Button } from '@material-ui/core';
import React from 'react'
import './Login.css';
import { auth, provider } from './firebase';

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider)
    .catch((error) => alert(error.message))
  }
  return (
    <div className="login">
      <div className="login_logo">
        <img src="http://media.idownloadblog.com/wp-content/uploads/2014/10/Messages-App-Icon.png" alt="logo" />
        <h2>iMessage</h2>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login

// SignIn.js
import React, { useState} from 'react';
import {auth } from "../../firebase.config";
import { signInWithPopup, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const{user, isFetching, error, dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const loginWithUsernameAndPassword = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("successful!!");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });

}

  // const signInWithGoogle = () => {
  //   console.log(auth);
  //  const provider = new GoogleAuthProvider();
  // // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  //  signInWithPopup(auth, provider)
  //     .then((userCredential) => {
  //       // Signed in
  //   const credential = GoogleAuthProvider.credentialFromResult(userCredential);
  //   const token = credential.accessToken;
  //   // The signed-in user info.
  //       const user = userCredential.user;
  //       console.log('User signed in with Google:', user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.error('Error signing in with Google:', errorCode, errorMessage);
  //     });
  // };

  return (
    <div>
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={loginWithUsernameAndPassword}>LogIn</button>
      {/* <button onClick={signInWithGoogle}>LogIn In with Google</button> */}
      <Link to="/signup" >
    <button className="loginRegisterButton">
        Create a New Account
    </button>
    </Link>
    </div>
  );
};

export default Login;

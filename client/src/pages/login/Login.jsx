// SignIn.js
import React, { useState} from 'react';
import {auth } from "../../firebase.config";
import { signInWithPopup, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginCall } from '../../apiCalls';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const{user, isFetching, error, dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const loginWithUsernameAndPassword = async (e) => {
    e.preventDefault();
    loginCall({email: email, password: password}, dispatch);

}


  return (
    <div>
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={loginWithUsernameAndPassword}>LogIn</button>
      <Link to="/signup" >
    <button className="loginRegisterButton">
        Create a New Account
    </button>
    </Link>
    </div>
  );
};

export default Login;

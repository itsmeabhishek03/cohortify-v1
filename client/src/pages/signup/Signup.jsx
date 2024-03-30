import React,{useRef} from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import {auth } from "../../firebase.config";
import axios from "axios";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';



const Signup = () => {

  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const username = useRef();
  const navigate = useNavigate();
  const{dispatch} = useContext(AuthContext);
  


  const handleClick = async (e) =>{
     e.preventDefault();
       if(password.current.value !== passwordAgain.current.value){
        alert("Password didn't match")
        passwordAgain.current.setCustomValidity("password don't match")
       }
       else{
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        try {
          const res = await axios.post("http://localhost:5555/api/auth/register", user);
          console.log(res.data.username);
          if(res.data.username){
            navigate("/login");
            alert("you can login now")
          }
        } catch (error) {
          alert("Invalid email or password");
          console.log(error);
          
        }
  
       }
  }


 

  return (
<div>
<form className="loginBox" >
        
        <input placeholder="Username"
          className="loginInput"
          ref={username}
          required

          />
        
       
        <input placeholder="Email"
          className="loginInput"
          type="email"
          ref={email}
          required
          />
        
        <input placeholder="Password"
          className="loginInput"
          required
          type="password"
          ref={password}
          />
        
        <input placeholder="Password Again"
          className="loginInput"
          required
          type="password"
          ref={passwordAgain}
          />

      
        <button className="loginButton" onClick={handleClick}
        >Sign Up</button>


        <Link to="/login"  >
        <button className="loginRegisterButton">
          Log into Account
        </button>

        </Link>
        {/* <button onClick={signInWithGoogle} >SignIn In with Google</button> */}
      </form>
</div>
  )
}

export default Signup
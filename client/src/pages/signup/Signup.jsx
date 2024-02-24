import React,{useRef} from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import {auth } from "../../firebase.config";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
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
  


  // const signInWithGoogle = async () =>{
     
  //   const provider = new GoogleAuthProvider();
  //  // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  //   signInWithPopup(auth, provider)
  //      .then((userCredential) => {
  //        // Signed in
  //    const credential = GoogleAuthProvider.credentialFromResult(userCredential);
  //    const token = credential.accessToken;
  //    // The signed-in user info.
  //        const user = userCredential.user;
  //        console.log('User signed in with Google:', user);
  //        dispatch({type: "SIGNUP_SUCCESS", payload: user})
  //      })
  //      .catch((error) => {
  //        const errorCode = error.code;
  //        const errorMessage = error.message;
  //        console.error('Error signing in with Google:', errorCode, errorMessage);
  //        dispatch({type: "SIGNUP_FAILURE", payload: errorMessage});

  //      });
  
  // }

  const signInWithEmailAndPassword = async (e) =>{
     e.preventDefault();
       if(password.current.value !== passwordAgain.current.value){
        alert("Password didn't match")
        passwordAgain.current.setCustomValidity("password don't match")
       }
       else{
        // const user = {
        //   username: username.current.value,
        //   email: email.current.value,
        //   password: password.current.value,
        // };
        try {
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User signed in:', user);
            if(user){
              navigate("/login");
              alert("you can login now");
               dispatch({type: "SIGNUP_SUCCESS", payload: user})
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error signing in:', errorCode, errorMessage);
            // dispatch({type: "SIGNUP_FAILURE", payload: errorMessage});
          });
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

      
        <button className="loginButton" onClick={signInWithEmailAndPassword}
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
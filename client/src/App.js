import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate

} from "react-router-dom";
import { useContext } from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Work from './pages/work/Work';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const {user:currentUser} = useContext(AuthContext);
  return (
    <>
    <Router>

     <Routes>

      <Route path="/" element={currentUser ? <Navigate to="/work"/> : <Home/>} />
      <Route path="/signup" element={currentUser ?  <Navigate to="/work"/> :   <Signup/>} />
      <Route path="/login" element={currentUser ?  <Navigate to="/work"/> :   <Login/>} />
      <Route path="/work" element={!currentUser ? <Signup/> : <Work/>} />
    
     </Routes>

    </Router>
  
    </>
  )
}

export default App
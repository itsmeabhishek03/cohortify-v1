import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate

} from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Work from './pages/work/Work';

const App = () => {
  return (
    <>
    <Router>

     <Routes>

      <Route path="/" element={ <Home/>} />
      <Route path="/signup" element={ <Signup/>} />
      <Route path="/login" element={ <Login/>} />
      <Route path="/work" element={<Work/>} />
    
     </Routes>

    </Router>
  
    </>
  )
}

export default App
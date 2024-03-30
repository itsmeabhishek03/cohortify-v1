import React, { useContext } from 'react';
import Topbar from '../../components/topbar/Topbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Channel from '../../components/channel/Channel';
import './work.css';
import { AuthContext } from '../../context/AuthContext';



const Work = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Topbar />
      <div className="container">
        <Leftbar/>
        <Channel/>
        {/* <Rightbar /> */}
      </div>
    </div>
  )
}

export default Work
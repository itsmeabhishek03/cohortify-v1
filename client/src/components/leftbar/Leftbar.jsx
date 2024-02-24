import React from 'react';
import { Chat } from '@mui/icons-material';
import './leftbar.css';

const Leftbar = () => {
  return (
    <div className="leftbar" >
    <div className="leftbarWrapper">
       <ul className="leftbarList">
        
        <li className="leftbarListItem">
          <Chat className='leftbarListItemIcon' color="secondary"/>
          <span className="leftbarListItemText" >Channel #1</span>
        </li>
        <li className="leftbarListItem">
          <Chat className='leftbarListItemIcon' color="secondary"/>
          <span className="leftbarListItemText" >Channel #2</span>
        </li>
        <li className="leftbarListItem">
          <Chat className='leftbarListItemIcon' color="secondary" />
          <span className="leftbarListItemText" >Channel #3</span>
        </li>
        <li className="leftbarListItem">
          <Chat className='leftbarListItemIcon' color="secondary" />
          <span className="leftbarListItemText" >Channel #4</span>
        </li>
              
        
       </ul>
       
        <hr className="sidebarHr" />
        {/* <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul> */}
    </div>
  </div>
  )
}

export default Leftbar;
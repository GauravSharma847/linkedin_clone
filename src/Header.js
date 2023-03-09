import React, { useDebugValue } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import img from './images/gk.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  

  const dispatch = useDispatch();

  const logoutofApp = ()=>{
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className='header'>
      <div className="header__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="" />

        <div className="header__search">
          {/* material ui search icon */}
          <SearchIcon/>
          <input type="text" placeholder='Search'/>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon = {HomeIcon} title = 'Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title ='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title ='Jobs'/>
        <HeaderOption Icon={ChatIcon} title ='Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title ='Notifications'/>
        {/* avatar = {img} */}
        <HeaderOption  avatar = {true} title ='Me' 
          onClick = {logoutofApp}
        />
      </div>
    </div>
  )
}

export default Header
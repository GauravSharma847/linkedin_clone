import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import {login, logout, selectUser} from './features/userSlice'
import Login from './Login';
import Widgets  from './Widgets';
import { auth } from './firebase';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        // logged in state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL
          })
        );
      }else{
        //logged out state
        dispatch(logout());
      }
    })
  },[])


  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header/>

      {!user ? (
        <Login/>
      ) : (
        <div className="app__body">
          <Sidebar/>
          <Feed />  
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;

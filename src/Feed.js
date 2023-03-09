import React, { useEffect, useState } from 'react'
import InputOptions from './InputOptions';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalenderViewDayIcon from '@mui/icons-material/CalendarViewDay';
import FlipMove from 'react-flip-move';
// import { FieldValue } from 'firebase-admin/firestore';

import './Feed.css';
import Post from './Post';
// import firebase from 'firebase/compat/app';
// import "firebase/compat/firestore";
import { onSnapshot,query,orderBy,collection,addDoc ,serverTimestamp } from "firebase/firestore";
import {db} from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Feed() {
    const user = useSelector(selectUser);

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    const postRef = collection(db, "posts");
    const q = query(postRef, orderBy("timestamp", "desc"));

    
    useEffect(() => {
      const getPost = onSnapshot(q, (snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
      });
      return () => {
        getPost();
      };
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
    
        //  Add Data to FireBase
        addDoc(postRef, {
          name: user.displayName,
          description: user.email,
          message: input,
          photoUrl: user.photoUrl || "",
          timestamp: serverTimestamp(),
        })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error.message);
          });
    
        setInput("");
      };
  
  


  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon/>
                <form className = "forminput">
                    <input type = "text" value = {input} onChange = {(e)=>setInput(e.target.value)}/>
                    <button onClick={sendPost} type ='submit'>Send</button>
                </form>
            </div>

            <div className="feed__inputOptions">
                <InputOptions Icon = {ImageIcon} title = 'Photo' color = '#70B5F9'/>
                <InputOptions Icon = {SubscriptionsIcon} title = 'Video' color = '#E7A33E'/>
                <InputOptions Icon = {EventNoteIcon} title = 'Event' color = '#C0CBCD'/>
                <InputOptions Icon = {CalenderViewDayIcon} title = 'Write Article' color = '#7FC15E'/>

            </div>
        </div>

        {/* Post */}
        <FlipMove>
        {posts.map(({id, data : {name, description, message, photoUrl }}) =>(
            <Post
            key = {id}
            name = {name}
            description = {description}
            message = {message}
            photoUrl={photoUrl}

        />
        ))}
        </FlipMove>

        
    </div>
  )
}

export default Feed


    
    // useEffect(()=>{   // snapshot gives the real time listener connection to database
    //     db.collection("posts").onSnapshot((snapshot) =>  // this line says give the snapshot of posts collection
    //         setPosts(
    //             snapshot.docs.map((doc)=>({  // in the collection we have many docs 
    //                 id : doc.id,
    //                 data : doc.data()
    //             }))
    //         )
    //     );
    // },[]);

    // const sendPost = (e)=>{
    //     e.preventDefault();

    //     db.collection('posts').add({
    //         name : "Gaurav Sharma",
    //         description : "This is a test run",
    //         messge : input,
    //         photoUrl: "",
    //         // timestamp : firebase.ServerValue.TIMESTAMP()
    //         timestamp : firebase.firestore.FieldValue.serverTimeStamp(),  // what it does is if two users are posting from different timeStamp  then serverTimeStamp make it the same 
    //     })
    // }
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjSCpehKM3XhRTG5Jt3QJ-Rq2Td43klOw",
    authDomain: "linkedin-clone-2d56f.firebaseapp.com",
    projectId: "linkedin-clone-2d56f",
    storageBucket: "linkedin-clone-2d56f.appspot.com",
    messagingSenderId: "216593390128",
    appId: "1:216593390128:web:6b401be57d3d6001f7abf5"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
export const db = firebaseApp.firestore();
export const auth = firebase.auth();

// export { auth, db ,firebaseApp};


// export default firebase

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyB9plZLsaDbq0F5f2E8-Fj0Y65zM2PBDjw",
  authDomain: "cube-firebase-c82bf.firebaseapp.com",
  projectId: "cube-firebase-c82bf",
  storageBucket: "cube-firebase-c82bf.appspot.com",
  messagingSenderId: "22990546490",
  appId: "1:22990546490:web:4b1ec328e79b3323f07703",
  measurementId: "G-9P970DHYKR"
};

// Initialize Firebase
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export{firebase};
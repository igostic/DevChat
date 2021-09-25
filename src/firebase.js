import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1j1qokY0NFKIZSRlDNJaaMh7taqlWuHc",
  authDomain: "buddy-chat-app-28396.firebaseapp.com",
  databaseURL: "https://buddy-chat-app-28396-default-rtdb.firebaseio.com",
  projectId: "buddy-chat-app-28396",
  storageBucket: "buddy-chat-app-28396.appspot.com",
  messagingSenderId: "743825394436",
  appId: "1:743825394436:web:80a71aee4023edf49e5e51",
  measurementId: "G-B0G8XPSDLF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

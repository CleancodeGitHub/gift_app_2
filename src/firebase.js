import firebase from "firebase";

const firebaseConfig = {

  apiKey: "AIzaSyBTRdChGGbCimxyiD7a5pNYiEis3bPeJiw",

  authDomain: "gift-project-2.firebaseapp.com",

  projectId: "gift-project-2",

  storageBucket: "gift-project-2.appspot.com",

  messagingSenderId: "751940750757",

  appId: "1:751940750757:web:e1de4b3dab77635cf12c4c"

};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref("/list");

export default db;

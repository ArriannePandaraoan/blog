import firebase from 'firebase/compat/app';
// import "firebase/compat/auth";
import "firebase/compat/database";


const firebaseConfig = {
    apiKey: "AIzaSyAQucZ1rSaATaA0RlMqukDgkq1sYmphSN4",
    authDomain: "new-blog-1cc81.firebaseapp.com",
    databaseURL: 'https://new-blog-1cc81-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: "new-blog-1cc81",
    storageBucket: "new-blog-1cc81.appspot.com",
    messagingSenderId: "796251275206",
    appId: "1:796251275206:web:d5d984fc0b9efa1cce3cc7",
    measurementId: "G-5FV3KW5M7S"
  };

  
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);



  export const db = firebase.database().ref('/post-blog');

  
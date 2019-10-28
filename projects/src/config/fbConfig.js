import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAoPvUoS0BInCqrmly9D0SNTJF-ltxLOZ0",
    authDomain: "projects-4e4e7.firebaseapp.com",
    databaseURL: "https://projects-4e4e7.firebaseio.com",
    projectId: "projects-4e4e7",
    storageBucket: "projects-4e4e7.appspot.com",
    messagingSenderId: "853851420045",
    appId: "1:853851420045:web:831d807315dbb4bc0779c4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
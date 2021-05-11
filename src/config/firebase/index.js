import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';



var firebaseConfig = {
    apiKey: "AIzaSyBEY60ztDtaANHxYjSDNbDFWL34YjXBgfo",
    authDomain: "final-project-9c9ab.firebaseapp.com",
    projectId: "final-project-9c9ab",
    storageBucket: "final-project-9c9ab.appspot.com",
    messagingSenderId: "857002836056",
    appId: "1:857002836056:web:5b8358b94837f2296d4a2d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;

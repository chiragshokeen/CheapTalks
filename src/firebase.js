//import firebase from "firebase" ;
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCUTZ_HHE4yuDsd6pdpNlBhdJ9ElsqZMXc",
    authDomain: "whatsapp-clone-26d59.firebaseapp.com",
    projectId: "whatsapp-clone-26d59",
    storageBucket: "whatsapp-clone-26d59.appspot.com",
    messagingSenderId: "456919684621",
    appId: "1:456919684621:web:99b03046e62e4678a72744",
    measurementId: "G-DVV1MGDDM8"
  }; 

   const firebaseApp = firebase.initializeApp(firebaseConfig) ;

   const db = firebaseApp.firestore() ;
   const auth = firebase.auth() ;

   const provider = new firebase.auth.GoogleAuthProvider() ; 

   export {auth , provider};
   export default db ;
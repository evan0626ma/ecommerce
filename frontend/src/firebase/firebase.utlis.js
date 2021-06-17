import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDgPKPxCcecUoGY9zFlC75Tul4Ayxu9pBo",
    authDomain: "ecommerce-db-48d4e.firebaseapp.com",
    projectId: "ecommerce-db-48d4e",
    storageBucket: "ecommerce-db-48d4e.appspot.com",
    messagingSenderId: "179791259661",
    appId: "1:179791259661:web:1b7a3020fbaeb9ad544d44",
    measurementId: "G-WGPFZD48LY"
  };
  
  firebase.initializeApp(config);

  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; 
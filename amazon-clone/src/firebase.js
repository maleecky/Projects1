import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAN2gmtF11rqKGL96jyIRm1eIgPYOs9GU4",
    authDomain: "clone-b50ce.firebaseapp.com",
    projectId: "clone-b50ce",
    storageBucket: "clone-b50ce.appspot.com",
    messagingSenderId: "63508951354",
    appId: "1:63508951354:web:1958b758332b2175a9e003",
    measurementId: "G-P820QNE693"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }


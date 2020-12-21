import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0XHPemu3hgZTIWMMTEiK60Q7S0N_QXh0",
    authDomain: "discord-clone-76625.firebaseapp.com",
    projectId: "discord-clone-76625",
    storageBucket: "discord-clone-76625.appspot.com",
    messagingSenderId: "142330692877",
    appId: "1:142330692877:web:696f7e78eaeb0dde815c44",
    measurementId: "G-9V5P57B4BV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
const provider =    new firebase.auth.GoogleAuthProvider();

export { auth , provider};
export default db;
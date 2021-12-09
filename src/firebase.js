import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBZopCiqyBblOwib_d2lwBXlSdhSXjgt7I",
    authDomain: "netclone-14d78.firebaseapp.com",
    projectId: "netclone-14d78",
    storageBucket: "netclone-14d78.appspot.com",
    messagingSenderId: "631121755850",
    appId: "1:631121755850:web:ee7161396845953d783e33",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;
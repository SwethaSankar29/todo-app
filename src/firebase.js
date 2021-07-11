 
 import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDl9YKMdyjqVla7Q_nAuU5bZO4OAPooqiU",
    authDomain: "to-do-app-bc294.firebaseapp.com",
    projectId: "to-do-app-bc294",
    storageBucket: "to-do-app-bc294.appspot.com",
    messagingSenderId: "688839885737",
    appId: "1:688839885737:web:7958a07295e4519eca7ab8",
    measurementId: "G-QT2N0D8839"

 });
 const db = firebaseApp.firestore();

 export default db;
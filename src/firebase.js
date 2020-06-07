import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBAubQILQOAUCRPBOxnVaFPQmS_wHh1LZc",
    authDomain: "todo-app-a4132.firebaseapp.com",
    databaseURL: "https://todo-app-a4132.firebaseio.com",
    projectId: "todo-app-a4132",
    storageBucket: "todo-app-a4132.appspot.com",
    messagingSenderId: "466997545276",
    appId: "1:466997545276:web:d3ea1086cfa372543d7639",
    measurementId: "G-3G10JFD296"
});

const db = firebaseApp.firestore();


export default db;
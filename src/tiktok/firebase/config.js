import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC4N0kNiXvenJYLxqLCbDp9ivEHwre4HWE",
    authDomain: "tiktok-240b4.firebaseapp.com",
    projectId: "tiktok-240b4",
    storageBucket: "tiktok-240b4.appspot.com",
    messagingSenderId: "60760735880",
    appId: "1:60760735880:web:4ac9d44f9bdbfeaee7df3d",
    measurementId: "G-6XEE2M7QKV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;
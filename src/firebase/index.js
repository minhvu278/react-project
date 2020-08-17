import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDx-gnHiBULjjfRONVH71nNbFENNfHIQPA",
    authDomain: "vureactjs.firebaseapp.com",
    databaseURL: "https://vureactjs.firebaseio.com",
    projectId: "vureactjs",
    storageBucket: "vureactjs.appspot.com",
    messagingSenderId: "1038707294553",
    appId: "1:1038707294553:web:c44cff75eda4ada88b0c48",
    measurementId: "G-62GXTNGTZ1"
};

firebase.initializeApp(config);
export default firebase
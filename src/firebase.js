import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAyts1e1EIktDtDpLGvsHaWZoPfnsXbNXc",
    authDomain: "linkedin-clone-2176f.firebaseapp.com",
    projectId: "linkedin-clone-2176f",
    storageBucket: "linkedin-clone-2176f.appspot.com",
    messagingSenderId: "350833609465",
    appId: "1:350833609465:web:0872f1718e181c45b8f028"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
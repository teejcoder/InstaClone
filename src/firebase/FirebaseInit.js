import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = fb.initializeApp({
    apiKey: "AIzaSyAT76acsIvAyGOe5m3vnu0LhpPqUAL3QVA",

    authDomain: "instaclone-77325.firebaseapp.com",
  
    projectId: "instaclone-77325",
  
    storageBucket: "instaclone-77325.appspot.com",
  
    messagingSenderId: "708517409580",
  
    appId: "1:708517409580:web:dab6e82ab97e5681e6f289",
  
    measurementId: "G-XKJ57FSHPN"
  
});

const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };
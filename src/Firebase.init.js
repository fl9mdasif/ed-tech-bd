import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLh27VFqxTOuE4NeJDjB4lmA_faj-Fyp8",
    authDomain: "sunshine-assignment.firebaseapp.com",
    projectId: "sunshine-assignment",
    storageBucket: "sunshine-assignment.appspot.com",
    messagingSenderId: "1028800555026",
    appId: "1:1028800555026:web:4d83e62588e167189ed0cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
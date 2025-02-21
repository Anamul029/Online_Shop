// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwQuJUylnk4PeqzrcOJVXOC-My2MgGp9U",
  authDomain: "online-shop-2f4a5.firebaseapp.com",
  projectId: "online-shop-2f4a5",
  storageBucket: "online-shop-2f4a5.firebasestorage.app",
  messagingSenderId: "259274249895",
  appId: "1:259274249895:web:1f4611f6ee62b33491ad82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
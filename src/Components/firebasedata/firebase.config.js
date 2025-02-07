// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB21pRvc3LBwvQCKqzXZ4oIjrW2P3QvGhg",
  authDomain: "b10-a10-c83ce.firebaseapp.com",
  projectId: "b10-a10-c83ce",
  storageBucket: "b10-a10-c83ce.firebasestorage.app",
  messagingSenderId: "682918323423",
  appId: "1:682918323423:web:abd401e3f064c33b24356a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export  const auth = getAuth(app);
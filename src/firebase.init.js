// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCaV8njz4wddTjtpS85j_ZbwO2aVcGh-o",
  authDomain: "chef-ishrat-s-catering.firebaseapp.com",
  projectId: "chef-ishrat-s-catering",
  storageBucket: "chef-ishrat-s-catering.appspot.com",
  messagingSenderId: "571433638266",
  appId: "1:571433638266:web:cbe72a5688e2889c865ec3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth ;
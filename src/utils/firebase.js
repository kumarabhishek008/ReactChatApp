// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2rugBW-7BlszD8KALhI7bIVmLDFaS0jU",
  authDomain: "test-c462f.firebaseapp.com",
  projectId: "test-c462f",
  storageBucket: "test-c462f.appspot.com",
  messagingSenderId: "857402954408",
  appId: "1:857402954408:web:dc043e3123bb7d2ecb289d",
  measurementId: "G-P7GDCZHM6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
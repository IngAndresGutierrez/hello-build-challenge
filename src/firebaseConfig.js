// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJR7_so5Uozcu6aaFoBCFhJrakFYwu6w8",
    authDomain: "hello-build-challenge.firebaseapp.com",
    projectId: "hello-build-challenge",
    storageBucket: "hello-build-challenge.appspot.com",
    messagingSenderId: "1092057452756",
    appId: "1:1092057452756:web:023179b501ed46b6dc2b41",
    measurementId: "G-812KDYYPMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAjzSYF8MX36fjG3TZSRU3f9gcBsKQNfeQ",
    authDomain: "fir-app-tuto-22097.firebaseapp.com",
    projectId: "fir-app-tuto-22097",
    storageBucket: "fir-app-tuto-22097.appspot.com",
    messagingSenderId: "934439249977",
    appId: "1:934439249977:web:c6608286acaf88f77085e8",
    measurementId: "G-WWMMTQ8KJP"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  

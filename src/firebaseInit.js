// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken } from "firebase/messaging";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // Firebase Configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA5NDgsl6B9j433MKSUMhJh0VP09bUBEgs",
//   authDomain: "nepconn-f1d91.firebaseapp.com",
//   projectId: "nepconn-f1d91",
//   storageBucket: "nepconn-f1d91.firebasestorage.app",
//   messagingSenderId: "63606679386",
//   appId: "1:63606679386:web:2d4ad030e13078d1bf7563",
//   measurementId: "G-SSTC7KEDC2"
// };

// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// export const getFCMToken = async (setTokenFound) => {
//   let currentToken = "";

//   try {
//     currentToken = await getToken(messaging, { vapidKey: "BJyVBk56OkboqfjtKqRJrZJ0c2TkBxfQAj-95crQ4Xi6MVS5r2qnT3ccc-lp3TFVtJsF7lX0DVSfb7P9VLR75pU" });
//     if (currentToken) {
//       setTokenFound(true);
//     } else {
//       setTokenFound(false);
//     }
//   } catch (error) {
//     console.log("An error occurred while retrieving token. ", error);
//   }

//   return currentToken;
// };

// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     messaging.onMessage((payload) => {
//       resolve(payload);
//     });
//   });




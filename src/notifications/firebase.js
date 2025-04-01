// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
// import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAR0ddeKUWhGickNgMzwFeTex8PFzSEgQ",
  authDomain: "push-notifications-ff30a.firebaseapp.com",
  projectId: "push-notifications-ff30a",
  storageBucket: "push-notifications-ff30a.firebasestorage.app",
  messagingSenderId: "268046611925",
  appId: "1:268046611925:web:b8ae08d95c19a2d086795c",
  measurementId: "G-X18BDGFF82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
// const analytics = getAnalytics(app);
// device token = e3R5kn6w-jyQdxgw2LBXNu:APA91bHBWwIA1-BsUKxMvMO12OX1qqZPm2apo2cI2KF0jTkOcnqmo18kXZYMy-Se7dFE628jdo6Wu8sdvT4aVai6R5p6SN_XkC6cWYUzQ7FIDJKc6-EBHM4

export const generateToken = async () => {
    const permission =  await Notification.requestPermission();
    console.log("Notification permission status:", permission);

    if (permission === "granted") {
        const token = await getToken ( messaging, { vapidKey: "BI5paDxqmVlSuL52-at9TzGe2ks9b-2dEv8JLpXkIwTdvHNbGKk0lDbb72pz0jCs6JXEBzG31M7aC_jY0tXoniY"
        });
        console.log("Token generated:", token);
    }
}
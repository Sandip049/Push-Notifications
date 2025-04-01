// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import Notifications from "./components/Notifications";
import "./App.css";
import { useEffect } from "react";
import { generateToken, messaging } from "./notifications/firebase";
import { onMessage } from "firebase/messaging";

function App() {
  // const [count, setCount] = useState(0);
  // index.js or your main entry file
  // if ("serviceWorker" in navigator) {
  //   navigator.serviceWorker
  //     .register("/service-worker.js")
  //     .then((registration) => {
  //       console.log(
  //         "Service Worker registered with scope:",
  //         registration.scope
  //       );
  //     })
  //     .catch((error) => {
  //       console.error("Error registering Service Worker:", error);
  //     });
  // }

  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
    });
  }, []);

  return (
    <>
      {/* <Notifications /> */}
      <div className="App">
        <h1 style={{ color: "black" }}>Push Notifications</h1>
        <p>
          This is a simple example of how to implement push notifications using
          Firebase Cloud Messaging (FCM) in a React application.
        </p>
      </div>
    </>
  );
}

export default App;

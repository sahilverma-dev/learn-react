// import GoogleAuth from "./components/GoogleAuth";

// import EmailPassSignIn from "./components/EmailPassSignIn";
import { useEffect } from "react";
// import EmailPassSignUp from "./components/EmailPassSignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import Firestore from "./components/Firestore";

const App = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  }, []);

  return (
    <div>
      {/* <GoogleAuth /> */}
      {/* <EmailPassSignUp /> */}
      {/* <EmailPassSignIn /> */}
      <Firestore />
    </div>
  );
};

export default App;

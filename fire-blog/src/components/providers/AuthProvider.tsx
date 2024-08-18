// firebase
import { useEffect, useState } from "react";
import { auth, firestore } from "@/firebase/config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { AuthContext } from "@/context/AuthContext";

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      try {
        setLoading(true);
        setUser(user);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    });
  }, []);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    try {
      await setDoc(
        doc(firestore, `users/${user?.uid}`),
        {
          name: user?.displayName,
          email: user?.email,
          photoURL: user?.photoURL,
          phoneNumber: user?.phoneNumber,
          url: window.location.host,
          timestamp: serverTimestamp(),
        },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {loading ? <p>Loading ...</p> : children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../services/firebase";

const auth = () => {
  const initAuth = getAuth(app);
  const signUp = async (email: string, password: string) => {
    try {
      const response = await createUserWithEmailAndPassword(
        initAuth,
        email,
        password
      );

      return response;
    } catch (e) {
      console.log(e);
    }
  };

  const signIn = async (email: string, password: string) => {
    const user = await signInWithEmailAndPassword(initAuth, email, password);

    console.log(user.user);
  };

  const getUserInfo = () => {
    onAuthStateChanged(initAuth, (user) => {
      if (user) {
        console.log(user);
      }

      return user;
    });
  };

  const signUserOut = async () => {
    try {
      const signedOut = await signOut(initAuth);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return {
    signIn,
    getUserInfo,
    signUserOut,
    signUp,
  };
};

export default auth;

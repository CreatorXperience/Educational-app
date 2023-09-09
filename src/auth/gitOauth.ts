import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../services/firebase";

const signInWithGitOauth = () => {
  const auth = getAuth(app);
  const gitAuthProvider = new GithubAuthProvider();

  signInWithPopup(auth, gitAuthProvider)
    .then((result) => {
      const userResult = GithubAuthProvider.credentialFromResult(result);
      const token = userResult?.accessToken;

      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      const errorAuth = GithubAuthProvider.credentialFromError(error);

      const errorMail = error.customData.mail;
    });
};

// Firebase.jsx
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQeU3JsYnORyiWGQvOkFZjlKXIDKzUT3o",
  authDomain: "task-manager-5c793.firebaseapp.com",
  projectId: "task-manager-5c793",
  storageBucket: "task-manager-5c793.firebasestorage.app",
  messagingSenderId: "55125239666",
  appId: "1:55125239666:web:31d0328b6893b563099feb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
auth.languageCode = 'en';

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider(); // Renamed to githubProvider for consistency

export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider)
    .then((result) => {
      // Removed: const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(`${errorCode}: ${errorMessage}`);
    });
};

export const signInWithGithub = () => {
  return signInWithPopup(auth, githubProvider)
    .then((result) => {
      // Removed: const credential = GithubAuthProvider.credentialFromResult(result);
      const user = result.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(`${errorCode}: ${errorMessage}`);
    });
};

export default app;
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQeU3JsYnORyiWGQvOkFZjlKXIDKzUT3o",
  authDomain: "task-manager-5c793.firebaseapp.com",
  projectId: "task-manager-5c793",
  storageBucket: "task-manager-5c793.firebasestorage.app",
  messagingSenderId: "55125239666",
  appId: "1:55125239666:web:31d0328b6893b563099feb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
auth.languageCode = 'en';

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider(); 

// Add scopes to request email selection
googleProvider.addScope('email');
googleProvider.addScope('profile');
// Set custom parameters to force account selection
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => {
  // First sign out to clear any existing sessions
  return signOut(auth).then(() => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Google Sign-in Error:", errorCode, errorMessage);
        throw new Error(`${errorCode}: ${errorMessage}`);
      });
  });
};
githubProvider.addScope('user');
githubProvider.addScope('repo');
// Set custom parameters if needed
githubProvider.setCustomParameters({
  allow_signup: 'true'
});

export const signInWithGithub = () => {
  // First sign out to clear any existing sessions
  return signOut(auth).then(() => {
    return signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("GitHub Sign-in Error:", errorCode, errorMessage);
        throw new Error(`${errorCode}: ${errorMessage}`);
      });
  });
};

export default app;
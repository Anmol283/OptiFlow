import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';
import ThreeParticles from "../components/ThreeParticles"; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, signInWithGoogle, signInWithGithub } from '../components/Firebase';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Email/Password Registration Handler
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered successfully:", userCredential.user);
      alert("Account created successfully!");
      navigate("/"); // Redirect to login page
    } catch (error) {
      console.error("Registration error:", error);
      if (error.code === 'auth/email-already-in-use') {
        alert("This email is already in use. Please use a different email or login.");
      } else if (error.code === 'auth/invalid-email') {
        alert("Invalid email format. Please check your email address.");
      } else if (error.code === 'auth/weak-password') {
        alert("Password is too weak. Please use a stronger password.");
      } else {
        alert("Error creating account: " + error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Google Sign-In Handler
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const user = await signInWithGoogle();
      console.log("Signed up with Google:", user.displayName);
      alert("Account created successfully with Google!");
      navigate('/Home'); // Redirect to Home since Google sign-in logs the user in
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      if (error.code === 'auth/popup-closed-by-user') {
        alert("Sign-in popup was closed. Please try again.");
      } else {
        alert("An error occurred during Google sign-in. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // GitHub Sign-In Handler
  const handleGithubSignIn = async () => {
    setIsLoading(true);
    try {
      const user = await signInWithGithub();
      console.log("Signed up with GitHub:", user.displayName);
      alert("Account created successfully with GitHub!");
      navigate('/Home'); // Redirect to Home since GitHub sign-in logs the user in
    } catch (error) {
      console.error("GitHub sign-in error:", error.message);
      if (error.code === 'auth/account-exists-with-different-credential') {
        alert("This GitHub account is linked to a different email. Please use that email to log in.");
      } else if (error.code === 'auth/popup-closed-by-user') {
        alert("Sign-in popup was closed. Please try again.");
      } else {
        alert("An error occurred during GitHub sign-in. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <ThreeParticles />
      <div className="login-box">
        <h2>Welcome</h2>
        <p>Please enter your details to sign up.</p>

        <div className="social-login">
          <button 
            className="social-btn google" 
            onClick={handleGoogleSignIn} 
            disabled={isLoading}
          >
            <img src="/images/google.png" alt="Google" />
          </button>
          <button 
            className="social-btn github" 
            onClick={handleGithubSignIn} 
            disabled={isLoading}
          >
            <img src="/images/github.png" alt="GitHub" />
          </button>
        </div>

        <div className="divider">OR</div>

        <form onSubmit={handleRegister}>
          <input 
            type="email" 
            placeholder="E-Mail Address" 
            className="form-input" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
            disabled={isLoading}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="form-input" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
            disabled={isLoading}
          />
          <br/>
          <button 
            type="submit" 
            className="signup-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="signup-link">
          Already have an account? <Link to='/'>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
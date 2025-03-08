import React, { useState } from 'react';
import './Login.css';
import ThreeParticles from '../components/ThreeParticles';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithGoogle, signInWithGithub } from '../components/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Home');
    } catch (error) {
      console.error('Login error:', error);
      if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
        alert("User doesn't exist. Please create an account.");
      } else {
        alert('An error occurred during login. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      navigate('/Home');
    } catch (error) {
      console.error('Google sign-in error:', error.message);
      alert('An error occurred during Google sign-in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithGithub();
      navigate('/Home');
    } catch (error) {
      console.error('GitHub sign-in error:', error.message);
      if (error?.code === 'auth/account-exists-with-different-credential') { // Optional chaining
        alert('This GitHub account is linked to a different email. Please use that email to log in.');
      } else if (error?.code === 'auth/popup-closed-by-user') {
        alert('Sign-in popup was closed. Please try again.');
      } else {
        alert('An error occurred during GitHub sign-in. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <ThreeParticles />
      <div className="login-box">
        <h2>Welcome back</h2>
        <p>Please enter your details to Login.</p>

        <div className="social-login">
          <button
            className="social-btn google"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
          >
            <img src={process.env.PUBLIC_URL + '/images/google.png'} alt="Google" />
          </button>
          <button
            className="social-btn github"
            onClick={handleGithubSignIn}
            disabled={isLoading}
          >
            <img src={process.env.PUBLIC_URL + '/images/github.png'} alt="GitHub" />
          </button>
        </div>

        <div className="divider">OR</div>

        <form onSubmit={handleSubmit}>
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
          <br />
          <button type="submit" className="sign-in-btn" disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
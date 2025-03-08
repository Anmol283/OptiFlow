import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Report from './pages/Report';
import ThreeParticles from './components/ThreeParticles';
import TaskLoader from './pages/TaskLoader';
import { auth } from './components/Firebase'; 
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); 
    });
    return () => unsubscribe(); 
  }, []);


  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <TaskLoader onComplete={handleLoaderComplete} />;
  }

  return (
    <>
      <ThreeParticles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={isAuthenticated ? <Home tasks={tasks} setTasks={setTasks} /> : <Navigate to="/" />} />
        <Route path="/Calendar" element={isAuthenticated ? <Calendar tasks={tasks} /> : <Navigate to="/" />} />
        <Route path="/Report"element={isAuthenticated ? <Report tasks={tasks} setTasks={setTasks} /> : <Navigate to="/" />}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
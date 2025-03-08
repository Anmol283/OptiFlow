import React, { useState, useEffect } from 'react';

const loadingPhrases = [
  { text: 'Organizing Tasks...', stage: 'Step 1' },
  { text: 'Prioritizing Goals...', stage: 'Step 2' },
  { text: 'Optimizing Workflow...', stage: 'Step 3' },
  { text: 'Boosting Efficiency...', stage: 'Step 4' },
  { text: 'Ready to Flow...', stage: 'Step 5' },
  { text: 'OptiFlow!', stage: 'Final Step' },
];

const TaskLoader = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (currentIndex < loadingPhrases.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, getDuration(currentIndex));
      return () => clearTimeout(timer);
    } else {
      setFadeOut(true);
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000); // Match fade-out duration
      return () => clearTimeout(timer);
    }
  }, [currentIndex, onComplete]);

  const getDuration = (index) => {
    if (index < loadingPhrases.length - 1 && index !== 0) {
      return 300;
    } else {
      return 1000;
    }
  };

  // If fading out, don't render anything
  if (fadeOut && currentIndex >= loadingPhrases.length) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000, // High enough to be above everything else
        backgroundColor: '#f0f0f0',
        color: '#000',
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 1s ease-in-out',
        pointerEvents: fadeOut ? 'none' : 'auto', // Disable interaction when fading out
      }}
    >
      <div style={{ fontSize: '4rem', fontWeight: 'bold' }}>
        {loadingPhrases[currentIndex]?.text || ''}
      </div>
      <div style={{ fontSize: '1rem', marginTop: '1rem', color: '#666' }}>
        {loadingPhrases[currentIndex]?.stage || ''}
      </div>
    </div>
  );
};

export default TaskLoader;
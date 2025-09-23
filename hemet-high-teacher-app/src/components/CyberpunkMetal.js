import React from 'react';
import './CyberpunkMetal.css';

const CyberpunkMetal = () => {
  return (
    <div className="cyberpunk-metal-container" data-testid="cyberpunk-metal">
      <svg 
        className="cyberpunk-metal-svg" 
        width="200" 
        height="120" 
        viewBox="0 0 200 120"
        role="img"
        aria-label="Cyberpunk styled metal badge with letters T and i"
      >
        <rect x="10" y="10" width="180" height="100" fill="#2d2d2d" stroke="#00ff00" strokeWidth="2" />
        <text x="60" y="70" fill="#00ff00" fontSize="48" fontFamily="monospace">T</text>
        <text x="120" y="70" fill="#00ff00" fontSize="48" fontFamily="monospace">i</text>
      </svg>
    </div>
  );
};

export default CyberpunkMetal;
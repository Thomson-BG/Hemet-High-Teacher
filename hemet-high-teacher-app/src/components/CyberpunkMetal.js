import React from 'react';
import './CyberpunkMetal.css';

const CyberpunkMetal = () => {
  return (
    <div className="cyberpunk-metal-container">
      <svg 
        width="200" 
        height="120" 
        viewBox="0 0 200 120" 
        className="cyberpunk-metal-svg"
        role="img"
        aria-label="Cyberpunk styled metal badge with letters T and i"
      >
        {/* Metal background with gradient */}
        <defs>
          <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a4a4a" />
            <stop offset="25%" stopColor="#6a6a6a" />
            <stop offset="50%" stopColor="#5a5a5a" />
            <stop offset="75%" stopColor="#7a7a7a" />
            <stop offset="100%" stopColor="#3a3a3a" />
          </linearGradient>
          
          <linearGradient id="currentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0">
              <animate attributeName="stop-opacity" 
                values="0;1;0" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#00ffff" stopOpacity="0.8">
              <animate attributeName="stop-opacity" 
                values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0">
              <animate attributeName="stop-opacity" 
                values="0;1;0" dur="2s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="emboss">
            <feOffset in="SourceAlpha" dx="1" dy="1" result="offset"/>
            <feFlood floodColor="#ffffff" floodOpacity="0.3"/>
            <feComposite in2="offset" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Metal plate background */}
        <rect x="10" y="10" width="180" height="100" rx="15" ry="15" 
              fill="url(#metalGradient)" 
              stroke="#ffd700" 
              strokeWidth="2" 
              filter="url(#emboss)" />
        
        {/* Corner bolts */}
        <circle cx="25" cy="25" r="4" fill="#2a2a2a" stroke="#ffd700" strokeWidth="1"/>
        <circle cx="175" cy="25" r="4" fill="#2a2a2a" stroke="#ffd700" strokeWidth="1"/>
        <circle cx="25" cy="95" r="4" fill="#2a2a2a" stroke="#ffd700" strokeWidth="1"/>
        <circle cx="175" cy="95" r="4" fill="#2a2a2a" stroke="#ffd700" strokeWidth="1"/>
        
        {/* Engraved T letter */}
        <g className="engraved-letter">
          <text x="70" y="75" 
                fontSize="40" 
                fontFamily="Orbitron, monospace" 
                fontWeight="bold"
                fill="#1a1a1a" 
                stroke="#ffd700" 
                strokeWidth="1"
                filter="url(#emboss)">T</text>
        </g>
        
        {/* Engraved i letter */}
        <g className="engraved-letter">
          <text x="125" y="75" 
                fontSize="40" 
                fontFamily="Orbitron, monospace" 
                fontWeight="bold"
                fill="#1a1a1a" 
                stroke="#ffd700" 
                strokeWidth="1"
                filter="url(#emboss)">i</text>
        </g>
        
        {/* Animated current line */}
        <line x1="10" y1="60" x2="190" y2="60" 
              stroke="url(#currentGradient)" 
              strokeWidth="2" 
              className="current-line" />
        
        {/* Spark effects */}
        <g className="spark spark-1">
          <circle cx="50" cy="40" r="1.5" fill="#00ffff" filter="url(#glow)">
            <animate attributeName="opacity" 
              values="0;1;0" dur="0.1s" begin="0s" repeatCount="1" />
          </circle>
        </g>
        
        <g className="spark spark-2">
          <circle cx="150" cy="80" r="1.5" fill="#ffffff" filter="url(#glow)">
            <animate attributeName="opacity" 
              values="0;1;0" dur="0.15s" begin="3s" repeatCount="1" />
          </circle>
        </g>
        
        <g className="spark spark-3">
          <circle cx="100" cy="35" r="1" fill="#ffd700" filter="url(#glow)">
            <animate attributeName="opacity" 
              values="0;1;0" dur="0.12s" begin="7s" repeatCount="1" />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default CyberpunkMetal;
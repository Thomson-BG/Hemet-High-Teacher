import React from 'react';
import './FooterAnimation.css';
import 'animate.css';

const FooterAnimation = () => {
  return (
    <div className="footer-animation-container">
      <p
        className="attribution animate__animated animate__pulse animate__infinite"
        style={{
          '--animate-duration': '2s',
          fontFamily: 'Orbitron, sans-serif',
          color: '#ffd700',
          textShadow: '0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 15px #00ffff, 0 0 20px #00ffff',
        }}
      >
        Thomson innovations
      </p>
    </div>
  );
};

export default FooterAnimation;

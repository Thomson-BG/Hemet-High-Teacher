import React from 'react';
import './RotatingCube.css';

const RotatingCube = () => {
  return (
    <div className="scene">
      <div className="cube">
        <div className="face front">1</div>
        <div className="face back">6</div>
        <div className="face right">4</div>
        <div className="face left">3</div>
        <div className="face top">5</div>
        <div className="face bottom">2</div>
      </div>
    </div>
  );
};

export default RotatingCube;

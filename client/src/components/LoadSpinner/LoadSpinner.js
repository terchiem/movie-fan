import React from 'react';
import './LoadSpinner.css';

/** Loading component that displays an animated spinner */

function LoadSpinner() {
  return (
  <div className="LoadSpinner">
    <div className="spinner"></div>
  </div>
  );
}

export default LoadSpinner;
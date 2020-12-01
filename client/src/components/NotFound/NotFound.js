import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

import notFoundImage from '../../assets/notfound.png';

function NotFound() {
  return (
    <div className="NotFound">
      <img src={notFoundImage} alt="Movie Not Found" />
      <div><Link to="/">Return to List</Link></div>
    </div>
  );
}

export default NotFound;
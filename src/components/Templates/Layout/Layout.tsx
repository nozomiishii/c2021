import React from 'react';
import { Link } from 'react-router-dom';

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <Link to="/">
            <h1>nozomi ishii</h1>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

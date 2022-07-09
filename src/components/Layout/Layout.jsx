import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Main Page</Link>
          </li>
          <li>
            <Link to="/login">Login Page</Link>
          </li>
          <li>
            <Link to="/registration">Regisrtation Page</Link>
          </li>
          <li>
            <Link to="/diary">Diary Page</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator Page</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;

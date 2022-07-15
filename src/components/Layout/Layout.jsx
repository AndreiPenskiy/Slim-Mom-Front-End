import { Modal } from 'components/Modal/Modal';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/diary">Diary Page</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator Page</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Modal />
    </div>
  );
};

export default Layout;

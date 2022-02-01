import React from "react";
import {Link,NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/react">
            React User
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
        </div>
      </nav>
   
  );
};

export default Navbar;

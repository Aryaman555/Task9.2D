import "../CSS/Header.css";
import { Link } from "react-router-dom";
import React from "react";

function Header({ user, onLogout }) {
  return (
    <div className="header">
      <div className="header-left">
        <h1>DEV@Deakin</h1>
      </div>
      <div className="header-center">
        <input placeholder="Search.." className="header-search" />
      </div>
      <div className="header-right">
      <Link to="/plans">Plans</Link>
      <Link to="/post">Post</Link>
        {user ? (
          <Link to="/" onClick={onLogout}>
            Logout
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}

export default Header;




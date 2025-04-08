import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body navbar-dark shadow-sm" 
         data-bs-theme="dark"
         style={{ padding: '0.8rem 1rem' }}>
      <div className="container-fluid">
        {/* Brand Logo with Custom Styling */}
        <Link className="navbar-brand me-4" to="/" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
          <span className="text-warning">Recipe</span>
          <span className="text-success">Palette</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link 
                className="nav-link" 
                to="/"
                style={{ position: 'relative' }}
                activeclassname="active"
              >
                Home
                <span className="nav-underline"></span>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link 
                className="nav-link" 
                to="/login"
                style={{ position: 'relative' }}
                activeclassname="active"
              >
                Login
                <span className="nav-underline"></span>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link 
                className="nav-link" 
                to="/register"
                style={{ position: 'relative' }}
                activeclassname="active"
              >
                Register
                <span className="nav-underline"></span>
              </Link>
            </li>
          </ul>

          {/* Search Form */}
          <form className="d-flex ms-auto" role="search">
            <div className="input-group">
              <input 
                type="search" 
                className="form-control border-end-0" 
                placeholder="Search recipes..." 
                aria-label="Search"
                style={{ minWidth: '250px' }}
              />
              <button 
                className="btn btn-outline-light" 
                type="submit"
                style={{ borderLeft: 'none' }}
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import './Navigation.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="navbar navbar-expand-lg py-4 shadow-lg">
    <div className="container-fluid ">
    <div className ="px-4 fw-light fs-2 text  navbar-brand">Portfolio - Lisa Gunn</div>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item px-4 fw-bold fs-4 nav-link">
        <a 
          
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className= {currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item px-4 fw-bold fs-4 nav-link">
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className= {currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
      <li className="nav-item px-4 fw-bold fs-4 nav-link">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className= {currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className=" nav-item px-4 fw-bold fs-4 nav-link">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className= { currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
</div>
</div>
  );
}

export default Navigation;

import React from 'react';
import {NavLink} from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
   return(
    <nav id="simpleNav" className="navbar">
    <div className="container">
      <NavLink  to="/" className="brand brand-distributed link">
        {/* <img src="https://via.placeholder.com/200x100" alt="" /> */}
        <h3>IB <span>Chem</span></h3>
      </NavLink>
      <button className="nav-toggle">=</button>
      <ul className="main-links">
        <li><NavLink className="link" to="/">Home</NavLink></li>
        <li className="has-children">
          <NavLink className="link" to="#">About Us</NavLink><button className="sub-menu-button">+</button>
          <ul className="sub-menu">
          <li><NavLink className="link" to="/about/Parents">For Parents</NavLink></li>
              <li><NavLink className="link" to="/about/Students">For Students</NavLink></li>
              
          </ul>
        </li>
        {/* <li><NavLink className="link" to="#">Link Four</NavLink></li> */}
        <li className="extra-links">
          <NavLink className="link" to="/ibcurriculum">NEW IB CURRICULUM</NavLink>
            
           </li>
        <li className="extra-links">
          <NavLink className="link" to="/igcse">IGCSE PROGRAMMES</NavLink>
         
        </li>
      </ul>
      <ul className="extra-links">
        <li><NavLink className="link" to="/contact">Contact Us</NavLink></li>
      </ul>
    </div>
  </nav>
   )
}

export default Navbar;
import React from 'react';
import {NavLink} from 'react-router-dom'
import './footer.css'
function Footer(props) {
    return (
        <footer class="footer-distributed">
 
			<div class="footer-left">
				<h3>IB <span>Chem</span></h3>
 
				<p class="footer-links">
					<NavLink to="/">Home </NavLink>
					<span> | </span>
					<NavLink to="/contact">Contact Us</NavLink>
				</p>
 
				<p class="footer-company-name">© 2022 IB Chemistry Learning Solutions.</p>
			</div>
 
			<div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					  <p><span>309 - Rupa Solitaire,
						 Bldg. No. A - 1, Sector - 1</span>
						Mahape, Navi Mumbai - 400710</p>
				</div>
 
				<div>
					<i class="fa fa-phone"></i>
					<p>+91 22-27782183</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><NavLink to="mailto:support@ibchem.com">support@ibchem.com</NavLink></p>
				</div>
			</div>
			<div class="footer-right">
				<p class="footer-company-about">
					<span>About the company</span>
					We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
				<div class="footer-icons">
					<NavLink to="#"><i class="fa fa-facebook"></i></NavLink>
					<NavLink to="#"><i class="fa fa-twitter"></i></NavLink>
					<NavLink to="#"><i class="fa fa-instagram"></i></NavLink>
					<NavLink to="#"><i class="fa fa-linkedin"></i></NavLink>
					<NavLink to="#"><i class="fa fa-youtube"></i></NavLink>
				</div>
			</div>
		</footer>
    );
}

export default Footer;
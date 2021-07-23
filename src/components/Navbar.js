import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className = 'ui raised very padded segment'>
			<a className = 'ui teal inverted segment' > ClinicDent </a> 
			<div className = 'ui right floated header' >
				<button className = ' ui button '> <NavLink to = "/"> Home </NavLink> </button>
				<button className = ' ui button '> <NavLink to = "/About"> About </NavLink> </button>
				<button className = ' ui button '> <NavLink to = "/Contact"> Contact </NavLink> </button>
			</div>
		</nav>
	)
}

export default Navbar;
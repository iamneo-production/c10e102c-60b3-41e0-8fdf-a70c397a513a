import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from '../NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
      
		<Bars />

		<NavMenu>
		<NavLink to='/about' activeStyle>
			Fantasy Dress
		</NavLink>
		<NavLink to='/events' activeStyle>
			Home
		</NavLink>
		<NavLink to='/annual' activeStyle>
			Cart
		</NavLink>
		<NavLink to='/team' activeStyle>
			My order
		</NavLink>
	
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Logout</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;

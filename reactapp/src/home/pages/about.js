import React ,{ useRef} from 'react';
import { GlobalStyle } from '../../globalStyles';
import Hero from '../components/Hero';
import Products from '../components/Products';
import { productData} from '../components/Products/data';
import ScrollToTop from '../components/ScrollToTop';

const About = (props) => {
	const explr=useRef(null);

	const goToSection=()=>window.scrollTo(
		{top:explr.current.offsetTop,
		behaviour: "smooth"	 
		});

	return(
		<div>
			<GlobalStyle />
			<Hero  data={goToSection}/>
			<ScrollToTop/>
			<div ref={explr} id="dressHomeBody">
				<Products heading='Lets Build your Wardrobe ' data={productData} />
			</div>		 
		</div>
	); 
};

export default About;
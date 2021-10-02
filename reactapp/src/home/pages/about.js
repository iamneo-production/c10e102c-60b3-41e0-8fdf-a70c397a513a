import React ,{ useRef} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from '../../globalStyles';
import Hero from '../components/Hero';
import Products from '../components/Products';
import { productData} from '../components/Products/data';
import ScrollToTop from '../components/ScrollToTop';
/*import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from '../../../globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
*/
const About = () => {
	const explr=useRef(null);

	const goToSection=()=>window.scrollTo(
		{top:explr.current.offsetTop,
		behaviour: "smooth"
	 
	 
		});
return(
	<Router>
		  <GlobalStyle />
		  <Hero  data={goToSection}/>
		  <ScrollToTop/>
		 <div ref={explr} id="dressHomeBody">
		 <Products heading='Lets Build your Wardrobe ' data={productData} />
     
		 </div>		 
		</Router>
	/*<div
	style={{
		display: 'flex',
		justifyContent: 'Left',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<h1>Hello there </h1>
	</div>*/
); 


/*const About = () => {
	const explr=useRef(null);
	const goToSection=()=>window.scrollTo(
		{top:explr.current.offsetTop,
		behaviour: "smooth"
	 
	 
		});
	return(
		<Router>
		  <GlobalStyle />
		  <Hero  data={goToSection}/>
		 
		 
		 <h2 ref={explr} >Shop till you drop</h2>
		 
		
		  
		  <Products heading='Lets Build your Wardrobe ' data={productData} />
     
		 
		</Router>
	  );*/

};

export default About;
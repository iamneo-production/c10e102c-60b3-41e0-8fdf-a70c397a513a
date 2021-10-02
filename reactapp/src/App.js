/*import logo from './logo.svg';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
//import { Link } from "react-router-dom";
import CartScreen from './cart/cartScreen';
import navbar from "./navbar"

function App() {
  return (
    <div className="App"> <><navbar/></> <header className="App-header"> <img src={logo} className="App-logo" alt="logo" /> <p> Edit <code>src/App.js</code> and save to reload. </p> <a className="App-link" href="./cart/cartScreen.js" target="_blank" rel="noopener noreferrer" > Learn React </a> </header> </div>
    
  );
}

export default App;
*/
import React  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductScreen from './pages/ProductScreen';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
//import Home from './pages';
import About from './pages/about';
//import Events from './pages/events';
//import AnnualReport from './pages/annual';
//import Teams from './pages/team';
//import Blogs from './pages/blogs';
//import SignUp from './pages/signup';

function App() {
	//class App extends Component {

	return (
	<BrowserRouter>
	<Navbar />
	<Switch>
		<Route path='/' exact component={About} />
		<Route path='/events' component={About} />
		<Route path='/about' component={About} />
    <Route path='/about' component={About} />
	<Route path='/about' component={About} />
    <Route path='/about' component={About} />
		<Route path='/about' component={About} />
		
	<Route path="/product/:id" component={ProductScreen}/>

	</Switch>

	<Footer />
	</BrowserRouter>
);
}

export default App;

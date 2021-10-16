import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Home from './Home.js';
import AddProduct from './AddProduct.js';
import EditProduct from './EditProduct.js';
import React from 'react';
function App()
{
        return(
            <div>
            <Router>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/AddProduct" component={AddProduct} />
            <Route exact path="/EditProduct" component={EditProduct} />
            <Link to="/AddProduct"><button id="cartImage">Add Product</button></Link>
            </Switch>
            </Router>
            </div>
        )
}
export default App;

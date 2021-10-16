import React from 'react';
import {Link} from 'react-router-dom';
function Heading()
{
    return(
            <div>
                <img align="right" width="200" height="200" src="
https://thumbs.dreamstime.com/b/shopping-cart-oran…round-icon-vector-illustration-stock-80754940.jpg
" id="cart" alt="Add Products" />
            <Link to="/AddProduct"><button id="addp">Add Product</button></Link>
            </div>

    )
}
export default Heading;
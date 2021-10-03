import React from 'react';


import { Link } from 'react-router-dom';
import { cartItems} from '../cart/data';
import {
 
  ProductsContainer,
  PrtButton
} from '../components/Products/ProductsElements';
import {FaTrash } from "react-icons/fa";

export default function CartScreen() {


  
  return (<ProductsContainer>
    <div className="app">
  <div className="cart">
  <div className="cart-list">
    <ul className="cart-list-container">
   
      <li style={{background:'#fff700'}}>
   <h3>Shopping Cart</h3>
        <div>
          Product Name
        </div>
        <div>
          Price
        </div>
        <div>Quantity</div>
        <div></div>
      </li>
      
      {
        cartItems.length === 0 ?
          <div>
            Cart is empty
        </div>
          :
          cartItems.map(item =>
            <li>
            <div >
               <Link to="/" >
             
                <img src={item.img} alt="product" />
              
              </Link>
              </div >
             
              <div style={{margin:30,alignContent:'center'}}>
                 {item.productName}
                
              </div>
              <div style={{margin:30,alignContent:'center'}} >
                ${item.price}
              </div>
              <div style={{margin:30,alignContent:'center'}} >
                
                 
                {item.quanity}
              
            
           
          </div>
              <div>
                
                <button type="button" style={{background:'#e31837',color:'#fff',cursor:'pointer',margin: 10,borderRadius:5}} >
                
                < FaTrash  />
                
           
                </button>
              </div>
            </li>
          )
      }
    </ul>
  </div>
  {
    cartItems.length === 0 ?
    <Link to='/'>
    <>
  
    <PrtButton  >
   Go For Shopping
 </PrtButton></></Link>:
<div className="cart-action" disabled={cartItems.length === 0}>
<h3>
        Subtotal ({
cartItems.reduce((a, c) => a + parseInt(c.quanity),0)
} Items):
  
{cartItems.reduce((a, c) => a + parseInt(c.price) * parseInt(c.quanity),0)} ₹
</h3>
 <div>
 <PrtButton className="button primary full-width" >
   Proceed to Checkout
 </PrtButton>
</div>
</div>

}
</div>
</div>
</ProductsContainer>
  )}

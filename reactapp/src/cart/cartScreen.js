import React from 'react';


import { Link } from 'react-router-dom';
import { cartItems} from './data';
import {
 
  ProductsContainer,
  PrtButton
} from '../home/components/Products/ProductsElements';
import {FaTrash } from "react-icons/fa";

export default function CartScreen() {


  
return (<ProductsContainer>
  <div className="app">
    <div className="cart">
      <div className="cart-list">
        <table className="table is-hoverable cart-table">
          <thead>
            <tr className="has-background-warning">
              <td className="image-td">Shopping Cart</td>
              <td>Product Name</td>
              <td>Price</td>
              <td>Quantity</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
          {
            cartItems.length === 0 ?
              <td>
                Cart is empty
              </td>
              :
              cartItems.map(item =>
                <tr>
                  <td className="image-td">
                    <img className="image" src={item.img} alt="product" />              
                  </td>
                  <td>
                      {item.productName}
                  </td>
                  <td>
                    ${item.price}
                  </td>
                  <td>
                    {item.quanity}
                  </td>
                  <td> 
                    <button type="button" style={{background:'#e31837',color:'#fff',cursor:'pointer',margin: 10,borderRadius:5}} >        
                      < FaTrash  />
                    </button>
                  </td>
                </tr>
              )
          }
          {
            cartItems.length === 0 ?
              <tr style={{display:'flex', alignItems: 'center'}}>
                <Link to='/'>
                <>
                <PrtButton  >
                  Go For Shopping
                </PrtButton></></Link>
              </tr>:
          <tr className="cart-action" disabled={cartItems.length === 0} style={{display:'flex', justifyContent: 'center'}}>
            <td>
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
            </td>
          </tr>
           }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</ProductsContainer>
)}

import React from 'react';
import { Link } from 'react-router-dom';
import { myorderItems} from './data';
import {
 
  ProductsContainer,
  PrtButton
} from '../home/components/Products/ProductsElements';



export default function OrderScreen() {
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
              <td>Total Price</td>
            </tr>
          </thead>
          <tbody>
          {
            myorderItems.length === 0 ?
              <td>
                Cart is empty
              </td>
              :
              myorderItems.map(item =>
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
                    {myorderItems.reduce((a, c) => a + parseInt(c.price) * parseInt(c.quanity),0)} ₹
                  </td>
                </tr>
              )
          }
          {
            myorderItems.length === 0 ?
            <tr>
              <Link to='/'>
               <>
                <PrtButton  >
                  Go For Shopping
                </PrtButton></></Link>
                <>
              </>
            </tr>:
            <tr>
              
            </tr>
          }
          </tbody>
        </table>
        </div>
      </div>
    </div>
  </ProductsContainer>
)}
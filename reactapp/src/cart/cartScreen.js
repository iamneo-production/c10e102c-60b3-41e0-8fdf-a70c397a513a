import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {
  ProductsContainer,
  PrtButton
} from '../home/components/Products/ProductsElements';
import {FaTrash } from "react-icons/fa";
import axios from 'axios';


export default function CartScreen() {
  const [state, setState] = useState([]);
  axios.get(`https://8080-abdedcaacccedacedeebaccebadfdbfcfccadbaecfcbc.examlyiopb.examly.io/cart/${localStorage.getItem("mail")}`).then((res) => {
    setState(res.data);
    console.log(state);
  })
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
              state.length === 0 ?
                <td>
                  Cart is empty
                </td>
                :
                state.map(item =>
                  <tr>
                    <td className="image-td">
                      <img className="image" src={item.imageUrl} alt="product" />              
                    </td>
                    <td>
                        {item.productName}
                    </td>
                    <td>
                      ${item.price}
                    </td>
                    <td>
                      {item.quantity}
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
              state.length === 0 ?
                <tr style={{display:'flex', alignItems: 'center'}}>
                  <Link to='/'>
                  <>
                  <PrtButton  >
                    Go For Shopping
                  </PrtButton></></Link>
                </tr>:
            <tr className="cart-action" disabled={state.length === 0} style={{display:'flex', justifyContent: 'center'}}>
              <td>
                <h3>
                        Subtotal ({
                state.reduce((a, c) => a + parseInt(c.quantity),0)
                } Items):
                  
                {state.reduce((a, c) => a + parseInt(c.price) * parseInt(c.quantity),0)} ₹
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

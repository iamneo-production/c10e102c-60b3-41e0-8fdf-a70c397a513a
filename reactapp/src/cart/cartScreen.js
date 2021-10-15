import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {
  ProductsContainer,
  PrtButton
} from '../home/components/Products/ProductsElements';
import axios from 'axios';



class CartScreen extends Component {

  constructor(props){
    super(props);
    this.state={
      value: []
    }
    this.getCart();
  }

  getCart = () => {
    axios.get(`https://8080-abdedcaacccedacedeebaccebadfdbfcfccadbaecfcbc.examlyiopb.examly.io/cart/${localStorage.getItem("mail")}`).then((res) => {
      this.setState({value: res.data});
    });
  }
 
  deleteCartItem = (e) => {
    console.log(e.target.classList[e.target.classList.length - 1]);
    var url = "https://8080-abdedcaacccedacedeebaccebadfdbfcfccadbaecfcbc.examlyiopb.examly.io/cart/delete";
    axios.post(url, `${e.target.classList[e.target.classList.length - 1]}`).then((res) => {
      console.log(res, `${e.target.classList[e.target.classList.length - 1]}`);
      if(res.data){
        this.getCart();
      }
    })
  }
  render() {
    return (
      <ProductsContainer>
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
                this.state.value.length === 0 ?
                  <td>
                    Cart is empty
                  </td>
                  :
                  this.state.value.map(item =>
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
                        <button onClick={this.deleteCartItem} className={item.cartItemId} type="button" style={{background:'#e31837',color:'#fff',cursor:'pointer',margin: 10,borderRadius:5}} >        
                          <i className={`fas fa-trash ${item.cartItemId}`}></i>
                        </button>
                      </td>
                    </tr>
                  )
              }
              {
                this.state.value.length === 0 ?
                  <tr style={{display:'flex', alignItems: 'center'}}>
                    <Link to='/'>
                    <>
                    <PrtButton  >
                      Go For Shopping
                    </PrtButton></></Link>
                  </tr>:
              <tr className="cart-action" disabled={this.state.value.length === 0} style={{display:'flex', justifyContent: 'center'}}>
                <td>
                  <h3>
                          Subtotal ({
                  this.state.value.reduce((a, c) => a + parseInt(c.quantity),0)
                  } Items):
                    
                  {this.state.value.reduce((a, c) => a + parseInt(c.price) * parseInt(c.quantity),0)} ₹
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
    )
  }
}

export default CartScreen
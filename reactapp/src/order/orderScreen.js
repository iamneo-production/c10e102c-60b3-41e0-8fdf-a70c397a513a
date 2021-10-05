import React from 'react';



import { Link } from 'react-router-dom';
import { myorderItems} from './data';
import {
 
  ProductsContainer,
  PrtButton
} from '../components/Products/ProductsElements';


export default function orderScreen() {


  
  return (<ProductsContainer>
    <div className="app">
  <div className="cart">
  <div className="cart-list">
    <ul className="cart-list-container">
   
      <li style={{background:'#fff700'}}>
   <h3>Order History</h3>
        <div>
          Product Name
        </div>
        <div>
          Price
        </div>
        <div>Quantity</div>

        <div>Total Price</div>
        <div></div>
      </li>
      
      {
        myorderItems.length === 0 ?
          <div>
            no order history
        </div>
          :
          myorderItems.map(items =>
            <li>
            <div >
               <Link to="/" >
             
                <img src={items.img} alt="product" />
              
              </Link>
              </div >
             
              <div style={{margin:30,alignContent:'center'}}>
                 {items.productName}
                
              </div>
              <div style={{margin:30,alignContent:'center'}} >
                ${items.price}
              </div>
              <div style={{margin:30,alignContent:'center'}} >
                
                 
                {items.quanity}
              
            
           
          </div>
          
          <div style={{margin:30,alignContent:'center'}} >
                
                 
          {myorderItems.reduce((a, c) => a + parseInt(c.price) * parseInt(c.quanity),0)} ₹

              
            
           
          </div>
          
             
              
            </li>
          )
      }
    </ul>
  </div>
  {
    myorderItems.length === 0 ?
    <Link to='/'>
    <>
  
    <PrtButton  >
   Go For Shopping
 </PrtButton></></Link>:
<>

 
</>

}
</div>
</div>
</ProductsContainer>
  )}
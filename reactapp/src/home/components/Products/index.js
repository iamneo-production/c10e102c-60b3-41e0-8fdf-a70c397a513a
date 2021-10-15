import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import axios from 'axios';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
  QuantityContainer
} from './ProductsElements';

class Products extends Component {
  
  constructor({ heading }){
    super();
    this.heading = heading;
    // this.data = data;
    this.getProducts();
    this.getProducts = this.getProducts.bind(this);
    this.state = {
      sort: "asc",
      data: []
    };
  }


  sortData = () => {
    if(this.state.sort === 'asc'){
      this.state.data.sort(function (a, b) {
        return parseInt(b.price) - parseInt(a.price);
      })
    }else{
      this.state.data.sort(function (a, b) {
        return parseInt(a.price) - parseInt(b.price);
      })
    }
  }
  
  getProducts = () => {
    axios.get(`https://8080-abdedcaacccedacedeebaccebadfdbfcfccadbaecfcbc.examlyiopb.examly.io/home`).then((res) => {
      var d = res.data.sort(function(a, b) {
        return parseInt(a.price) - parseInt(b.price);
      })
      this.setState({ data: d });
      this.sortData();
    })
  }

  selectChange = (e) => {
    if(e.target.value === "2") {
      this.setState({sort: "desc"});
    }else{
      this.setState({sort: "asc"});
    }
    this.sortData()
  }

  addToCart = (e) => {
    const url = `https://8080-abdedcaacccedacedeebaccebadfdbfcfccadbaecfcbc.examlyiopb.examly.io/home/${e.target.parentElement.parentElement.id}`
    const addCart = {
      "quantity": document.querySelector(`.p${e.target.parentElement.parentElement.id}`).innerHTML,
      "email": localStorage.getItem("mail")
    }
    console.log(addCart);
    axios.post(url, addCart).then((res) => { 
      if(res.data){
        document.querySelector(".info").style.display = "block";
        document.querySelector(".info").style.top = "50px";
      }
      setTimeout(function() {
        document.querySelector(".info").style.display = "none";
        document.querySelector(".info").style.top = "-1000px";
      }, 2500);
    });
  }

  placeOrder = () => {
    
  }

  increaseQuantity = (e) => {
    // console.log(document.querySelector(`.p${e.target.parentElement.parentElement.parentElement.parentElement.id}`))
    var val = document.querySelector(`.p${e.target.parentElement.parentElement.parentElement.parentElement.id}`);
    val.innerHTML = parseInt(val.innerHTML) + 1;
  }

  decreaseQuantity = (e) => {
    console.log(document.querySelector(`.p${e.target.parentElement.parentElement.parentElement.parentElement.id}`))
    var val = document.querySelector(`.p${e.target.parentElement.parentElement.parentElement.parentElement.id}`);
    if(val.innerHTML !== "1")
      val.innerHTML = parseInt(val.innerHTML) - 1;
  }
 
  render() {
    return (
      <ProductsContainer>
        <div className="info has-background-success">
          <h1><i className="far fa-check-circle" style={{"margin-right":"10px", "font-size": "22px"}}></i>Added To Cart</h1>
        </div>
        <ProductsHeading>{this.heading}</ProductsHeading>
        <div className="content-home">
          <div className="control has-icons-left">
            <div className="select is-small">
              <select onChange={this.selectChange}>
                <option defaultValue="1" value="1">Sort: Low to High</option>
                <option value="2">Sort: High to Low</option>
              </select>
            </div>
            <div className="icon is-small is-left">
              <i className="fas fa-sort"></i>
            </div>
          </div>
        </div>
        <ProductWrapper>
          {this.state.data.map((product, index) => {
            return (
              <ProductCard key={index} id={product.productId}>
                <Link to={{pathname:`/product/${product.productId}}`, state: product}}>
                <ProductImg src={product.imageUrl} alt={product.alt}  />
                
                </Link>
                <ProductInfo>
                  <ProductTitle>{product.productName}</ProductTitle>
                  <ProductDesc>{product.description}</ProductDesc>
                  <ProductPrice>Rs. {product.price}</ProductPrice>
                  <QuantityContainer>
                    <button className="control" onClick={this.decreaseQuantity}><i className="fas fa-minus"></i></button> 
                    <div className={`text-box p${product.productId}`}>1</div>
                    <button className="control" onClick={this.increaseQuantity}><i className="fas fa-plus"></i></button>
                  </QuantityContainer>
                  <ProductButton onClick={this.addToCart}>Add to Cart</ProductButton>
                  <ProductButton onClick={this.placeOrder}>Buy Now</ProductButton>
                  
                </ProductInfo>
                
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    );
  }
};

export default Products;
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

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
  ProductButton
} from './ProductsElements';

class Products extends Component {
  
  constructor({ heading, data }){
    super();
    this.heading = heading;
    this.data = data;
    this.state = {
      data: this.data
    };
  }
 
  render() {
    return (
      <ProductsContainer>
        <ProductsHeading>{this.heading}</ProductsHeading>
        <div className="content-home">
          <div className="control has-icons-left">
            <div className="select is-small">
              <select>
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
              // replace to={{pathname:`/product/${product.name}}`, state: {id: 1, name: product.name, shirt: 'green'}}}
              <ProductCard key={index} >
                <Link to={{pathname:`/product/${product.name}}`, state: {id: 1, name: product.name, shirt: 'green'}}} replace>
                <ProductImg src={product.img} alt={product.alt}  />
                
                </Link>
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice>{product.price}</ProductPrice>
                
                
                  <ProductButton>{product.button}</ProductButton>
                  <ProductButton>{product.button1}</ProductButton>
                  
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
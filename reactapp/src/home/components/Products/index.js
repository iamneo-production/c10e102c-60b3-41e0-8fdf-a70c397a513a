import React from 'react';
import { Link } from 'react-router-dom';

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

const Products = ({ heading, data }) => {
 
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            
            <ProductCard key={index} >
              <Link to={{pathname:`/product/${product.name}}`, state: {id: 1, name: product.name, shirt: 'green'}}}>
              <ProductImg src={product.img} alt={product.alt}   />
              
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
};

export default Products;
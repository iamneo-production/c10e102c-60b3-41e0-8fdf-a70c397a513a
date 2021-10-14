import React from 'react'
import '../../../../reactapp/src/';
import {
ProductsContainer,
  ProductButton
} from '../components/Products/ProductsElements';
import DetailsThumb from '../components/Products/DetailsThumb';

export default class ProductScreen extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value:this.props.location.state
        }
    }

    alertMessage(){
       console.log(this.props.location.state.id); 
    } 
    

    render(){
        return (
        <ProductsContainer>
            <div className="app-product">
                {
                
                    <div className="details" key={this.state.value.productId}>
                        <div className="big-img">
                            <img src={this.state.value.imageUrl} alt={this.state.value.productName}/>
                        </div>

                        <div className="box">
                        <div className="row">
                        <h2>{this.state.value.productName}</h2>
                    
                        <h3>price:{this.state.value.price}</h3>
                        </div>
                    
                    
                        <p>{this.state.value.description}</p>                        

                        <DetailsThumb images={[this.state.value.imageUrl]} tab={this.handleTab} myRef={this.myRef}  />
                        <ProductButton id="product-btn">Add To Cart</ProductButton>
                        <ProductButton>Buy Now</ProductButton>
                    
                    </div>
                    
                    </div>
                
                }
            </div>
        </ProductsContainer>
        )
    }
}
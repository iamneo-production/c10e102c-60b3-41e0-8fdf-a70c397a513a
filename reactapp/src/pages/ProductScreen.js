/*import React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import { Link,useParams } from 'react-router-dom';
//import { createReview, detailsProduct } from '../actions/productActions';
//import LoadingBox from '../components/LoadingBox/LoadingBox';
//import MessageBox from '../components/MessageBox/MessageBox';
import Rating from '../components/Rating/Rating';
//import { PRODUCT_REVIEW_CREATE_RESET } from '../constants/productConstants';

export default function ProductScreen  () {
 /* const { props } = useParams();
  console.log(props);
  const props1 = props.match.params.id;
  console.log(props1.name);*/
 /* render() {
    const { state } = this.props.location
 /* const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (successReviewCreate) {
      window.alert('Review Submitted Successfully');
      setRating('');
      setComment('');
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }
    dispatch(detailsProduct(productId));
  }, [dispatch, productId, successReviewCreate]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(productId, { rating, comment, name: userInfo.name })
      );
    } else {
      alert('Please enter comment and rating');
    }
  };*/
  /*return (
    <div>
      
        <div>
          <Link to="/about">Back to result</Link>
          <div className="row top">
            <div className="col-2">
            <img
                className="large"
                src={props.img}
                alt={props.alt}
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{props.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={3}
                    numReviews={34}
                  ></Rating>
                </li>
                <li>Pirce : ${props.price}</li>
                <li>
                  Description:
                  <p>{props.desc}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    
                   
                    <Rating
                      rating={4}
                      numReviews={5}
                    ></Rating>
                  </li>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${props.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {5 > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {5 > 0 && (
                    <>
                      
                      <li>
                        <button
                         
                          className="primary block"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
  
        </div>
      
    </div>
  );
}}*/

import React from 'react'
import '../../../reactapp/src/';
import {
ProductsContainer,
  ProductButton
} from '../components/Products/ProductsElements';
//import { Link } from 'react-router-dom';
//import Rating from '../components/Rating/Rating';
import DetailsThumb from '../components/Products/DetailsThumb';

export default class ProductScreen extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value:this.props.location.state,
        }
       

    }

   

alertMessage(){
       console.log(this.props.location.state.id);
       
    } 
    

render(){
  
return (
 <ProductsContainer>
  <div className="app">
        {
          
            <div className="details" key={this.props.location.state.id}>
              <div className="big-img">
                <img src={this.props.location.state.img} alt={this.props.location.state.alt}/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{this.props.location.state.name}</h2>
              
                  <h3>price:{this.props.location.state.price}</h3>
                </div>
               
               
                <p>{this.props.location.state.desc}</p>
                <p>{this.props.location.state.desc}</p>

                <DetailsThumb images={this.props.location.state.src} tab={this.handleTab} myRef={this.myRef}  />
                <ProductButton>{this.props.location.state.button}</ProductButton>
                <ProductButton>{this.props.location.state.button1}</ProductButton>
               
              </div>
              
            </div>
          
        }
      </div>
      </ProductsContainer>
 /* <div>
    
      <div>
        <Link to="/about">Back to result</Link>
        <div className="row top">
          <div className="col-2">
          <img
              className="large"
              src={this.props.location.state.img}
              alt={this.props.location.state.alt}
            ></img>
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{this.props.location.state.name}</h1>
              </li>
              <li>
                <Rating
                  rating={3}
                  numReviews={34}
                ></Rating>
              </li>
              <li>Pirce : ${this.props.location.state.price}</li>
              <li>
                Description:
                <p>{this.props.location.state.desc}</p>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  
                 
                  <Rating
                    rating={4}
                    numReviews={5}
                  ></Rating>
                </li>
                <li>
                  <div className="row">
                    <div>Price</div>
                    <div className="price">${this.props.location.state.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Status</div>
                    <div>
                      {5 > 0 ? (
                        <span className="success">In Stock</span>
                      ) : (
                        <span className="danger">Unavailable</span>
                      )}
                    </div>
                  </div>
                </li>
                {5 > 0 && (
                  <>
                    
                    <li>
                      <button
                       
                        className="primary block"
                      >
                        Add to Cart
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

      </div>
    
  </div>*/
     )
    }
    
    }
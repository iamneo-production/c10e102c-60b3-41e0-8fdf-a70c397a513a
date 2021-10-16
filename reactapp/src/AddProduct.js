import React from 'react';
import validate from './validate.js'
import { Link } from 'react-router-dom';
import { useState } from 'react';


function AddProduct()
{
  const [values,setValues]=useState({
    dname:"",
    dprice:"",
    ddescp:"",
    dimage:"",
    dquan:""
        });
    
  const [errors,setErrors]=useState({});
  
    const handleInputChange = e => {
          const {name,value}=e.target
          setValues({
              ...values,
              [name]:value,
                  });
                           };
  
    const handleSubmit = e => 
    {
        e.preventDefault();
       const validerrors=validate(values);
       const noerrors=Object.keys(validerrors).length === 0;
       setErrors(validerrors);
       if(noerrors)
       {
         console.log("Valid Page",values);
       }
       else{
         console.log("errors try again",validerrors);
       }
       
    };
  return(
    <div >

      <img src="https://media.istockphoto.com/photos/colorful-wome…n-orange-background-picture-id641220298?s=612x612
" id="himg" width="350" height="350" alt="Dress Hangers" />
    
    <div id="addDressBody">

      <h2 className="product-title"> Add Product</h2>

    <form onSubmit={handleSubmit}>

    <input required type="text" id="dressName" value={values.dname} name="dname" placeholder="Product Name" onChange={handleInputChange}  />
    {errors.dname && <p>{errors.dname}</p> }<br />
    
    <input required type="number" id="dressPrice"  value={values.dprice}  name="dprice" placeholder="Product Price" onChange={handleInputChange} />
    {errors.dprice && <p>{errors.dprice}</p> } <br />
   
    <input type="text" required id="dressDescription" value={values.ddescp} name="ddescp" placeholder="Product Description" onChange={handleInputChange} />
    {errors.ddescp && <p>{errors.ddescp}</p> }
    <br />
    <input type="url" required id="dressImageURL" placeholder="Image Url" value={values.dimage}  name="dimage"  onChange={handleInputChange} />
    {errors.dimage && <p>{errors.dimage}</p> }
    <br />
    <input type="number" required id="dressQuantity" value={values.dquan}  placeholder="Product Quantity" name="dquan" onChange={handleInputChange} />
    
    {errors.dquan && <p>{errors.dquan}</p> } <br />
    
    <button type="submit" id="addDressButton">Add</button>
    <Link to="/" ><button id="cancel">Cancel</button></Link>
  </form>
  </div>

  </div>
  )
}
export default AddProduct;
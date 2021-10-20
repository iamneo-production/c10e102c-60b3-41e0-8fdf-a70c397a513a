import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import axios from 'axios';


class AddProduct extends Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      id: '',
      name: '',
      url: '',
      description: '',
      price: '0',
      quantity: '0'
    }
  }

  changeId = (e) => {
    this.setState({id: e.target.value});
  }

  changeName = (e) => {
    this.setState({name: e.target.value});
  }

  changeUrl = (e) => {
    this.setState({url: e.target.value});
  }

  changeDescription = (e) => {
    this.setState({description: e.target.value});
  }

  changePrice = (e) => {
    this.setState({price: e.target.value});
  }

  changeQuantity = (e) => {
    this.setState({quantity: e.target.value});
  } 

  addProductAdmin = (e) => {
    e.preventDefault();
    const data = {
      "productId": this.state.id,
      "imageUrl": this.state.url,
      "productName": this.state.name,
      "price": this.state.price,
      "description": this.state.description,
      "quantity": this.state.quantity
    }
    axios.post("https://8080-abdedcaacccedacedeebaccebadfdbfcfccadbaecfcbc.examlyiopb.examly.io/admin/addProduct", data).then((res) => {
      if(res.data){
        this.props.history.push('/admin');
      }
    })
  }

  
  render(){
    return(
      <div className="addProduct-container">

      <svg className="add-product-image" id="ad1fd06e-943b-4ddb-9767-661d5554ee9f" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="380" height="300" viewBox="0 0 865.38063 601.49174"><polygon points="187.512 586.351 200.985 586.351 207.395 534.384 187.51 534.385 187.512 586.351" fill="#a0616a"/><path d="M351.38534,731.20668l26.533-.00107h.00107a16.90978,16.90978,0,0,1,16.90888,16.90861v.54947l-43.4421.00161Z" transform="translate(-167.30969 -149.25413)" fill="#2f2e41"/><polygon points="276.512 586.351 289.985 586.351 296.395 534.384 276.51 534.385 276.512 586.351" fill="#a0616a"/><path d="M440.38534,731.20668l26.533-.00107h.00107a16.90978,16.90978,0,0,1,16.90888,16.90861v.54947l-43.4421.00161Z" transform="translate(-167.30969 -149.25413)" fill="#2f2e41"/><rect y="599.49174" width="606.09583" height="2" fill="#e6e6e6"/><polygon points="176.231 575.082 211.132 575.082 233.439 379.759 274.453 575.082 298.002 575.082 298.002 342.166 186.038 308.658 176.231 575.082" fill="#2f2e41"/><circle cx="235.73959" cy="106.36522" r="30.43595" fill="#a0616a"/><path d="M355.79986,462.816c32.65778,25.54025,68.70584,38.41382,109.51181,33.50735-17.23413-60.51126-22.346-120.56424-5.72076-179.7955l-34.32459-15.5278L386.683,298.5483l-28.04254,8.2478a18.75086,18.75086,0,0,0-13.45087,18.3573C346.17968,375.66686,342.82131,422.94042,355.79986,462.816Z" transform="translate(-167.30969 -149.25413)" fill="#e6e6e6"/><path d="M373.91982,240.31385c2.92814-5.52451,6.64853-16.53481,12.55845-18.5768a46.98415,46.98415,0,0,1,10.11483-2.15477l10.04535,3.86362-5.46716-4.25212q1.59663-.09513,3.1915-.15554l6.7778,2.6068-3.46759-2.697c6.31878-.06485,12.84115.59217,17.73721,4.43882,4.17413,3.27926,8.30957,15.70179,8.9783,20.96743a40.106,40.106,0,0,1-.7373,15.10854l-1.71643,1.63213a21.059,21.059,0,0,1-1.34668-4.28653,20.30084,20.30084,0,0,0-9.71756-13.18332l-.09345-.05271c-2.87887-1.62021-6.372-1.54551-9.6734-1.42669l-15.67917.56419c-3.77227.13576-7.83432.37444-10.77517,2.74068-1.98639,1.598-3.17655,3.957-4.30823,6.24113-1.4613,2.94945-4.317,14.07413-4.317,14.07413s-1.61563-2.09995-2.39-.537a54.04239,54.04239,0,0,1-2.2493-12.54357A24.57562,24.57562,0,0,1,373.91982,240.31385Z" transform="translate(-167.30969 -149.25413)" fill="#2f2e41"/><path d="M1010.0304,436.85667h-351.365A22.68548,22.68548,0,0,1,636.0055,414.197V171.9138a22.68548,22.68548,0,0,1,22.65991-22.65967h351.365a22.68548,22.68548,0,0,1,22.65991,22.65967V414.197A22.68548,22.68548,0,0,1,1010.0304,436.85667Zm-351.365-285.60254A20.68335,20.68335,0,0,0,638.0055,171.9138V414.197a20.68335,20.68335,0,0,0,20.65991,20.65967h351.365a20.68335,20.68335,0,0,0,20.65991-20.65967V171.9138a20.68335,20.68335,0,0,0-20.65991-20.65967Z" transform="translate(-167.30969 -149.25413)" fill="#f0f0f0"/><path d="M599.00553,457.197V214.91386a21.68439,21.68439,0,0,1,21.6599-21.6599h351.365a21.6844,21.6844,0,0,1,21.6599,21.6599V457.197a21.6844,21.6844,0,0,1-21.6599,21.6599h-351.365A21.68439,21.68439,0,0,1,599.00553,457.197Z" transform="translate(-167.30969 -149.25413)" fill="#e4e4e4"/><path d="M612.825,457.62344V214.4874a6.68454,6.68454,0,0,1,6.6769-6.67691H973.194a6.68454,6.68454,0,0,1,6.6769,6.67691v243.136a6.68454,6.68454,0,0,1-6.6769,6.67691h-353.692A6.68454,6.68454,0,0,1,612.825,457.62344Z" transform="translate(-167.30969 -149.25413)" fill="#fff"/><circle cx="588.02565" cy="369.93254" r="9.84302" fill="#e6e6e6"/><circle cx="629.03828" cy="369.93254" r="9.84302" fill="#e6e6e6"/><circle cx="670.05086" cy="369.93254" r="9.84302" fill="#e6e6e6"/><path d="M796.348,407.51605a71.46063,71.46063,0,1,1,71.46057-71.46069v.00006A71.54145,71.54145,0,0,1,796.348,407.51605Z" transform="translate(-167.30969 -149.25413)" fill="#ffe08a"/><path d="M824.54453,329.00641H803.39725V307.85892a7.04923,7.04923,0,0,0-14.09844,0v21.14749H768.15128a7.04914,7.04914,0,0,0,0,14.09826h21.14753v21.1475a7.04923,7.04923,0,0,0,14.09844,0v-21.1475h21.14728a7.04914,7.04914,0,1,0,.01959-14.09826Z" transform="translate(-167.30969 -149.25413)" fill="#fff"/><path d="M275.737,689.072a102.5321,102.5321,0,0,0-8.998-28.88666l-.64307-1.32977-4.77637,5.29584,3.53907-7.88837-.23145-.45782a188.61349,188.61349,0,0,0-10.3677-17.98865l-.70166-1.07446-.936,1.03778.65527-1.46106-.32812-.49243c-4.686-7.02863-8.28613-11.47388-8.32178-11.51862l-1.01806-1.2525-.65479,1.49359c-.12012.27374-12.019,27.6922-13.59521,54.78607l-.02491.42224,8.0083,9.68012-8.167-5.127.01416,1.8609a79.26333,79.26333,0,0,0,.64893,9.5224q.53949,4.07511,1.27,7.95691a4.24313,4.24313,0,0,1,2.17163.67737q-.84623-4.33758-1.45965-8.91614c-.31543-2.43676-.51416-4.91229-.59327-7.38061l15.79686,9.91815-15.64355-18.90942c1.42432-22.907,10.26465-45.98609,12.74658-52.07758,1.332,1.7276,3.84473,5.08118,6.85059,9.561l-5.46436,12.182,7.79053-8.63818a186.51269,186.51269,0,0,1,9.32178,16.25183l-8.41455,18.75787,11.377-12.61548a100.38107,100.38107,0,0,1,8.1709,26.91993c1.99121,15.04107,1.60254,29.49-1.09473,40.68609-2.58349,10.725-7.13672,17.31714-12.49267,18.0874a8.46541,8.46541,0,0,1-3.30036-.19616,4.898,4.898,0,0,1-2.96075.90356h-.29212a11.60726,11.60726,0,0,0,5.42365,1.45673,9.83428,9.83428,0,0,0,1.40283-.10077c6.29688-.90448,11.32568-7.88123,14.15918-19.643C277.362,719.12572,277.76583,704.395,275.737,689.072Z" transform="translate(-167.30969 -149.25413)" fill="#e6e6e6"/><path d="M258.11352,749.52794c-8.23682,0-20.11279-4.53125-31.89209-12.77929a50.90046,50.90046,0,0,1-4.957-3.98535l-1.31934-1.20508,4.98828-1.43653-6.64209-.24316-.28027-.29395c-12.45019-13.03906-20.19775-31.457-20.2749-31.64062l-.60546-1.45508,1.57421.07129c.15674.00684,3.89941.18359,9.52441.98145l.35059.0498v-.00293l1.2334.1875a123.74552,123.74552,0,0,1,13.62939,2.86426l.479.12988,1.49658,3.68653-.227-3.30665,1.37305.39649a66.22859,66.22859,0,0,1,18.32765,8.49707c17.91358,12.54394,27.82568,28.22168,22.58594,35.7041C265.68673,748.30529,262.38986,749.527,258.11352,749.52794Zm-34.1431-17.04785c1.09424.92676,2.23291,1.8086,3.40088,2.63184,16.40674,11.48926,34.023,15.834,38.46777,9.48926,4.44385-6.34571-5.66552-21.415-22.0747-32.90528a64.16089,64.16089,0,0,0-16.38085-7.81445l.88721,12.917L222.44261,702.443c-3.83838-1.01855-7.76514-1.85644-11.69629-2.49609l.644,9.375-4.01123-9.87988c-3.10791-.42676-5.61328-.65821-7.1372-.77637,2.07763,4.5625,8.94288,18.65137,18.93652,29.24414l18.33008.6709Z" transform="translate(-167.30969 -149.25413)" fill="#e6e6e6"/><path d="M374.94249,482.76822a10.43245,10.43245,0,0,0-12.3122-10.21334l-18.2656-32.26164-7.53644,15.44722L354.28438,485.453a10.489,10.489,0,0,0,20.65811-2.68476Z" transform="translate(-167.30969 -149.25413)" fill="#a0616a"/><path d="M456.61429,518.6332a10.43248,10.43248,0,0,1,5.95355-14.84782L463.243,466.718l15.8873,10.89712-3.07679,33.52915a10.489,10.489,0,0,1-19.43917,7.48892Z" transform="translate(-167.30969 -149.25413)" fill="#a0616a"/><path d="M345.99285,478.3438l13.076-12.25879-6.71054-66.19745,7.76389-93.57538h0c-16.86542,5.30057-34.97443,19.53937-37.95716,36.9647l-10.66931,62.33148Z" transform="translate(-167.30969 -149.25413)" fill="#e6e6e6"/><polygon points="186.275 215.083 175.65 257.58 191.759 317.884 181.371 260.849 186.275 215.083" opacity="0.2" style={{isolation:"isolate"}}/><path d="M458.77364,501.22686l21.24857,2.45175L475.047,345.894a36.72689,36.72689,0,0,0-22.58291-32.74426l-7.58375-3.15988,2.04316,73.96133Z" transform="translate(-167.30969 -149.25413)" fill="#e6e6e6"/><polygon points="283.509 237.114 291.71 328.176 277.823 237.749 283.509 237.114" opacity="0.2" style={{isolation:"isolate"}}/></svg>
      
      <div id="addDressBody" data-testid="addDressBody">
        <form>
          <div className="addproduct-form" id="signupBox">
              <h1 className="title text is-warning">Add Product</h1>
              <div className="field">
                  <p className="control has-icons-left ">
                      <input required className="input" type="text" placeholder="Product Id" id="dressId" onChange={this.changeId}/>
                      <span className="icon is-small is-left" >
                          <i className="fas fa-id-card"></i>
                      </span>
                  </p>
              </div>
              <div className="field">
                  <p className="control has-icons-left ">
                      <input required className="input" type="text" placeholder="Product Name" id="dressName" data-testid="dressName" onChange={this.changeName}/>
                      <span className="icon is-small is-left" >
                          <i className="fas fa-shopping-bag"></i>
                      </span>
                  </p>
              </div>
              <div className="field">
                  <p className="control has-icons-left ">
                      <input required className="input" type="text" placeholder="Product Price" id="dressPrice" data-testid="dressPrice" onChange={this.changePrice}/>
                      <span className="icon is-small is-left" >
                          <i className="fas fa-tag"></i>
                      </span>
                  </p>
              </div>
              <div className="field">
                  <p className="control">
                  <textarea className="textarea has-fixed-size" placeholder="Product Description" id="dressDescription" data-testid="dressDescription" rows="2" onChange={this.changeDescription}></textarea>
                  </p>
              </div>
              <div className="field">
                  <p className="control has-icons-left">
                      <input required className="input" type="text" placeholder="Image Url" id="dressImageURL" data-testid="dressImageURL" onChange={this.changeUrl}/>
                      <span className="icon is-small is-left">
                          <i className="fas fa-hashtag"></i>
                      </span>
                  </p>
              </div>
              <div className="field">
                  <p className="control has-icons-left">
                      <input required className="input" type="text" placeholder="Product Quantity" id="dressQuantity" data-testid="dressQuantity" onChange={this.changeQuantity}/>
                      <span className="icon is-small is-left">
                      <i className="fas fa-layer-group"></i>
                      </span>
                  </p>
              </div>
              <div className="field is-grouped">
                  <p className="control">
                      <button className="button is-warning" id="addDressButton" data-testid="addDressButton" onClick={this.addProductAdmin}>
                      Add
                      </button>
                  </p>
                  <p className="control">
                    <Link to="/admin">
                      <button className="button is-danger" id="cancelButton">
                      Cancel
                      </button>
                    </Link>
                  </p>
              </div>
          </div>
      </form>
    </div>

    </div>
    )
  }
}
export default AddProduct;
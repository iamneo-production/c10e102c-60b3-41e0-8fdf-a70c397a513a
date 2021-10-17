import { Component } from "react";
import './OrderList.css';
import axios from 'axios';

class OrderList extends Component{
    
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            value: []
        };
    }


    SAFE_componentWillMount(){
        this.getOrders = this.getOrders.bind(this);
    }

    getOrders = () => {
        axios.get("https://8080-abdedcaacccedacedeebaccebadfdbfcfccadbaecfcbc.examlyiopb.examly.io/admin/orders").then((res) => {
            this.setState({value: res.data});
            console.log(this.state.value);
        })
    }

    render() {
        this.getOrders();
        return(
            <div id="adminOrderBody">
                <div>
                    <table className="table is-narrow is-hoverable ">
                        <thead>
                            <tr className="has-background-warning">
                                <th>Order Id</th>
                                <th>User Id</th>
                                <th>Dress Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.value.length === 0? 
                                <tr>
                                    <td>No Orders Yet</td>
                                </tr>:
                                this.state.value.map((item) => 
                                    <tr>
                                        <td>{item.orderId}</td>
                                        <td>{item.userId}</td>
                                        <td>{item.productName}</td>
                                        <td>{item.totalPrice}</td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default OrderList;
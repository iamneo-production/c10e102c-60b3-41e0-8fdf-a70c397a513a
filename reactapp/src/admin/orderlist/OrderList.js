import { Component } from "react";
import './OrderList.css'

class OrderList extends Component{
    
    constructor(props){
        super(props);
        this.props = props;
    }

    render() {
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
                            <tr>
                                <td>order1</td>
                                <td>user1</td>
                                <td>shirt</td>
                                <td>100</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>order1</td>
                                <td>user1</td>
                                <td>shirt</td>
                                <td>100</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>order1</td>
                                <td>user1</td>
                                <td>shirt</td>
                                <td>100</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>order1</td>
                                <td>user1</td>
                                <td>shirt</td>
                                <td>100</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default OrderList;
import { Component } from "react";
import {Link} from 'react-router-dom';

class Admin  extends Component{
    constructor(props){
        super(props);
        this.props = props;
        console.log(this.props.history);
    }

    buttonClick = () => {
        localStorage.removeItem("admin");
        this.props.history.go('/login');
    }

    render() {
        return (
            <div>
                <h1>Admin</h1>
                <button onClick={this.buttonClick}>Submit</button>
                <ul>
                    <li><Link to="/admin"> Product</Link></li>
                    <li><Link to="/admin/orders"> Orders</Link></li>
                    <li><Link to="/addProducts"> add products</Link></li>
                </ul>
            </div>
        );
    }
}

export default Admin;
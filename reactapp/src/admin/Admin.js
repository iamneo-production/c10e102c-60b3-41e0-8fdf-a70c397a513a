import { Component } from "react";
// import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import AdminNav from './admin-nav/AdminNav';
// import OrderList  from "./orderlist/OrderList";

class Admin  extends Component{
    
    constructor(props){
        super(props);
        this.props = props;
    }

    buttonClick = () => {
        localStorage.removeItem("admin");
        this.props.history.go('/login');
    }

    render() {
        const Inner = this.props.inner;
        return (
            <div>
                <AdminNav {...this.props} />
                <Inner />
            </div>
        );
    }
}

export default Admin;
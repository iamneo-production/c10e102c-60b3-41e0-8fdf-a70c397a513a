import { Component } from "react";
import {Link} from 'react-router-dom';

class Home  extends Component{
    constructor(props){
        super(props);
        this.props = props;
        console.log(this.props.history);
    }

    buttonClick = () => {
        localStorage.removeItem("user");
        this.props.history.go('/login');
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <button onClick={this.buttonClick}>Submit</button>
                <ul>
                    <li><Link to="/home"> Home</Link></li>
                    <li><Link to="/cart"> Cart</Link></li>
                    <li><Link to="/orders"> Orders</Link></li>
                </ul>
            </div>
        );
    }
}

export default Home;
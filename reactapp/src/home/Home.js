import { Component } from "react";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/index';

class Home  extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    buttonClick = () => {
        localStorage.removeItem("user");
        this.props.history.go('/login');
    }

    render() {
        const Inner = this.props.inner;
        return (
            <div>
                <Navbar {...this.props}/>
                <Inner />
                <Footer />
            </div>
        );
    }
}

export default Home;
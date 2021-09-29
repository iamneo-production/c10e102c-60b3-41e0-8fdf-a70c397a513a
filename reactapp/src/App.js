import './App';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Login from './login/Login';
import SignUp from './signup/Signup';
import Home from './home/Home';

function App() {
  return (
      <Router>
        <Routes/>
      </Router>
  );
}

const Routes = () => {
  return(
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <ProtectedRoute exact auth={sessionStorage.getItem("user") != null && sessionStorage.getItem("user") === "true"} path="/home" component={Home} />
      <ProtectedRoute exact auth={sessionStorage.getItem("user") != null && sessionStorage.getItem("user") === "true"} path="/cart" component={Home} />
      <ProtectedRoute exact auth={sessionStorage.getItem("user") != null && sessionStorage.getItem("user") === "true"} path="/orders" component={Home} />
      <ProtectedRoute exact auth={sessionStorage.getItem("admin") != null && sessionStorage.getItem("admin") === "true"} path="/admin" component={Home} />
      <ProtectedRoute exact auth={sessionStorage.getItem("admin") != null && sessionStorage.getItem("admin") === "true"} path="/addProduct" component={Home} />
      <ProtectedRoute exact auth={sessionStorage.getItem("admin") != null && sessionStorage.getItem("admin") === "true"} path="/admin/orders" component={Home} />
      <Route exact path="/" render={() => <Redirect to="/login" />} />
    </Switch>
  );
}

const ProtectedRoute = ({auth, component:Component, ...rest}) => {
  return(
    <Route {...rest} render={(props) => auth ? ( <Component {...props}/> ): (<Redirect to='/login' />) }/>
  );
}

export default App;

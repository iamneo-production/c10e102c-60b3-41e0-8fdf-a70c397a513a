import './App';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Login from './login/Login';
import SignUp from './signup/Signup';
import Home from './home/Home';
import Admin from './admin/Admin';

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
      <Route exact path="/" render={() => {
        if(localStorage.getItem("user") != null && localStorage.getItem("user") === "true"){
          return <Redirect to="/home" />;
        }else if(localStorage.getItem("admin") != null && localStorage.getItem("admin") === "true"){
          return <Redirect to="/admin" />;
        }else{
          return <Redirect to="/login" />;
        }
      }} />
      <ProtectedLoginRoute exact auth={(localStorage.getItem("user") == null || localStorage.getItem("user") !== "true") && (localStorage.getItem("admin") == null || localStorage.getItem("admin") !== "true")} path="/login" component={Login} />
      <ProtectedLoginRoute exact path="/signup" auth={(localStorage.getItem("user") == null || localStorage.getItem("user") !== "true") && (localStorage.getItem("admin") == null || localStorage.getItem("admin") !== "true")} component={SignUp} />
      <ProtectedRoute exact auth={localStorage.getItem("user") != null && localStorage.getItem("user") === "true"} path="/home" component={Home}  />
      <ProtectedRoute exact auth={localStorage.getItem("user") != null && localStorage.getItem("user") === "true"} path="/cart" component={Home} />
      <ProtectedRoute exact auth={localStorage.getItem("user") != null && localStorage.getItem("user") === "true"} path="/orders" component={Home} />
      <ProtectedRoute exact auth={localStorage.getItem("admin") != null && localStorage.getItem("admin") === "true"} path="/admin" component={Admin} />
      <ProtectedRoute exact auth={localStorage.getItem("admin") != null && localStorage.getItem("admin") === "true"} path="/addProduct" component={Admin} />
      <ProtectedRoute exact auth={localStorage.getItem("admin") != null && localStorage.getItem("admin") === "true"} path="/admin/orders" component={Admin} />\
    </Switch>
  );
}

const ProtectedLoginRoute = ({auth, component: Component, ...rest}) => {
  return(
    <Route {...rest} render={(props) => auth ? ( <Component {...props}/> ) : (<Redirect to="/" />)} />
  );
}

const ProtectedRoute = ({auth, component:Component, ...rest}) => {
  return(
    <Route {...rest} render={(props) => auth ? ( <Component {...props}/> ): (<Redirect to='/login' />) }/>
  );
}

export default App;

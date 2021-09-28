import './App';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Login from './login/Login';
import SignUp from './signup/Signup';
import auth from './AuthApi';

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
      <ProtectedRoute exact auth={auth.isAuthenticatedUser()} path="/home" component={SignUp} />
      <ProtectedRoute exact auth={auth.isAuthenticatedUser()} path="/cart" component={SignUp} />
      <ProtectedRoute exact auth={auth.isAuthenticatedUser()} path="/orders" component={SignUp} />
      <ProtectedRoute exact auth={auth.isAuthenticatedAdmin()} path="/admin" component={SignUp} />
      <ProtectedRoute exact auth={auth.isAuthenticatedAdmin()} path="/addProduct" component={SignUp} />
      <ProtectedRoute exact auth={auth.isAuthenticatedAdmin()} path="/admin/orders" component={SignUp} />
      <Route exact path="/" render={() => <Redirect to="/login" />} />
    </Switch>
  );
}

const ProtectedRoute = ({auth, component:Component, ...rest}) => {
  return(
    <Route {...rest} render={() => auth ? ( <Component /> ): (<Redirect to='/login' />) }/>
  );
}

export default App;

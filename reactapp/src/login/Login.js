// eslint-disable-next-line
import React, {Component} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

var pass = true;

class Login extends Component{

    showPassword(e){
        if(pass){
            document.querySelector("#password").setAttribute("type", "text");
            e.target.classList.remove("fa-eye");
            e.target.classList.add('fa-eye-slash');
            pass = false;
        }else{
            pass = true;
            e.target.classList.add("fa-eye");
            e.target.classList.remove('fa-eye-slash');
            document.querySelector("#password").setAttribute("type", "password");
        }
    }
    
    render(){
        return(
            <div class="has-navbar-fixed-top">
            <nav class="navbar is-warning is-fixed-top is-small" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <p class="navbar-item h1" href="
                    https://bulma.io" id="dressHomeButton">
                    Fantasy Dress
                    </p>
                </div>
            </nav>
            <form class="content-container">
                <div class="form" id="loginBox">
                    <h1 class="title text is-warning">Login</h1>
                    <div class="field">
                        <p class="control has-icons-left ">
                            <input required class="input" type="email" placeholder="Email" id="email" />
                            <span class="icon is-small is-left" >
                                <i class="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input required class="input" type="password" placeholder="Password" id="password" />
                            <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                            </span>
                            <span class="eye" >
                                <i class="fas fa-eye" onClick={this.showPassword}></i>
                            </span>
                        </p>
                        </div>
                        <div class="field">
                        <p class="control down">
                            <button class="button is-warning" id="submitButton">
                            Login
                            </button>
                        </p>
                        <p class="control down">New User? <Link to="/signup" id="signupLink">click here</Link></p>
                    </div>
                </div>
            </form>
            </div>
        );
    }
}

export default Login;
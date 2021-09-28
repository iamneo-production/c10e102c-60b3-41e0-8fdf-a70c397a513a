import {Link} from 'react-router-dom';
import './Signup.css';
import {Component} from 'react';

var state = true;

class SignUp extends Component{

    showPassword(e){
        if(state){
            document.querySelector("#password").setAttribute("type", "text");
            e.target.classList.remove("fa-eye");
            e.target.classList.add('fa-eye-slash');
            state = false;
        }else{
            state = true;
            e.target.classList.add("fa-eye");
            e.target.classList.remove('fa-eye-slash');
            document.querySelector("#password").setAttribute("type", "password");
        }
    }

    showConfirmPassword(e){
        if(state){
            document.querySelector("#confirmpassword").setAttribute("type", "text");
            e.target.classList.remove("fa-eye");
            e.target.classList.add('fa-eye-slash');
            state = false;
        }else{
            state = true;
            e.target.classList.add("fa-eye");
            e.target.classList.remove('fa-eye-slash');
            document.querySelector("#confirmpassword").setAttribute("type", "password");
        }
    }

    render() {
        return(
            <div class="has-navbar-fixed-top">
            <nav class="navbar is-warning is-fixed-top is-small" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <p class="navbar-item h1" href="https://bulma.io" id="dressHomeButton">
                    Fantasy Dress
                    </p>
                </div>
            </nav>
            <form class="content-container">
                <div class="signup-form" id="signupBox">
                    <h1 class="title text is-warning">Sign Up</h1>
                    <div class="field">
                        <p class="control has-icons-left ">
                            <input required class="input" type="email" placeholder="Enter Email" id="email" />
                            <span class="icon is-small is-left" >
                                <i class="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left ">
                            <input required class="input" type="text" placeholder="Enter Username" id="username" />
                            <span class="icon is-small is-left" >
                                <i class="fas fa-user"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left ">
                            <input required class="input" type="tel" placeholder="Enter Mobile Number" id="mobilenumber" />
                            <span class="icon is-small is-left" >
                                <i class="fas fa-phone-alt"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input required class="input" type="password" placeholder="Enter Password" id="password" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                            <span class="eye">
                                <i class="fas fa-eye" onClick={this.showPassword}></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left  has-icons-right">
                            <input required class="input" type="password" placeholder="Confirm Password" id="confirmpassword" />
                            <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                            </span>
                            <span class="eye" >
                                <i class="fas fa-eye" onClick={this.showConfirmPassword}></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control down">
                            <button class="button is-warning" id="submitButton">
                            Sign Up
                            </button>
                        </p>
                        <p class="control down">Already a member? <Link to="/login" id="signinLink">click here</Link></p>
                    </div>
                </div>
            </form>
            </div>
        );
    }
}

export default SignUp;
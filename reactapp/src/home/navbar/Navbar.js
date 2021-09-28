import './Navbar.css';
import React, {Component} from 'react';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".navbar-burger").click(function() {
  
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      document.querySelector(".navbar-burger").toggleClass("is-active");
      document.querySelector(".navbar-menu").toggleClass("is-active");
  
  });
  
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
});

class Navbar extends Component{
    render(){
        return(
        <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io" id="dressHomeButton">
                Fantasy-Dress
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                <a class="navbar-item" id="dressCartButton">
                    Cart
                </a>

                <a class="navbar-item" id="dressOrderButton">
                    My Order
                </a>
                </div>

                <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                    <a class="button is-danger" id="logoutButton">
                        Log out
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    );
        }
}

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";

const Authentication = () => {
    return(
        <div className="auth">
            <div className="hp">
                <div className="logo">
                   
                     <img src={logo} alt="Logo" className="logo" />
                    
                    <h3>Welcome to Wellness Wizards</h3>
                    <p>We will be happy to help you on your fitness journey.</p>
                </div>
                
                
                <Link to='/sign-in'><button>SIGN IN</button></Link>
                <Link to='/sign-up'><button>SIGN UP</button></Link>
                
                <p>Or sign in with:</p>
                <div className="sign-in-icons">
                    
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                    <i className="fa fa-google-plus-square" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}

export default Authentication
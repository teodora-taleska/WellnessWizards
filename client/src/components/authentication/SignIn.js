import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    return(
        <div className="auth">
            
            <form className="form">
                <h1>Sign in</h1>
                <h6>Please sign in to continue:</h6>
                <div>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <input type="text" placeholder="username"/>
                </div>

                <div>
                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    <input type="password" placeholder="password"/>
                </div>


                <Link to='/home'><button>Sign in
                <i className="fa fa-arrow-right" aria-hidden="true"></i>

                </button></Link>

                <h6>Don't have an account? 
                    <Link to='/sign-up'><s>Sign up</s></Link>
                </h6>
            </form>
        </div>
    ) 
}

export default SignIn
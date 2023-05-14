import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return(
        <div className="auth">
            
            <form className="form">
                <h1>Sign Up</h1>
                <h6>Already have an account?
                    <Link to='/sign-in'><s>Sign in</s></Link>
                </h6>
                <div>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <input type="text" placeholder="name"/>
                </div>

                <div>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <input type="text" placeholder="surname"/>
                </div>

                <div>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <input type="text" placeholder="username"/>
                </div>

                <div>
                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    <input type="password" placeholder="password"/>
                </div>

                <div>
                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    <input type="password" placeholder="confirm password"/>
                </div>

                <Link to='/sign-in'><button>Sign up
                <i className="fa fa-arrow-right" aria-hidden="true"></i>

                </button></Link>
            </form>
        </div>
    ) 
}

export default SignUp
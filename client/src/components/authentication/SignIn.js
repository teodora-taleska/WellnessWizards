import React from "react";

const SignIn = () => {
    return(
        <div className="auth">
            <h1>Sign In</h1>
            <form>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>Sign in</button>
            </form>
        </div>
    ) 
}

export default SignIn
import React from "react";
import { Link } from "react-router-dom";

const FormsHeader = () => {
    return(
        <div className="forms-header">
            <Link to='/home'><i className="fa fa-long-arrow-left" aria-hidden="true"></i></Link>
            
        </div>
    ) 
}

export default FormsHeader
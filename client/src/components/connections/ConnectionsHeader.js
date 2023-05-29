import React from "react";
import { Link } from "react-router-dom";

const CHeader = () => {
    return(
        <div className="forms-header">
                <Link to='/my-plans-hp/conections'><i className="fa fa-long-arrow-left" aria-hidden="true"></i></Link>
                <h4 className="calendar-header"></h4>
            </div>
    ) 
}

export default CHeader
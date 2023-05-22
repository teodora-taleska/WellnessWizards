import React from "react";
import { Link } from "react-router-dom";


const SubmitN = () => {
    return(
        <div className="q">
            <h4 className="header">NEW NUTRITION PLAN</h4>

            <div className="popup">
                <h3>You have successfully completed the nutrition plan form. Are you sure you want to submit? </h3>
            <Link to='/nutrition-plan-form/nq6'><button className="s1">NO</button></Link>
            
            <Link to='/my-plans-hp'><button  className="s2">YES</button></Link>           
            </div>

        </div>
    ) 
}

export default SubmitN
import React from "react";
import { Link } from "react-router-dom";


const SubmitW = () => {
    return(
        <div className="q">
            <h4 className="header">NEW WORKOUT PLAN</h4>

            <div className="popup">
                <h3>You have successfully completed the workout plan form. Are you sure you want to submit? </h3>
            <Link to='/workout-plan-form/q6'><button className="s1">NO</button></Link>
            
            <Link to='/my-plans-hp'><button  className="s2">YES</button></Link>           
            </div>
            
        </div>
    ) 
}

export default SubmitW
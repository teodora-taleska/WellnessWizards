import React from "react";
import { Link } from "react-router-dom";

const Q3 = () => {
    return(
        <div className="q">
           <h4 className="header">NEW WORKOUT PLAN</h4>
            <p>In what interval is your age?</p>
            <form className="form">
                <div>
                <input type="radio" value="Below 21" name="gender" /> Below 21

                </div>
                <div>
                <input type="radio" value="22-56" name="gender" /> 22-56 
                </div>
                <div>
                <input type="radio" value="Above 56" name="gender" /> Above 56
                </div>
                
                
            </form>
            <Link to='/workout-plan-form/q2'><button className="b2">BACK</button></Link>
            <Link to='/workout-plan-form/q4'><button className="b1">NEXT</button></Link>
        </div>
    ) 
}

export default Q3
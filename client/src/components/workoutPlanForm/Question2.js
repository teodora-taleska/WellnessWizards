import React from "react";
import { Link } from "react-router-dom";

const Q2 = () => {
    return(
        <div className="q">
            <h4 className="header">NEW WORKOUT PLAN</h4>
            <p>What is your gender?</p>
            <form className="form">
                <div>
                <input type="radio" value="Male" name="gender" /> Male

                </div>
                <div>
                <input type="radio" value="Female" name="gender" /> Female  
                </div>
                <div>
                <input type="radio" value="Nonbinary" name="gender" /> Nonbinary
                </div>
                
                
            </form>
            <Link to='/workout-plan-form/q1'><button className="b2">BACK</button></Link>
            <Link to='/workout-plan-form/q3'><button className="b1">NEXT</button></Link>
        </div>
    ) 
}

export default Q2
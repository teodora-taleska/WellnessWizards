import React from "react";
import { Link } from "react-router-dom";
const NQ2 = () => {
    return(
        <div className="q">
            <h4 className="header">NEW NUTRITION PLAN</h4>
            <p>Select gender:</p>
            <form className="form">
                <div>
                    <input type="radio" value="Male" name="gender" /> Male  
                </div>
                <div>
                    <input type="radio" value="Female" name="gender" /> Female 
                </div>
                <div>
                    <input type="radio" value="Other" name="gender" /> Other
                </div>
                
                
            </form>
            <Link to='/nutrition-plan-form/nq1'><button className="b2">BACK</button></Link>
            <Link to='/nutrition-plan-form/nq3'><button className="b1">NEXT</button></Link>
        </div>
    ) 
}

export default NQ2
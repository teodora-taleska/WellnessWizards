import React from "react";
import { Link } from "react-router-dom";
const NQ3 = () => {
    return(
        <div className="q">
            <h4 className="header">NEW NUTRITION PLAN</h4>
            <p>Current weight:</p>
            <form className="form">
                <div>
                    
                    <input type="number" name="weight" />

                </div>                
            </form>
            <Link to='/nutrition-plan-form/nq2'><button className="b2">BACK</button></Link>
            <Link to='/nutrition-plan-form/nq4'><button className="b1">NEXT</button></Link>
        </div>
    ) 
}

export default NQ3
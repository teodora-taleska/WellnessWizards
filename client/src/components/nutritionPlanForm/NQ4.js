import React from "react";
import { Link } from "react-router-dom";
const NQ4 = () => {
    return(
        <div className="q">
            <h4 className="header">NEW NUTRITION PLAN</h4>
            <p>Provide your curret height:</p>
            <form className="form">
                <div>

                    <input type="number" name="height" />

                </div>                
            </form>
            <Link to='/nutrition-plan-form/nq3'><button className="b2">BACK</button></Link>
            <Link to='/nutrition-plan-form/nq5'><button className="b1">NEXT</button></Link>
        </div>
    ) 
}

export default NQ4
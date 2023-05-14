import React from "react";
import { Link } from "react-router-dom";
const NQ4 = () => {
    return(
        <div className="q">
            <h4 className="header">NEW NUTRITION PLAN</h4>
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
            <Link to='/workout-plan-form/q3'><button className="b2">BACK</button></Link>
            <Link to=''><button className="b1">SUMBIT</button></Link>
        </div>
    ) 
}

export default NQ4
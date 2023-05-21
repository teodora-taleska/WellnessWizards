import React from "react";
import { Link } from "react-router-dom";
import nutricion_1 from "../../images/nutrition1.jpg";

const NQ1 = () => {
    return(
        <div className="q">
            <h4 className="header">NEW NUTRITION PLAN</h4>
            <p>In what is your age?</p>
            <form className="form">
                <div>
                <input type="radio" value="Below 21" name="age1" /> Below 21

                </div>
                <div>
                <input type="radio" value="22-56" name="age2" /> 22-56 
                </div>
                <div>
                <input type="radio" value="Above 56" name="age3" /> Above 56
                </div>
                
                
            </form>
            <Link to='/nutrition-plan-form/nq2'><button className="b1">NEXT</button></Link>
        </div>
    ) 
}

export default NQ1

/* 
            <div className="img">
                <img src={nutricion_1} alt="Nutritiot pic 1" className="img1" />
            </div>
*/
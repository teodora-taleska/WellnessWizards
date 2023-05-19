import React from "react";
import { Link } from "react-router-dom";

const Q3 = () => {
    return(
        <div className="q">
           <h4 className="header">NEW WORKOUT PLAN</h4>
            <p>What is your prefered workout style?</p>
            <form className="form">
                <div>
                <input type="radio" value="HIIT" name="gender" /> HIIT (High intenstiy interval)

                </div>
                <div>
                    <input type="radio" value="Strength" name="gender" /> Strength
                </div>
                <div>
                <input type="radio" value="Cardio" name="gender" /> Cardio
                </div>
                <div>
                    <input type="radio" value="Yoga" name="gender" /> Yoga
                </div>
                <div>
                    <input type="radio" value="Pilates" name="gender" /> Pilates
                </div>
                <div>
                    <input type="radio" value="Dance" name="gender" /> Dance
                </div>
                
            </form>
            <Link to='/workout-plan-form/q2'><button className="b2">BACK</button></Link>
            <Link to='/workout-plan-form/q4'><button className="b1">NEXT</button></Link>
        </div>
    ) 
}

export default Q3
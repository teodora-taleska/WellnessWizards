import React from "react";
import { Link } from "react-router-dom";
import workout_pic_1 from "../../images/workout_pic_1.jpg";

const Q1 = () => {
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

            <Link to='/workout-plan-form/q2'><button className="b1">NEXT</button></Link>
            <div className="img">
                <img src={workout_pic_1} alt="Workout pic 1" className="img1" />
            </div>
        </div>
    ) 
}

export default Q1
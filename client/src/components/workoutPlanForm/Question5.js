import React from "react";
import { Link } from "react-router-dom";
import workout_pic_5 from "../../images/boy2.jpg";

const Q5 = () => {
    return (
        <div className="q">
            <h4 className="header">NEW WORKOUT PLAN</h4>
            <p>What is your weight now?</p>
            <form className="form">
                <div>
                    <input type="number" name="weight" />


                </div>
                


            </form>
            <Link to='/workout-plan-form/q4'><button className="b2">BACK</button></Link>
            <Link to='/workout-plan-form/q6'><button className="b1">NEXT</button></Link>
            <div className="img">
                <img src={workout_pic_5} alt="Workout pic 5" className="img5" />
            </div>

        </div>
    )
}

export default Q5
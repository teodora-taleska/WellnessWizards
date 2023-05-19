import React from "react";
import { Link } from "react-router-dom";
import workout_pic_6 from "../../images/workout_pic_6.jpg";

const Q6 = () => {
    return (
        <div className="q">
            <h4 className="header">NEW WORKOUT PLAN</h4>
            <p>What is your weight goal?</p>
            <form className="form">
                <div>
                    <input type="number" name="weight" />

                </div>



            </form>
            <Link to='/workout-plan-form/q5'><button className="b2">BACK</button></Link>
            <Link to=''><button className="b1">SUMBIT</button></Link>
            <div className="img">
                <img src={workout_pic_6} alt="Workout pic 6" className="img6" />
            </div>
        </div>
    )
}

export default Q6
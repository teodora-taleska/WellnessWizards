import React from "react";
import { Link } from "react-router-dom";
import workout_pic_6 from "../../images/workout_pic_5.jpg";

const Q6 = () => {
    return (
        <div className="q">
            <h4 className="header">NEW WORKOUT PLAN</h4>
            <p>What is your goal weight?</p>
            <form className="form">
                <div>
                    <input type="number" name="weight" />

                </div>



            </form>
            <Link to='/workout-plan-form/q5'><button className="b2">BACK</button></Link>
            <Link to='/workout-plan-form/submit'><button className="b1">SUMBIT</button></Link>
            
        </div>
    )
}

export default Q6
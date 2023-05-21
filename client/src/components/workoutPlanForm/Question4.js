import React from "react";
import { Link } from "react-router-dom"; 
import workout_pic_4 from "../../images/workout_pic_4.jpg";

const Q4 = () => {
    return(
        <div className="q">
            <h4 className="header">NEW WORKOUT PLAN</h4>
            <p>How many days in a week are you able to workout?</p>
            <form className="form">
                <div>
                    <input type="radio" value="less than three" name="gender" /> Less than three

                </div>
                <div>
                <input type="radio" value="more than three" name="gender" /> More than three 
                </div>
                <div>
                <input type="radio" value="Everyday" name="gender" /> Everyday
                </div>
                
                
            </form>
            <Link to='/workout-plan-form/q3'><button className="b2">BACK</button></Link>
            <Link to='/workout-plan-form/q5'><button className="b1">NEXT</button></Link>
            
        </div>
    ) 
}

export default Q4
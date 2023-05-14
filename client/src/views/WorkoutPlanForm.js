import React from "react";
import { Link } from "react-router-dom";


const WorkoutPlanForm = () => {
    return(
        <div className="plan-form">
            <h4>CREATE A PERSONALIZED WORKOUT PLAN</h4>
            <Link to='/workout-plan-form/q1'>  <button>START</button></Link> 
        </div>
    ) 
}

export default WorkoutPlanForm
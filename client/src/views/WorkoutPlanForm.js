import React from "react";
import { Link } from "react-router-dom";


const WorkoutPlanForm = () => {
    return(
        <div className="workout-plan-form">
         <Link to='/workout-plan-form/q1'>  <button>START</button></Link> 
        </div>
    ) 
}

export default WorkoutPlanForm
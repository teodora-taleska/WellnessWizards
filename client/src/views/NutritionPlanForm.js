import React from "react";
import { Link } from "react-router-dom";


const NutritionPlanForm = () => {
    return(
        <div className="plan-form">
            <h4>CREATE A PERSONALIZED NUTRITION PLAN</h4>
            <Link to='/nutrition-plan-form/nq1'> <button>START</button></Link> 
        </div>
    ) 
}

export default NutritionPlanForm
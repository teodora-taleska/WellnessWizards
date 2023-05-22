import React from "react";
//import { Link } from "react-router-dom";

const NutritionPage = () => {
    return(
        <div className="nutrition-page">
            <h2>Meal Plans</h2>
            <div className="meal-list">
                <div className="meal-item">
                        <div className="meal-card">
                            <h3>Fast and nutritious vegan recipes</h3>
                            <p>.....................</p>
                        </div>
                </div>
                <div className="meal-item">
                        <div className="meal-card">
                            <h3>Keto Plan</h3>
                            <p>.....................</p>
                        </div>
                </div>
                <div className="meal-item">
                        <div className="meal-card-locked">
                            <h3>Locked</h3>
                            <p>Unlocked soon...</p>
                        </div>
                </div>
                {/* Add more workout links as needed */}  </div> 
        </div>
        
    ) 
}

export default NutritionPage

           /* */
import React from "react";
import { Link } from "react-router-dom";
import Meal from "../../images/food.jpg";

const RecipeInfo = () => {
    return (
        <div className="recipe-info">
            <h2>Fast and easy vegan recipes</h2>
            <div className="recipe-container1">
                <div className="recipe-box-main1">
                    <div className="recipe-image-container1">
                        <img src={Meal} alt="Meal" clasName="nutritionpageImage1_2" />
                    </div>
                </div>
                <div className="recipe-details1">
                    <div className="recipe-box1">
                        <h3>Calories:</h3>
                        <p>200 cal </p>
                    </div>
                    <div className="recipe-box1">
                        <h3>Alergens:</h3>
                        <p>Gluten, peanuts</p>
                    </div>
                </div>
                <div className="start-button1">
                    <Link to="recipe" className="recipe-link">
                        <button className="start-recipe-button">Start</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecipeInfo;
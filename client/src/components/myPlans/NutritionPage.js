import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NutritionPage = () => {
  const [selectedOption, setSelectedOption] = useState('vegan');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="nutrition-page">
      <h2>Meal Plans</h2>
      <div className="nutrition-dropdown">
        <select className="nutrition-dropdown" onChange={handleDropdownChange} value={selectedOption}>
          <option value="vegan">Vegan</option>
          <option value="keto">Keto</option>
          <option value="pescatarian">Pescatarian</option>
        </select>
      </div>
      <div className="meal-list">
        {selectedOption === 'vegan' && (
          <div className="meal-item">
            <Link to="recipe-info" className="recipe-link">
              <div className="meal-card">
                <h3>Fast and nutritious vegan recipes</h3>
                <p>.....................</p>
              </div>
            </Link>
          </div>
        )}
        {selectedOption === 'keto' && (
          <div className="meal-item">
            <Link to="recipe-info" className="recipe-link">
              <div className="meal-card">
                <h3>Keto Plan</h3>
                <p>.....................</p>
              </div>
            </Link>
          </div>
        )}
        <div className="meal-item">
          <div className="meal-card-locked">
            <h3>Locked</h3>
            <p>Unlocked soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;

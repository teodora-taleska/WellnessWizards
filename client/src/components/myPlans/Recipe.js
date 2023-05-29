import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Meal from "../../images/VeganCrepes.jpeg";
const RecipePage = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (itemId) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };

  const ingredientList = [
    { id: 1, text: '1 cup all-purpose flour' },
    { id: 2, text: '1 1/2 cups plant-based milk' },
    { id: 3, text: '2 tablespoons maple syrup' },
    { id: 4, text: '1/2 teaspoon vanilla extract' },
    { id: 5, text: '1/4 teaspoon salt' },
  ];

  return (
    <div className="recipe">
      <h2>Vegan Crepes</h2>
      <div className='recipe-image-container1'>
        <img src={Meal} alt="Vegan Crepes" clasName="rimg1"/>
      </div>
      <div className="ingredient-list">
        <h3>Ingredients:</h3>
        <ul>
          {ingredientList.map((item) => (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={checkedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                {item.text}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="instructions">
        <h3>Instructions:</h3>
        <ol>
          <li>Step 1: Mix all-purpose flour, plant-based milk, maple syrup, vanilla extract, and salt in a bowl.</li>
          <li>Step 2: Heat a non-stick pan over medium heat.</li>
          <li>Step 3: Pour a ladleful of the batter onto the pan and spread it into a thin layer.</li>
          <li>Step 4: Cook until the edges start to turn golden brown, then flip and cook the other side.</li>
          <li>Step 5: Repeat with the remaining batter.</li>
          <li>Step 6: Serve the vegan crepes with your favorite toppings.</li>
        </ol>
      </div>
    </div>
  );
};

export default RecipePage;

import React from "react";
import { Link } from "react-router-dom";
import Sprint from "../images/sprinting.png";
const MyPlansHP = () => {
  const currentDate = new Date();
  const calendarItems = [];
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  for (let i = -3; i <= 3; i++) {
    const date = new Date();
    date.setDate(currentDate.getDate() + i);
    const isCurrentDate = date.toDateString() === currentDate.toDateString();

    const calendarItem = (
      <div
        key={i}
        className={`calendar-item ${isCurrentDate ? "current-date" : ""}`}
      >
        {date.getDate()}
      </div>
    );

    calendarItems.push(calendarItem);
  }

  return (
    <div className="my-plans-hp">
      <div className="acc-icon">
        <i className="fa fa-user-circle" aria-hidden="true"></i>
      </div>
      <div className="calendar-row">
        {weekdays.map((weekday, index) => (
          <div key={index} className="weekday-label">
            {weekday}
          </div>
        ))}
      </div>
      <div className="calendar-row">
        {calendarItems}
      </div>
      <div className="additional-div flex-container">
        <h2>Daily Schedule</h2>
        <img src={Sprint} alt="sprint icon" />
  	  </div>
      <div className="additional-div grid-container">
              <div className="additional-div daily-workout">
                  <Link to="/my-plans-hp/workout-page">Go to Daily Workout</Link>
        </div>
        <div className="additional-div meal-plan">
                  <Link to="/my-plans-hp/nutrition-page">Go to Meal Plan</Link>
        </div>
      </div>
      <div className="motivational-quote">
        <p>One Day or Day 1. You decide!</p>
      </div>
    </div>
  );
};

export default MyPlansHP;

import React from "react";

const MyPlansHP = () => {
  // Get the current date
  const currentDate = new Date();

  // Generate the calendar items
  const calendarItems = [];
  for (let i = -3; i <= 3; i++) {
    // Calculate the date for the current item
    const date = new Date();
    date.setDate(currentDate.getDate() + i);

    // Determine if it's the current date
    const isCurrentDate = date.toDateString() === currentDate.toDateString();

    // Create a new calendar item
    const calendarItem = (
      <div
        key={i}
        className={`calendar-item ${isCurrentDate ? "current-date" : ""}`}
      >
        {date.getDate()}
      </div>
    );

    // Add the calendar item to the array
    calendarItems.push(calendarItem);
  }

  return (
    <div className="my-plans-hp">
      <div className="acc-icon">
        <i className="fa fa-user-circle" aria-hidden="true"></i>
      </div>
      <div className="calendar-row">{calendarItems}</div>
      My plans HP
    </div>
  );
};

export default MyPlansHP;

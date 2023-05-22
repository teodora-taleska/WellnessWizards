import React from "react";

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
      My plans HP
    </div>
  );
};

export default MyPlansHP;

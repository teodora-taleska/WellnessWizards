import React, { useState } from "react";
import CHeader from "./ConnectionsHeader";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const WorkoutBuddies = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const users = [
    { name: "Teo", surname: "Masarov", number:"072-999-859" },
    { name: "Mario", surname: "Atanas", number:"075-999-955" },
    { name: "Maya", surname: "Rirkova", number:"096-999-859" },
    { name: "Melani", surname: "Gokceva", number:"072-653-859" },
    { name: "Saval", surname: "Savalev", number:"071-999-859" },
  ];

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(results);
  };

  const openCalendar = () => {
    setCalendarOpen(true);
  };

  const closeCalendar = () => {
    setCalendarOpen(false);
  };

  const [value, onChange] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleDayClick = (value) => {
        setSelectedDay(value);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const formattedDate = selectedDay ? selectedDay.toDateString() : "";

  return (
    <div className="connections">
      <CHeader />
      <h3 className="header">WORKOUT BUDDIES</h3>

      <div className="search-bar">
        <input
          className="input-place"
          type="text"
          placeholder="Search by name..."
          onChange={handleChange}
          value={searchInput}
        />
        <button onClick={onSubmit} className="btn-search">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>

    

      <div className="search-results">
        <h2>Connect with: </h2>
        {searchResults.map((result, index) => (
          <div key={index} className="search-result">
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
            <h4>{result.name} {result.surname}</h4>
            <p>Phone number: {result.number}</p>
            <Link onClick={openCalendar}>
                 <i className="fa fa-calendar" aria-hidden="true"></i>
            </Link>
            <Link><i className="fa fa-comments-o" aria-hidden="true"></i></Link>
          </div>
        ))}
      </div>

      {isCalendarOpen && (
        <div className="calendar-popup">
          <Calendar className="cal" onClickDay={handleDayClick} onChange={onChange} value={value} />

{showPopup && (
    <div className="popup">
    <div className="popup-content">
        <h2>Selected Day: {formattedDate}</h2>
        <div>
            <p className="name"> Workout for today: Quick and dynamic HIIT Workout</p>
            <Link to='/my-plans-hp/workout-page/workout-list2/workout-info'><i  class="fa fa-arrow-circle-right" aria-hidden="true"></i></Link>
        </div>
        <div></div>
        
        <button className="btn-close" onClick={closePopup}>Close</button>
    </div>
    </div>
)}

        </div>
      )}
    </div>
  );
};

export default WorkoutBuddies
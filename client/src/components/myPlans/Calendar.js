import React, {useState} from "react";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function Calendarr(){
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


    return(
        <div className="calendar">
            <div className="forms-header">
                <Link to='/my-plans-hp'><i className="fa fa-long-arrow-left" aria-hidden="true"></i></Link>
                <h4 className="calendar-header"></h4>
            </div>
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
    ) 
}

export default Calendarr
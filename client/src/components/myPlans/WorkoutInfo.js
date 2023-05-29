import React from "react";
import { Link } from "react-router-dom";
import workoutImage1 from "../../images/boy2.jpg";

const WorkoutInfo = () => {
    return (
        <div className="workout-info1">
            <h2>Quick and dynamic HIIT Workout</h2>
            <div className="workout-container1">
                <div className="workout-box-main1">
                    <div className="workout-image-container1">
                        <img src={workoutImage1} alt="HIIT Workout" className="workoutpageImage1_2" />
                    </div>
                </div>
                <div className="workout-details1">
                    <div className="workout-box1">
                        <h3>CALORIES BURNED:</h3>
                        <p>500 kcal</p>
                    </div>
                    <div className="workout-box1">
                        <h3>TIME:</h3>
                        <p>30 min, 60s work, 20s break, no repeat</p>
                    </div>
                </div>
                <div className="start-button1">
                    <Link to="workout">
                        <button className="start-workout-button">Start Workout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WorkoutInfo;

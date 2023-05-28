import React from "react";
import { Link } from "react-router-dom";
import workoutImage1 from "../../images/boy2.jpg";
import workoutImage2 from "../../images/workout_pic_4.jpg";
import workoutImage3 from "../../images/workout_pic_3.jpg";

const WorkoutLists = () => {
    return (
        <div className="workout-page">
            <h2>HIIT</h2>
            <div className="workout-dropdown">
                <p className="workout-list-p">2 available workouts currently</p>
            </div>
            <div className="workout-list">
                <div className="workout-item">
                    <Link to="workout-info" className="workout-link">
                        <div className="workout-card">

                            <div className="workout-image-container">
                                <img src={workoutImage1} alt="HIIT Workout" className="workoutpageImage1" />
                                <div className="workout-image-overlay">
                                    <p>Lower Body Focus <span className="arrow">➤</span></p>
                                    <p>Check it out!</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="workout-item">
                    <Link to="workout-info" className="workout-link">
                        <div className="workout-card">
                            <div className="workout-image-container">
                                <img src={workoutImage2} alt="Strength Workout" className="workoutpageImage2" />
                                <div className="workout-image-overlay2">
                                    <p>Full body <span className="arrow">➤</span></p>
                                    <p>Check it out!</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="workout-item">
                    <Link to="" className="workout-link">
                        <div className="workout-card-locked">
                            <h3>Locked</h3>
                            <p>Unlocked soon...</p>
                        </div>
                    </Link>
                </div>
                {/* Add more workout links as needed */}
            </div>
        </div>
    );
};

export default WorkoutLists;

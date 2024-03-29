﻿import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import workoutImage1 from "../../images/boy2.jpg";
import workoutImage2 from "../../images/workout_pic_4.jpg";
import workoutImage3 from "../../images/workout_pic_3.jpg";

const WorkoutPage = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("beginner");

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        if (selectedValue === "advanced") {
            navigate("advanced-workout-page");
        } else if (selectedValue === "professional") {
            // Handle navigation to professional workout page
        }
    };

    return (
        <div className="workout-page">
            <h2>WORKOUT</h2>
            <div className="workout-dropdown">
                <select
                    className="workout-dropdown"
                    value={selectedOption}
                    onChange={handleOptionChange}
                >
                    <option value="beginner">Beginner</option>
                    <option value="advanced">Advanced</option>
                    <option value="professional">Professional</option>
                </select>
            </div>

            <div className="workout-list">
                <div className="workout-item">
                    <Link to="workout-list" className="workout-link">
                        <div className="workout-card">
                            
                            <div className="workout-image-container">
                                <img src={workoutImage1} alt="HIIT Workout" className="workoutpageImage1" />
                                <div className="workout-image-overlay">
                                    <p>HIIT <span className="arrow">➤</span></p>
                                    <p>Checkout our available HIIT exercises!</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="workout-item">
                    <Link to="workout-list2" className="workout-link">
                        <div className="workout-card">
                            <div className="workout-image-container">
                                <img src={workoutImage2} alt="Strength Workout" className="workoutpageImage2" />
                                <div className="workout-image-overlay2">
                                    <p>Strength <span className="arrow">➤</span></p>
                                    <p>Checkout our available Strength exercises!</p>
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

export default WorkoutPage;

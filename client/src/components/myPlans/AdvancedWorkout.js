import React, { useState } from "react";
import { Link } from "react-router-dom";
import workoutImage1 from "../../images/workout_pic_6.jpg";
import workoutImage2 from "../../images/workout_pic_2.jpg";
import { useNavigate } from "react-router-dom";

const WorkoutPage = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("advanced");

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        if (selectedValue === "beginner") {
            navigate("/my-plans-hp/workout-page");
        } else if (selectedValue === "professional") {
            // Handle navigation to professional workout page
        }
    };

    return (
        <div className="workout-page">
            <h2>ADVANCED LEVEL WORKOUT</h2>
            <div className="workout-dropdown">
                <select
                    className="workout-dropdown"
                    value={selectedOption}
                    onChange={handleOptionChange}
                >
                    <option value="advanced">Advanced</option>
                    <option value="beginner">Beginner</option>
                    <option value="professional">Professional</option>
                </select>
            </div>         <div className="workout-list">
                <div className="workout-item">
                    <Link to="workout-list" className="workout-link">
                        <div className="workout-card">

                            <div className="workout-image-container">
                                <img src={workoutImage1} alt="HIIT Workout (Advanced)" className="workoutpageImage1" />
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
                                <img src={workoutImage2} alt="Strength Workout (Advanced)" className="workoutpageImage2" />
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

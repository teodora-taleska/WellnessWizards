import React from "react";
import { Link } from "react-router-dom";

const WorkoutInfo = () => {
    return (
        <div className="workout-info">
            <h2>Quick and dynamic HIIT Workout</h2>
            <div className="workout-container">
                <div className="workout-details">
                    <div className="workout-box">
                        <button className="workout-button">
                            <span role="img" aria-label="Fire Emoji">
                                🔥
                            </span>{" "}
                            Number of calories: 500
                        </button>
                    </div>
                    <div className="workout-box">
                        <button className="workout-button">
                            <span role="img" aria-label="Clock Emoji">
                                ⏰
                            </span>{" "}
                            30-minute HIIT workout, no repeat.
                        </button>
                    </div>
                </div>
                <div className="start-button">
                    <Link to="workout">
                        <button className="start-workout-button">Start Workout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WorkoutInfo;

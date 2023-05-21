import React from "react";
import { Link } from "react-router-dom";

const WorkoutPage = () => {
    return (
        <div className="workout-page">
            <h2>Choose a Workout:</h2>
            <div className="workout-list">
                <div className="workout-item">
                    <Link to="workout-info" className="workout-link">
                        <div className="workout-card">
                            <h3>HIIT</h3>
                            <p>Involves alternating short bursts of intense exercise with brief recovery periods. It typically combines cardiovascular exercises with strength training, creating a challenging and efficient workout. HIIT workouts are known for their ability to boost metabolism, improve cardiovascular fitness, burn calories, and increase endurance. </p>
                        </div>
                    </Link>
                </div>
                <div className="workout-item">
                    <Link to="workout-info" className="workout-link">
                        <div className="workout-card">
                            <h3>Strength</h3>
                            <p>Strength workouts focus on building and strengthening muscles through resistance training exercises. They increase muscle mass, enhance strength, and improve body composition. Benefits include improved bone density, metabolism, joint stability, and functional strength. Incorporating strength training into your fitness routine leads to a stronger and more toned physique.</p>
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

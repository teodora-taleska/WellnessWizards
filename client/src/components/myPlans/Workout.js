import React, { useState } from "react";
import workoutImage1 from "../../images/boy2.jpg";
import workoutImage2 from "../../images/workout_pic_4.jpg";
import workoutImage3 from "../../images/workout_pic_3.jpg";

const Workout = () => {
    const workoutItems2 = [
        {
            imageUrl: workoutImage1,
            description: "Description 1",
        },
        {
            imageUrl: workoutImage2,
            description: "Description 2",
        },
        {
            imageUrl: workoutImage3,
            description: "Description 3",
        },
        // Add more workout items as needed
    ];

    const [currentPage, setCurrentPage] = useState(0);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const currentWorkout = workoutItems2[currentPage];

    if (currentPage === workoutItems2.length) {
        // Render the "Well Done" message
        return (
            <div className="well-done-page">
                <h1>Well Done!</h1>
                <p>Congratulations on completing the workout!</p>
            </div>
        );
    }

    return (
        <div className="workout2">
            <h2 className="workout_title2">HIIT Workout</h2>
            <div className="workout-item2">
                <div className="image-container2">
                    <img src={currentWorkout.imageUrl} alt="Workout" className="workout-image2" />
                    <div className="description-container">
                        <p className="workout-description">{currentWorkout.description}</p>
                    </div>
                </div>
            </div>
            <button className="next-button" onClick={handleNextPage}>
                Next
            </button>
        </div>
    );
};

export default Workout;

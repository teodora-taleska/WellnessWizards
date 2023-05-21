import React from "react";
import workoutImage1 from "../../images/boy2.jpg";
import workoutImage2 from "../../images/workout_pic_4.jpg";
import workoutImage3 from "../../images/workout_pic_3.jpg";

const Workout = () => {
    const workoutItems = [
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

    return (
        <div className="workout">
            <h2>HIIT Workout</h2>
            {workoutItems.map((item, index) => (
                <div key={index} className="workout-item">
                    <img src={item.imageUrl} alt="Workout" className="workout-image" />
                    <p className="workout-description">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Workout;

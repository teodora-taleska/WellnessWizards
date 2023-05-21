import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccountPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    return (
        <div className="account-page">
            <div className="center-content">
                <i className="fa fa-user-circle-o account-pic" aria-hidden="true"></i>
                <input
                    type="file"
                    onChange={handleImageUpload}
                    className="upload-pic"
                />
                <p className="name-surname">Sarah Johnson</p>
                <p className="location">Location</p>
                <p className="age">Age</p>
                <p className="challenges">Challenges</p>
            </div>
        </div>
    );
};

export default AccountPage;

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUtensils, faCommenting, faCutlery, faHeartbeat, faLineChart } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    return(
        <div className="navbar">
       
            <Link to="../my-plans-hp/analytics">
                <FontAwesomeIcon icon={faLineChart} />
            </Link>
            <Link to="../my-plans-hp/workout-page">
                <FontAwesomeIcon icon={faHeartbeat} />
            </Link>

            <Link to="../home">
                <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link className="navbar-link" to="../my-plans-hp/connections">
                <FontAwesomeIcon icon={faCommenting} />
            </Link>

            <Link className="navbar-link" to="../my-plans-hp/nutrition-page">
                <FontAwesomeIcon icon={faCutlery} />
            </Link>
            
            
        </div>
    ) 
}

export default Navbar
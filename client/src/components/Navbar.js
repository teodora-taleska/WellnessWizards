import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUtensils, faCommenting, faCutlery, faHeartbeat, faLineChart } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    return(
        <div className="navbar-div">
            <div className="navbar">
       
            <Link to="../my-plans-hp/calendar">
                <FontAwesomeIcon className="icon" icon={faLineChart} />
            </Link>
            <Link to="../my-plans-hp/workout-page">
                <FontAwesomeIcon className="icon" icon={faHeartbeat} />
            </Link>

            <Link to="../my-plans-hp">
                <FontAwesomeIcon className="icon" icon={faHome} />
            </Link>
            <Link className="navbar-link" to="../my-plans-hp/connections">
                <FontAwesomeIcon className="icon" icon={faCommenting} />
            </Link>

            <Link className="navbar-link" to="../my-plans-hp/nutrition-page">
                <FontAwesomeIcon className="iconLast" icon={faCutlery} />
            </Link>
            
            
        </div>
        </div>
        
    ) 
}

export default Navbar
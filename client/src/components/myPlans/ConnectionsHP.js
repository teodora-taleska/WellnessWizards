import React from "react";
import { Link } from "react-router-dom";

const ConnectionsHP = () => {
    return(
        <div className="home">
            <div className="acc-icon">
                <Link to="/my-plans-hp/my-account"><i class="fa fa-user-circle" aria-hidden="true"></i></Link>
            </div>
            <Link to='/my-plans-hp/connections/personal-trainers'><button>PERSONAL TRAINERS</button></Link>
            <Link to='/my-plans-hp/connections/physiotherapists'><button>PHYSIOTHERAPISTS</button></Link>
            <Link to='/my-plans-hp/connections/workout-buddies'><button>WORKOUT BUDDIES</button></Link>
            
            
        </div>
    ) 
}

export default ConnectionsHP
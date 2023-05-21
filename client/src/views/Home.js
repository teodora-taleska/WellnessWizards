import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="home">
            <div className="acc-icon">
                <Link to="/my-plans-hp/my-account"><i class="fa fa-user-circle" aria-hidden="true"></i></Link>
            </div>
            <Link to='/my-plans-hp'><button>MY PLANS</button></Link>
            <Link to='/workout-plan-form'><button>NEW WORKOUT PLAN</button></Link>
            <Link to='/nutrition-plan-form'><button>NEW NUTRITION PLAN</button></Link>
            <Link to='/connections'><button>CONNECTIONS</button></Link>
            
        </div>
    ) 
}

export default Home
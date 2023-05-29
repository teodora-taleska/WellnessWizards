import React from "react";
import { Link } from "react-router-dom";


const NQ6 = () => {
    return(
        <div className="q">
            <h4 className="header">NEW NUTRITION PLAN</h4>
            <p>Select goals:</p>
            <form className="form" >
                <div>
                    <br></br><br></br>
                    <div>
                        <input type="checkbox" id="goal1" name="goal1" value="Muscle mass"/>
                        <label for="goal1"> I want to gain muscle and strength. </label><br></br>
                    </div>
                    <div>
                        <input type="checkbox" id="goal2" name="goal2" value="Fat loss"/>
                        <label for="goal2"> I want to lose fat. </label><br></br>
                    </div>
                    <div>
                        <input type="checkbox" id="goal3" name="goal3" value="Mobility increase"/>
                        <label for="goal3"> I want to increase mobility and/or reduce physical pain and dysfunction. </label><br></br>
                    </div>
                    <div>
                        <input type="checkbox" id="goal4" name="goal4" value="Physical performance"/>
                        <label for="goal4"> I want to enhance my physical/athletic performance. </label><br></br>
                    </div>
                    <div>
                        <input type="checkbox" id="goal5" name="goal5" value="Other"/>
                        <label for="goal5"> Other </label>
                    </div>
                </div>                
            </form>
            <Link to='/nutrition-plan-form/nq5'><button className="b2">BACK</button></Link>

            <Link to='/nutrition-plan-form/submit'><button className="b1">SUMBIT</button></Link>

        </div>
    ) 
}

export default NQ6
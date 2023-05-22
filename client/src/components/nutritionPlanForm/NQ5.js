import React from "react";
import { Link } from "react-router-dom";
const NQ5 = () => {
    return(
        <div className="q">
            <h4 className="header">NEW NUTRITION PLAN</h4>
            <p>Select which you wish to try out/follow:</p>
            <form className="form">
                <div>
                    <br></br><br></br>
                    <div>
                        <input type="checkbox" id="diet1" name="diet1" value="Vegan"/>
                        <label for="diet1"> Vegan </label><br></br>
                    </div>
                    <div>
                        <input type="checkbox" id="diet2" name="diet2" value="Vegetarian"/>
                        <label for="diet2"> Vegetarian </label><br></br>
                    </div>
                    <div>
                        <input type="checkbox" id="diet3" name="diet3" value="Pescetarian"/>
                        <label for="diet3"> Pescetarian </label><br></br>
                    </div>    
                    <div>
                        <input type="checkbox" id="diet4" name="diet4" value="Keto"/>
                        <label for="diet3"> Keto </label><br></br>
                    </div>
                    <div>
                        <input type="checkbox" id="diet5" name="diet5" value="Paleo"/>
                        <label for="diet5"> Paleo </label><br></br>
                    </div>
                    <div>
                        <input type="checkbox" id="diet6" name="diet6" value="Low-fat"/>
                        <label for="diet6"> Low-fat diet </label><br></br>
                    </div>
                    <div>
                        <input type="checkbox" id="diet7" name="diet7" value="Low-carb"/>
                        <label for="diet7"> Low-carb diet </label><br></br>
                    </div>
                    <div>
                        <input type="checkbox" id="diet8" name="diet8" value="Other"/>
                        <label for="diet7"> Other </label>
                    </div>                   
                </div>                
            </form>
            <Link to='/nutrition-plan-form/nq4'><button className="b2">BACK</button></Link>
            <Link to='/nutrition-plan-form/nq6'><button className="b1">NEXT</button></Link>
        </div>
    ) 
}

export default NQ5
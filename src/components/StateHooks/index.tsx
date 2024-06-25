import { Link, Outlet, } from "react-router-dom";

const StakeHooks = () => (
    <div className="About">
        <h1>useState, useReducer, Context</h1>
        <nav>
                    <ul>
                        <li><Link to={`useState`}>useState</Link></li>
                        <li><Link to={"useReducer"}>useReducer</Link></li>
                        <li><Link to={"reactContext"}>React Context</Link></li>
                    </ul>
                </nav>

    </div>
)
export default StakeHooks
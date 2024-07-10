import { Link } from "react-router-dom";

const StakeHooks = () => (
    <div className="About">
        <h1>useState, useReducer, Context</h1>
        <nav>
            <ul>
                <li><Link to={`useState`}>useState</Link></li>
                <li><Link to={"useReducer"}>useReducer</Link></li>
                <li><Link to={"reactContext"}>React Context</Link></li>
                <li><Link to={"CountRedux"}>Redux</Link></li>
            </ul>
            <h1>Redux</h1>
            <Link to={"reduxCountDown"}>redux</Link>
        </nav>

    </div>
)
export default StakeHooks
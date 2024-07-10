import { Link } from "react-router-dom";

const Todo = () => (
    <div className="About">
        <h1>TODO</h1>
        <nav>
            <ul>
                <li><Link to={"todoregular"}>Todo Regular</Link></li>
                <li><Link to={"todoredux"}>Todo Redux</Link></li>
                <li><Link to={"tasklyRegular"}>Taskly Regular</Link></li>
            </ul>
        </nav>

    </div>
)

export default Todo
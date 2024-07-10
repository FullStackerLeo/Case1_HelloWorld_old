//components/TodoInput.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";

const TodoInput = () => {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const onInputTodo = (e) => {
        setTodo(e.target.value);
    };

    //handle submission of todo
    const handleTodoSubmit = (e) => {
        e.preventDefault();
        addTodo(); // addTodo 
        setTodo("");
    };

    //action creators
    const addTodo = () => {
        //dispatch action to add a todo
        return dispatch({
            type: "todos/addedTodo",
            payload: { id: Math.floor(Math.random() * 20) + 1.1, item: todo },
        });
    };

    return (
        <div>
            <form className="todo_form_container" onSubmit={handleTodoSubmit}>
                <input
                    className="todo_input"
                    type="text"
                    placeholder="Enter your todo"
                    value={todo}
                    onChange={onInputTodo}
                />
                <button className="todo_btn">Add Todo</button>
            </form>
        </div>
    );
};

export default TodoInput;
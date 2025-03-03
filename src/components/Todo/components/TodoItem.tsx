import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  //delete a todo
  const onDelete = (id) => {
    return dispatch({
      type: "todos/deleteTodo",
      payload: id,
    });
  };
  //complete Todo
  const onComplete = (id) => {
    return dispatch({
      type: "todos/completeTodo",
      payload: id,
    });
  };
  return (
    <div className="todo_item-container">
      <h3 className={`todo${todo.completed ? "Completed" : ""}`}>
        {todo.item}
      </h3>
      <div className="todo_btn">
        <button onClick={() => onComplete(todo.id)}>Complete</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
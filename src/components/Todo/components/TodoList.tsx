import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const selectTodos = (state) => state.todos;
    const returnedTodos = useSelector((state) => state.todos);

    const displayTodos = returnedTodos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ));
    return <div>{displayTodos}</div>;
    return TodoItem
};

export default TodoList;

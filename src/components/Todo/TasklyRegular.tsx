import './components/taskly.css'
import TodoHeading from "./components/TodoHeading";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function TasklyRegular() {
  return (
    <>
      <main className="todo_container">
        <TodoHeading />
        <TodoInput />
        <TodoList />
      </main>
    </>
  );
}


export default TasklyRegular
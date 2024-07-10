const initialState = {
  todos: [
    {
      id: 1,
      item: "Learn redux fundamentals",
      completed: false,
    },
    {
      id: 2,
      item: "Build a todo-app",
      completed: false,
    },
  ],
};

//define the reducer logic
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/addedTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "todos/deleteTodo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "todos/completeTodo":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
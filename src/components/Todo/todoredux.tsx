import { VisibilityFilters } from './redux_components/VisibilityFilters';

import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
    todos: [
      {        id: 1,        text: "你好, 图雀",        completed: false      },
      {        id: 2,        text: "我是一只小小小小图雀",        completed: false      },
      {        id: 3,        text: "小若燕雀，亦可一展宏图！",        completed: false      }
    ],
    filter: VisibilityFilters.SHOW_ALL
  };


const TodoRedux = () => {
    const [count, setCount] = useState(110);

    const increment = () => setCount((currentCount) => currentCount + 1);
    const decrement = () => setCount((currentCount) => currentCount - 1);
    const reset = () => setCount(111);

    return (
        <div className="State">
            <h1>Counter: {count} </h1>
            <div>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>

    )
}

export default TodoRedux
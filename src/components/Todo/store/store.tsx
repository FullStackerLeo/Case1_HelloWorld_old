import { createStore } from "redux";
import todoReducer from "../reducer/todoReducer.tsx";

const store = createStore(todoReducer);

export default store;
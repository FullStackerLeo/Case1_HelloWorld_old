import { useState } from 'react'

const Todo = (props: any) => {
    return (
        <li>hii, {props.content}</li>
    )
}

const TodoRegular = () => {

    const [todoList, setTodoList] = useState(["图雀11", "图雀写作工具2", "图雀社区3", "图雀文档4"]);
    const [nowTodo, setNowTodo] = useState('')

    const renderTodoList = todoList.map((toddo, index) => (
        <Todo content={toddo} key={index} />
    ))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNowTodo(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (nowTodo.trim() !== '') {
            setTodoList([...todoList, nowTodo]);
            setNowTodo('');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type='text' value={nowTodo}  onChange={handleChange} />
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div className="State">
                <ul>
                    {renderTodoList}
                </ul>
            </div>
        </>

    )
}
export default TodoRegular
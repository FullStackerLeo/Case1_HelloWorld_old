import { useState } from 'react'

const Todo = (props: any) => {
    return (
        <li>hii, {props.content}</li>
    )
}

const TodoRegular = () => {

    const [nowTodo, setNowTodo] = useState('')

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
            <div>
                
            </div>
        </>

    )
}
export default TodoRegular
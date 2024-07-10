import { useState } from 'react'

const Todo = (props: any) => {
    return (
        <li>hii, {props.content}</li>
    )
}

const TodoList = () => {
    const [todoList, setTodoList] = useState(["Good morning!", "It's a beautiful day.", "How are you doing?",]);

    const renderTodoList = todoList.map((toddo, index) => (
        <Todo content={toddo} key={index} />
    ))

    return (
        <>
            <div className="State">
                <ul>
                    {renderTodoList}
                </ul>
            </div>
        </>
    )
}
export default TodoList
export const Todos = ({ setTodos, todos }) => {

    const deleteBtn = (id) => {
        const deleteFiltered = todos.filter(todo => todo.id !== id)
        setTodos(deleteFiltered)
    }

    const editBtn = (todo) => {
        const editText = prompt("Edit", todo.text)
        const foundIndex = todos.findIndex(user => user.id === todo.id)
        todos[foundIndex].text = editText
        setTodos([...todos])
    }

    const checkBtn = (evt,id) => {
        const foundIndex = todos.findIndex(todo => todo.id === id)
        todos[foundIndex].isCompleated = evt.target.checked
        setTodos([...todos])
    }
    return (
        <ul className="list">
            {
                todos.map(todo => (
                    <li key={todo.id} className="item">
                        <input checked={todo.isCompleated} onChange={(evt) => checkBtn(evt,todo.id)} type="checkbox" className="check" />
                        <p className="text" id={todo.isCompleated ? "item-active" : "#"}>{todo.text}</p>
                        <button className="edit" disabled={todo.isCompleated} onClick={() => editBtn(todo)}>Edit</button>
                        <button onClick={() => deleteBtn(todo.id)} className="delete">Delete</button>
                    </li>
                ))
            }
        </ul>
    )
}
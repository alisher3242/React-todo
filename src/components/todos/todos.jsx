export const Todos = ({ todos }) => {
    return (
        <ul className="list">
            {
                todos.map(todo => (
                    <li key={todo.id} className="item">
                        <input type="checkbox" className="check" />
                        <p className="text">{todo.text}</p>
                        <button className="edit">Edit</button>
                        <button className="delete">Delete</button>
                    </li>
                ))
            }
        </ul>
    )
}
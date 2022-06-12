import { useState } from "react"

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

    const checkBtn = (evt, id) => {
        const foundIndex = todos.findIndex(todo => todo.id === id)
        todos[foundIndex].isCompleated = evt.target.checked
        setTodos([...todos])
    }
    const allBtn = () => {
        setTodos(todos)
    }

    const isCompleatedBtn = () => {
        const isCompleateFiltered = todos.filter(todo => todo.isCompleated === true)
        setTodos(isCompleateFiltered)   
    }
    
    const unCompleatedBtn = () => {
        const unCompleateFiltered = todos.filter(todo => todo.isCompleated === false)
        setTodos(unCompleateFiltered)
    }

    return (
        <div>
            <ul className="list">
                {
                    todos.map(todo => (
                        <li key={todo.id} className="item">
                            <input checked={todo.isCompleated} onChange={(evt) => checkBtn(evt, todo.id)} type="checkbox" className="check" />
                            <p className="text" id={todo.isCompleated ? "item-active" : "#"}>{todo.text}</p>
                            <button className="edit" disabled={todo.isCompleated} onClick={() => editBtn(todo)}>Edit</button>
                            <button onClick={() => deleteBtn(todo.id)} className="delete">Delete</button>
                        </li>
                    ))
                }
            </ul>
            <div className="btns">
                <button onClick={allBtn} className="btn btn-success me-1">All <span>{todos.length}</span></button>
                <button onClick={isCompleatedBtn} className="btn btn-primary me-1">Compleated <span>
                    {todos.filter(item => item.isCompleated === true).length}
                </span></button>
                <button onClick={unCompleatedBtn} className="btn btn-danger me-1">Uncompleated <span>
                    {todos.filter(item => item.isCompleated === false).length}
                </span></button>
            </div>
        </div>


    )
}
import { useState } from "react"
import "./components/form/form.css"
import {Form} from "./components/form/form"
import { Todos } from "./components/todos/todos"


export const App = () => {
    const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem("keys")) || [])
    const [filtered, setFiltered] = useState([todos])
    return (
        <div>
            <Form setTodos={setTodos}>
            </Form> 
            <Todos filtered={filtered} setFiltered={setFiltered} setTodos={setTodos} todos={todos}>
            </Todos>
            {window.localStorage.setItem("keys", JSON.stringify(todos))}

        </div>
    )
}
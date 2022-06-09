import { useEffect, useState } from "react"
import "./components/form/form.css"
import {Form} from "./components/form/form"
import { Todos } from "./components/todos/todos"


export const App = () => {
    const [todos, setTodos] = useState([])
    return (
        <div>
            <Form setTodos={setTodos}/>
            <Todos todos={todos}/>
        </div>
    )
}
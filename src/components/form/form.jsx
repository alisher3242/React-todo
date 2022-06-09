import { useRef } from "react"

export const Form = ({ setTodos }) => {

    const inputRef = useRef(null)
    const addTodo = (evt) =>{
        evt.preventDefault()
        const newTodo = {
            id: new Date().getTime(),
            text: inputRef.current.value,
            isCompleated: false
        }
        setTodos((prev) => [newTodo, ...prev])

        
        inputRef.current.value = null;
    }

    return(
    <form onSubmit={addTodo} className="form">
        <input ref={inputRef} type="text" placeholder="type here..." required className="input" />
        <button  className="button" type="submit">Add todo</button>
    </form>
    )
}
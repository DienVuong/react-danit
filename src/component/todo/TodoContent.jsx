import { useState } from "react";

const TodoContent = (props) => {
    const [valueInput, setValueInput] = useState("Dien Vuong");
    const {addNewTodo} = props;
    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
    }

    const handleOnchange = (event) => {
        setValueInput(event.target.value)
    }
    return(

        <div className="todo-content">
            <input type="text" className="todo-input" placeholder="Enter your task" 
            
            value={valueInput}
            onChange={handleOnchange}
            />
            <button className="todo-button" onClick={handleClick}>Add</button>
            <div>{valueInput}</div>
        </div>
    )
}

export default TodoContent
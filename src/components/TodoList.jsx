import { useState } from "react";

const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = e => {
	e.preventDefault();
	setTodo([...todo, inputValue]);
	setInputValue("");
    };
    const handleChange = e => setInputValue(e.target.value);
    return (
	<div>
	    <h1>Todo List</h1>
	    {todo.map(td => (
		<li key={Math.random()}>{td}</li>
	    ))}
	    <form onSubmit={handleSubmit}>
		<input type='text' value={inputValue} onChange={handleChange} placeholder="Add a new Todo!"/>
		<button type='submit'>Add Todo</button>
	    </form>
	</div>
    )
}

export default TodoList;

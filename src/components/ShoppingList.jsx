import { useState } from "react";

const ShoppingList = () => {
    const [cart, setCart] = useState([{name:"phone", quantity: 1}, {name:'orange', quantity:202}])
    const submitList = () => {
	const itemName = document.getElementById('listadder').value;
	const itemQuant = document.getElementById('itemquant').value;
	document.getElementById('listadder').value = "";
	document.getElementById('itemquant').value = "";
	setCart([...cart, {name: itemName, quantity: itemQuant}]);
	
    }
    return (
	<div>
	    <h1>Shopping List</h1>
	    {
		cart.map(c => (
		    <li key={Math.random()}>{c.name} - {c.quantity}</li>
		))
	    }
	    <input type='text' placeholder='Next Item' id='listadder'/>
	    <input type='text' placeholder='Quantity' id='itemquant'/>
	    <button onClick={submitList}>Add Item</button>
	</div>
    )
}

export default ShoppingList;

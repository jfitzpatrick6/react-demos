const ComponentOne = ({count, onClickHandler}) => {
    return (
	<div>
	    <p>{count}</p>
	    <button onClick={onClickHandler}>+</button>
	</div>
    )
}

export default ComponentOne

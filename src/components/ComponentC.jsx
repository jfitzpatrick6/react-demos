import { Data, Data1 } from "../App.jsx"

const ComponentC = () => {
  return (
    <Data.Consumer>
    {(name) => (
	<Data1.Consumer>
	{(age) => (
	    <h1>My name is {name} and i am {age}</h1>
	  )}
	</Data1.Consumer>
      )}
    </Data.Consumer>
  )
}


export default ComponentC;

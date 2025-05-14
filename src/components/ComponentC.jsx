import { Data, Data1 } from "../App.jsx"
import { useContext } from "react";

const ComponentC = () => {
  const userName = useContext(Data)
  const age = useContext(Data1)
  return (
    <h1>{userName} {age}</h1>
  )
}


export default ComponentC;

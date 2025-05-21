import { useRef } from "react";

const FocusInput = () => {
  const inputElement = useRef(null);
  const focusDiv = () => {
    inputElement.current.focus()
  }
  return (
    <div>
      <input type="text" ref={inputElement}/>
      <button onClick={focusDiv}>Focus</button>
    </div>
  )
}

export default FocusInput;

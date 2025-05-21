import { useRef, useState, useEffect } from "react";

const Timer = () => {
  const interval = useRef(null);
  const [count, setCount] = useState(0);
  const startTimer = () => {
    if (interval.current !== null) return;
    interval.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  }
  return (
    <div>
      <h1>Timer</h1>
      <p ref={interval} onLoad={startTimer()}>{count}</p>
    </div>
  )
}

export default Timer;

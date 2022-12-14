import { useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(10);
  const subtractTime = () => {
    if (timer > 0) {
      setTimer(timer - 1);
    }
  };
  const addTime = () => {
    setTimer(timer + 1);
  };
  const handleStart = () => setInterval(setTimer(timer - 1), 1000);
  return (
    <div>
      <h2>Timer: {timer} seconds</h2>
      <button onClick={subtractTime}>-</button>
      <button onClick={addTime}>+</button>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}

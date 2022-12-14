import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      let now = new Date().toLocaleString("en-GB").slice(12);
      setTime(now);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Current Time: {time}</h2>
    </div>
  );
}


import "./App.css";
import Clock from "./components/Clock";
import Timer from "./components/Timer";
import Stopwatch from "./components/Stopwatch";

export default function App() {
  return (
    <div className="App">
      <h1>
        The Time Project{" "}
        <span role="img" aria-label="clock emoji">
          🕑
        </span>
      </h1>
      <hr />
      <Clock />
      <hr />
      <Timer />
      <hr />
      <Stopwatch />
      <hr />
    </div>
  );
}
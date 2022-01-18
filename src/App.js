import "./styles.css";
import { useEffect, useState } from "react";
/**
 * Please write a simple React component that does the following:
 * The component takes one prop named "input".
 * There are three types of input:
 * 1. If the prop is a falsy value, return a live-updating date and time (update every second) in a div.
 *    Please pretty-format the date and time. Use the native JavaScript Date object.
 * 2. If the prop is an array, return a list of divs, each containing one element of the array.
 * 3. If the prop is anything else, return the value of the prop in a div.
 *    A functional component using React Hooks is preferred, though not required.
 */
function LiveUpdatingDateAndTime() {
  const [seconds, setSeconds] = useState(new Date(Date.now()).toLocaleString());
  useEffect(() => {
    const interval = setInterval(
      () => setSeconds(new Date(Date.now()).toLocaleString()),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return <div className="App">{seconds}</div>;
}

export default function App({ input }) {
  if (input === false) return <LiveUpdatingDateAndTime />;

  if (Array.isArray(input))
    return (
      <div className="App">
        {input.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
    );

  return <div className="App">{input}</div>;
}

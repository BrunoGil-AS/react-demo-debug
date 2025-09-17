import "../../App.css";
import { useCount } from "../../context/Counter/useCount";

/**
 * Dashboard component that displays the current count and a button to increment it.
 * @returns {JSX.Element} The Dashboard component
 */
export default function Dashboard() {
  const { count, setCount } = useCount();

  return (
    <>
      <div className="card">
        {console.log("The value of count is: ", count)}
        <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
        <p>This demo has the purpose to show how to debug in react</p>
      </div>
    </>
  );
}

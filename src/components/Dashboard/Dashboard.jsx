import "../../App.css";
import { useCount } from "../../context/Counter/useCount";

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

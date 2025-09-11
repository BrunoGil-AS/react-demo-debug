import "../../App.css";
import { useCount } from "../../context/Counter/useCount";

export default function Box() {
  const { count, setCount } = useCount();

  return (
    <>
      <h1>This is another page</h1>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
      </div>
    </>
  );
}

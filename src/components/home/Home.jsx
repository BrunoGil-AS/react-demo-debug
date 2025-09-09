import "../../App.css";

export default function Home({ counter, setCounter }) {
  return (
    <>
      <div className="card">
        <button onClick={() => setCounter((count) => count + 1)}>
          count is {counter}
        </button>
        <p>This demo has the propuse to show how to debug in react</p>
      </div>
    </>
  );
}

import "../../App.css";

export default function Box({ counter, setCounter }) {
  return (
    <>
      <h1>This is another page</h1>
      <div className="card">
        <button onClick={() => setCounter((count) => count + 1)}>
          count is {counter}
        </button>
      </div>
    </>
  );
}

import {createSignal} from "solid-js";

export function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <p>
        <button onClick={() => setCount(count() - 1)}>-</button>
        <span>{count()}</span>
        <button onClick={() => setCount(count() + 1)}>+</button>
      </p>
    </div>
  );
}

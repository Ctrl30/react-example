import React from "react";
import { render } from "react-dom";
// import { render } from "react-dom";
// import { useState } from "./useState";



export default function Rstate() {
    function useState(initialValue) {
        let state = initialValue;
        const setState = (newState) => {
          state = newState;
          render()
        };
        return [state, setState];
      }
  const [count, setCount] = useState(0);
  console.log('cccccccc',count)
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
}

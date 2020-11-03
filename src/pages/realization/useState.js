// import { render } from "@testing-library/react";

function useState(initialValue) {
  let state = initialValue;
  const setState = (newState) => {
    state = newState;
    // render();
  };
  return [state, setState];
}
export { useState };

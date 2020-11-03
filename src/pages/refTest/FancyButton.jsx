import React, { forwardRef } from "react";
import { render } from "@testing-library/react";

function FancyButton(props, ref) {
  console.log("ssssssssss ref", ref);
  return (
    <>
      <input type="text" ref={ref} />
      <button
        onClick={() => {
            ref.current.focus()
          console.log("aaaaa,");
        }}
      >
        {props.children}
      </button>
    </>
  );
}

export default forwardRef(FancyButton);

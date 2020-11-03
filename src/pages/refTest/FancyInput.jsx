import React, { forwardRef, useImperativeHandle, useRef } from "react";

function FancyInput(props, ref) {
  const inputRef = useRef({xxx:'xxx',fuxck:'fuxk'});
  console.log('refsssssssss',inputRef)
  const getValue = ()=>{
    return inputRef.current.value;
  }
  useImperativeHandle(ref, () => ({
    myFocus: () => {
        inputRef.current.focus();
    },
    myValue:getValue
  }));
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}
export default forwardRef(FancyInput);

import React, { forwardRef , useRef,useCallback, useState } from "react";
// import Child from './pages/refTest/child';
import Example from './pages/example';
import Example2 from './pages/example/example2';
import "./App.css";

function App() {
  const [count, setCount] = useState(0)
  // setTimeout(() => {
  //   setCount(count+1);
  // }, 1000);

  return (
    <div>
      <Example {...{[count]:'cc'}} count={count} /> 
      <Example2 count={count} /> 
    </div>
  );
}

export default App;

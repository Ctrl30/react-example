import React, { useState, useCallback, useEffect } from "react";
import { Button,Input } from "antd";

function Parent() {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState("");
  const callback = useCallback(() => {
    return count;
  }, [count]);
  console.log('parent')
  return (
    <div>
        <h4>Parent{count}</h4>
      <div>-----------------f-u-c-k--y-o-u---------</div>
      <Child callback={callback} />
      <div>
        <Button onClick={() => setCount(count + 1)}>fuck you</Button>
        <Input value={val} onChange={e=>setVal(e.target.value)} ></Input>
      </div>
    </div>
  );
}

function Child({callback}) {
    const [count, setCount] = useState(()=>callback())
    console.log('child')
    useEffect(() => {
        setCount(callback())
        return () => {
        }
    }, [callback])
    return <div>
        <h4>chilid</h4>
         count: {count}
    </div>
}

export default Parent;
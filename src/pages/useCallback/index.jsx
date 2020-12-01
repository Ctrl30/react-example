import React, { useState, useCallback } from "react";
import { Button, Input } from "antd";
import style from './style.scss';

const set = new Set();

export default function UseCallback() {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState("");

  const callback = useCallback(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div>
      <h4>{count}</h4>
      <h4>{set.size}</h4>
      <div>
        <Button onClick={handleClick}>add</Button>
        <Input className={style.input} value={val} onChange={handleChange} />
      </div>
    </div>
  );
}

import React, { useState, useCallback ,useMemo} from "react";
import { Button } from "antd";

export default function CallbackTest() {
  const [name, setName] = useState("logan");
  const [count, setCount] = useState(0);
  const memoized = useCallback(() => {
    return count+100;
  }, [count]);
  const namem = useMemo(() => {
    return name
  }, [name]) 
  console.log("memoized", memoized());
  console.log("original", count);
  return (
    <div>
      <p>name:{name}</p>
      <p>namem:{namem}</p>
      {/* <p>count:{count}</p> */}
      <Button
        onClick={() => {
        //   setCount(count + 1);
        setName("logan");
        }}
      >
        logan
      </Button>
      <Button
        onClick={() => {
          setName("hoddy");
        }}
      >
        hoddy
      </Button>
    </div>
  );
}

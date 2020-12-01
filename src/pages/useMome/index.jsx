import React, { useState ,useMemo} from "react";
import {Button,} from 'antd';

export default function WithoutMemo() {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState("");
    const expensive = ()=>{
        console.log('compute')
        let sum = 0;
        for (let i = 0; i < count*100; i++) {
            sum+=i;
        }
        return sum;
    }
    // const expensive = useMemo(() => {
    //     console.log('ccccccccccc');
    //     let sum = 0;
    //     for (let i = 0; i < count * 100; i++) {
    //         sum += i;
    //     }
    //     return sum
    // }, [count])
  return <div>
      <h4>{count}-{val}-{expensive}</h4>
      <Button 
        onClick={()=>setCount(count+1)}
      >clicme</Button>
      <input value={val} onChange={event => setVal(event.target.value)}/>
  </div>;
}

import { Button } from 'antd';
import React from 'react'

export default function StateDemo() {
  const [count, setCount] = React.useState(0)
  
  return (
    <div>
      <div>{count}</div>
      <Button onClick={()=>setCount(count+1)}>Click me </Button>
    </div>
  )
}

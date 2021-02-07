import React, { useCallback, useRef, forwardRef } from "react";
import { Button, Input } from "antd";

// 实现ref转发
const fancyButton = forwardRef((props, ref) => (
  <div>
    <Input ref={ref} />
    <Button>{props.children}</Button>
  </div>
));

export default function Useimperativehandle() {
  return <div>useimperativehandle</div>;
}

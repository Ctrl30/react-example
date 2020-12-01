import React from "react";
import { Button,Input } from "antd";

const FancyButton = React.forwardRef((props, ref) => {
    console.log('props', props)
    console.log('ref', ref)
  return (
      <Input ref={ref} /> 
    // <Button ref={ref} type="primary">
    //   What the Hell {props.children}
    // </Button>
  );
});

export default FancyButton;

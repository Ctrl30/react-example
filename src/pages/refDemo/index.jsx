import { Button } from "antd";
import React from "react";
import FancyButton from "./FancyButton";

const ref = React.createRef();
const ref1 = React.createRef();
export default function RefDemo1() {
    return (
        <div>
            <FancyButton ref={ref} wrappedComponentRef={ref1}>click me</FancyButton>
            <Button  onClick={()=>{
                ref.current.focus();
                console.log('1111111111',ref)
            }}>hello</Button>
        </div>
    )
}


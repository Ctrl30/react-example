import React, { useEffect, useImperativeHandle } from "react";
import  { Button } from 'antd';
// 父组件
const ForwardRef = React.memo(() => {
    const createRefComp = React.useRef();
    const createRefCompMethod = React.useRef();
  
    useEffect(() => {
      console.log("useRefComp:", createRefComp.current);
      console.log("createRefCompMethod:", createRefCompMethod.current);
      
    }, []);

   const handleClick = ()=>{
    createRefComp.current.reload();
    }
    return (
      <div>
          <Button onClick={handleClick}>click</Button>
        <ForwardRefFunc ref={createRefComp} />
      </div>
    );
  });
  const RefFunc = React.forwardRef((props, ref) => {
    const [name, setName] = React.useState(null);
    const reload = () => {
      console.log("reload");
      setTimeout(() => {
        setName("ForwardRefFunc");
      }, 3000);
    };
    //useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值
    useImperativeHandle(ref, () => {
      return {
        reload: reload,
      };
    });
    return <div ref={ref}>ForwardRefFunc {name}</div>;
  });
  const ForwardRefFunc = React.memo(RefFunc);
  
  export default ForwardRef;
import React,{forwardRef} from "react";

 function child(props,ref) {
  console.log("props", ref);
  return (
    <div>
      <span>hello fuck you </span>
    </div>
  );
}
const Child = forwardRef((props,ref)=>{
    console.log('prrrrrrrrrr',ref)
    console.log('props',props)
    return (
        <div>
            <span>fuck you </span>
        </div>
    )
})
export default forwardRef(child)
// export default Child

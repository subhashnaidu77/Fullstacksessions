

import { useRef, useState } from "react";

function Nine(){
const box = useRef(null);
const [boxed , setBoxed] = useState("");
const updatingthetext=()=>{
    setBoxed(box.current.value)
    // box.current.valueis going to pull out the text i ahve entered in th input box 
}
return (<>
<input ref={box} onChange={updatingthetext}></input>
<h1>{boxed}</h1>
</>)}
export default Nine;
 

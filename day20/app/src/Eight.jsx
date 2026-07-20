import {useEffect, useRef,useState} from 'react'

function Eight(){
    
    const k = useRef();
    const [c , setC]= useState(0);  
    useEffect(()=>{
k.current = c;

    },[c]
)
return (
    <>
    <h1> {c}</h1>
    <h3>{k.current} </h3>
    <button onClick={()=>setC(c+1)}>update the value</button>
    </>
)

}
export default Eight;

import { useEffect, useState } from "react";


const Seven = () => {
const [count , setCount] = useState(0);
useEffect(()=>{
    // kif lofgin is true - navigate dashbord by api /dashboard 
    console.log("hello");
},[count]);
  return (
    <div>
   {count}
   <button onClick={()=>setCount(count+1)}>increnent</button>  
    </div>
  );
};

export default Seven; 
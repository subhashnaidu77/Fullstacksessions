import { useState } from "react"
function Four(){
    const [name , setName] = useState("")
return (<>
{/* e is called as event object 
e.target --- current element 
e.target.value -- input value 
*/}
<input type="text" onChange={(e)=>setName(e.target.value)}/>
<h1>{name}</h1>
</>)
}
export default Four


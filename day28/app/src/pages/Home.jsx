import { useState } from "react";
import { addUser } from "../services/userService";
function Home(){

    const [name ,setName] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit=async()=>{
        const userData= {
            name,
            email
        };

        await addUser(userData);
        alert("User details has added");
        setName("");
        setEmail("");
    }
    return (<>

<h1>User Form </h1>
<input type="text" placeholder="enter your name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input type="email"
placeholder="enter your email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<button onClick={handleSubmit}>submit</button>


    </>)
}
export default Home;
import { useState } from "react";
const Six = () => {
    const [username , setUsername] = useState("");
     const [password , setPassword] = useState("");
  function submit(e){
    e.preventDefault();
    console.log(username);
    console.log(password);
    setUsername("");
    setPassword("");
  }
  return (
    <div>
        <form onSubmit={submit}>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button>submit</button>
       </form>
    </div>
  );
};
export default Six;
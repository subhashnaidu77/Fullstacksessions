function One({skills}){
    return(
<>
<ul>
{skills.map((skill,index)=>(
    <li key={index}>{skill}</li>))}


</ul>
</>
)}
export default One;
function Three(){
function handleSubmit(e){
    e.preventDefault();
    alert("form has successfully submited");
}   
return(<>
<form onSubmit={handleSubmit}>
<input type="text"/>
<button>submit</button>
</form> 
</>)}
export default Three
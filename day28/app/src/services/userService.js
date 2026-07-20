import axios from "axios";
const API = "http://localhost/api/users";
export const addUser = async(userData)=>{
return  await axios.post(
    `${API}/adduser`,
    userData
);
}

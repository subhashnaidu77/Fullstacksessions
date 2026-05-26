
// //emit functtion is to trigger the event and pass the data to the event listener. In this case, we are passing the name of the user who has logged in. The event listener will then log a message to the console with the user's name.
import EventEmitter from "events";

const emitter = new EventEmitter();
emitter.on("userlogin",(name)=>{
    console.log(`${name} has logged in.`);
});

emitter.emit("userlogin","sameer");
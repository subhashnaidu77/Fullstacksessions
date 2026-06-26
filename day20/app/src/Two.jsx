import { Component } from "react";

class Two extends Component{
constructor(){
    super();
    this.state = {
        count :0
    };
}


increment =()=>{
    this.setState({
        count: this.state.count +1
        });
};

decre =()=>{
    this.setState({
        count:this.state.count -1
    });
}
render(){
    return(<>
    <h1>{this.state.count}</h1>
    <button onClick={this.increment}>click to change </button>
     <button onClick={this.decre}>click to change </button>
    </>)
}

}
export default Two
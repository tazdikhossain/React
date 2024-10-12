import React, {Component} from "react";

// class component
// class Person extends Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         // console.log(this.props);
//         // return <h1></h1>   
//         return (
//                 <div>
//                     <d3>Name: {this.props.name}</d3>
//                     <br></br>
//                     <d3>Age: {this.props.age}</d3>
//                 </div>
//                 );
//     }
   
// }


// Dynamic Functional Component
let Person = (props) =>{
    return (
        <div>
        <d3>Name: {props.name}</d3>
        <br></br>
        <d3>Age: {props.age}</d3>
          {/* <d1>Number: {Math.random() } </d1> */}
        </div>
      );
}

export default Person;
  
import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Person from './components/Person';
import Paper from './components/Paper';

// Functional Component
// function App() {
//   return (
//     <div className="App">
//       {/* // jSX code */}

//       <h1>Hello Tazdik</h1>
//       <Man />
//       <Person name="Hulk" age="2000"/>

//       <h1>Paper List</h1>
//       <Paper name="Prothom Alo" price="10 Taka"/>
//     </div>
//   );


  // JSX suntax
//   return React.createElement('div', {className:"App"}, React.createElement('h1', null, "How are you?",  <Man />));
// }


// Functional Component
function Man(){
  return (
    <div>
      <d1>Good Morning!!</d1>
    </div>
  );

  // // JSX suntax
  // return React.createElement('div', null, React.createElement('h3', null, "Hope you are fine"));
}


// Class Component
class App extends Component{
  // State == class component == only class base component == class component property
  // constructor()
  // {
  //   super();
  //   this.state = {};
  // } 
  state = {
    paper :[
      {name:"Prothom Alo" , price: "10 Taka"},
      {name:"Daily Star" , price: "12 Taka"}
    ],
    otherProp: "Welcome to Paper portal"
  }

  changePaperState = (newPaper) =>{
    this.setState({
      paper :[
        {name:newPaper, price: "13 Taka"},
        {name:"Daily Star Newspaper" , price: "15 Taka"}
      ]
    });
    // console.log("Button Clicked");
  }

  changeInputState = event =>{
    this.setState({
      paper :[
        {name: event.target.value, price: "13 Taka"},
        {name:"Daily Star Newspaper" , price: "15 Taka"}
      ]
    });
    // console.log("Button Clicked");
  }

  render()
  {
    let obj = new Component();
    console.log(obj);
    return(
      <div className="App">
      <h1>Hello Tazdik</h1>
      <Person name="Hulk" age="2000"/>

      <h1>Paper List</h1>
      {/* <Paper name="Prothom Alo" price="10 Taka"/> */}
      <Paper name={this.state.paper[0].name} price={this.state.paper[0].price} input = {this.changeInputState}/>
      <Paper name={this.state.paper[1].name} price={this.state.paper[1].price} change={this.changePaperState.bind(this, "Amr-Desh")}/>

      <button onClick={this.changePaperState.bind(this, "Sunrise")}>Change State</button>
      <br></br>
      {/* <input type="text" onChange={this.changeInputState} /> */}
     </div>
    );
  
  }
}
      

export default App;

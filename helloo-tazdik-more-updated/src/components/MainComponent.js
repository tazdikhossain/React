import React, {Component} from 'react';
import Paper from './representational/Paper';
import paper from '../assests/paper';
import PaperList from './lists/PaperList';
import NewPaper from './representational/NewPaper';
// import { Route } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';


class MainComponent extends Component{
  state = {
    paper :paper,
    showPaper:true
  }

  changePaperState = (newPaper) =>{
    this.setState({
      paper :[
        {name:newPaper, price: "13 Taka"},
        {name:"Daily Star Newspaper" , price: "15 Taka"}
      ]
    });
  }

  changeInputState = (event, index) => {
    const paper = {
      ...this.state.paper[index]
    };
  
    paper.name = event.target.value;
    const papers = [...this.state.paper];
    papers[index] = paper;
  
    this.setState({ paper: papers });
  }
  

  deletePaperState = (index) =>{
    const papers = [...this.state.paper];
    papers.splice(index, 1);
    this.setState({
      paper : papers
    });

  };

  hideAllPaper = () =>{
    this.setState({showPaper: !this.state.showPaper});
  }


  render() {


  let papers = null;
  if(this.state.showPaper)
  {
    papers = <PaperList 
    papers ={this.state.paper}
    deletePaperState = {this.deletePaperState}
    changeInputState = {this.changeInputState}/>
  }

  
  return (
    <div className="App">
      <div className='nav-bar'>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/new-paper">New Book</NavLink></li>
        </ul>
      </div>
  
      <Routes>
      <Route path="/" element={papers} /> {/* Correctly using papers */}
      <Route path="/new-paper" element={<NewPaper />} />
    </Routes>
    </div>
    
    //  {papers}

    // <NewPaper />

  );
  
  
  }

}

export default MainComponent;
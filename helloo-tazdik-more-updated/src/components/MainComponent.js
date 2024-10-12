import React, {Component} from 'react';
import Paper from './representational/Paper';
import paper from '../assests/paper';
import PaperList from './lists/PaperList';


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

  
  return(
    <div className="App">

    <h1>Paper List</h1>

   
    {papers}

    <button onClick={this.hideAllPaper}>Hide All Paper</button>
    </div>
  );
  
  }

}

export default MainComponent;
import React,{Component} from 'react';

class NewPaper extends Component{
    constructor(props){
        super(props);
        this.state = {
            Name: "",
            Price: ""
        }
    }


    handleInputChange = event =>{
       const name = event.target.name;
       const value = event.target.value;
       this.setState({
        [name]:value
       })

    }

    handleSubmit = event =>{
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <h1>New Book Entry</h1>
                <form onSubmit={(event)=>this.handleSubmit(event)}>
                    <label>Paper Name:</label>
                    <br/>
                    <input type="text" name="Name" value={this.state.Name} onChange={(event)=>this.handleInputChange(event)}/>
                    <br/>
                    <label>Paper Price:</label>
                    <br/>
                    <input type="text" name="Price" value={this.state.Price} onChange={(event)=>this.handleInputChange(event)}/>
                    <br/>
                    <input type="submit" value="Submit" />
    
                </form>
            </div>
        );
    }
}


export default NewPaper;
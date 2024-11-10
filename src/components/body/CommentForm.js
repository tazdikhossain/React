import React, {Component} from 'react';
import {Form, Button, input} from 'reactstrap';
import {connect} from 'react-redux';



class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            author:' ',
            rating:'',
            comment:''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleInputChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    // handleSubmit = (event) => {

    //     console.log(this.state);
    //     this.setState({
    //         author:' ',
    //         rating:'', 
    //         comment:'' 
    //     });
    //     event.preventDefault();   
    // }


    handleSubmit = event => {
        this.props.addComment(this.props.dishId, this.state.author, this.state.rating, this.state.comment);
  
    this.setState({
        author:' ',
        rating:'', 
        comment:'' 

    });

    event.preventDefault();
    }

    
    render(){
       // console.log(this.props);
        // this.props.dispatch({
        //     type:'ADD_COMMENT', 
        //     payload:{
        //         dishId: this.props.dishId, 
        //         author: this.state.author, 
        //         rating: this.state.rating, 
        //         comment: this.state.comment
        //     }});
        return(
            <div>
                <Form onSubmit={this.props.handleSubmit}>
                    <input type="text" name="author" value={this.state.author} 
                    placeholder='Your Name'
                    onChange={this.handleInputChange} required>
                    </input>
                    
                    <input type="text" name="rating" placeholder="Rating" value={this.state.rating}
                    onChange={this.handleInputChange} >

                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>

                    </input>


                    <input type="text" name="comment" value={this.state.comment} 
                    onChange={this.handleInputChange} 
                    required></input>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        );
    }

}

export default CommentForm;
import React,{Component} from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes.js";
import DishDetails from './DishDetail.js';
import {connect} from 'react-redux';
import { CardColumns, Modal, ModalBody, ModalFooter } from "reactstrap";
import * as actionTypes from "../../redux/actionTypes";



const mapStateToProps = state =>{
    // console.log("mapStateToProps: ", state);
    return{
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addComment: (dishId, author, rating, comment) => dispatch
        ({
            type:'actionTypes.ADD_COMMENT', 
            payload:{
                dishId: dishId, 
                author: author, 
                rating: rating, 
                comment: comment
            }
        }),
    }
}


class Menu extends Component{
    state = {
        //dishes: DISHES,
        selectedDish:null,
        modalOpen: false
    }

    onDishSelect = dish =>{
        console.log(dish);
        this.setState({selectedDish:dish});
    }

    render(){
        document.title = "Menu";
        const menu = this.props.state.dishes.map(item => {
            return(
                <MenuItem 
                dish={item} 
                key={item.id}
                DishSelect={() => this.onDishSelect(item)}
                // onDishSelect={this.onDishSelect}
                />
            );
        })


        let dishDetails = null;
        if(this.state.selectedDish != null)
        {
            const comments = this.props.state.comments.filter(comment => comment.dishId === this.state.selectedDish.id);
            dishDetails = <DishDetails dish={this.state.selectedDish}
            comments={comments}
            addComment={this.props.addComment}/>
        }


        return(
            <div className = "container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen}>
                        <ModalBody>
                        {dishDetails}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={() => this.setState({modalOpen: false})}>    
                            Close
                            </Button>
                        </ModalFooter>
                    </Modal>   
                    </div>
                </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
// import DISHES from '../data/dishes.js';
// import COMMENTS from '../data/comments.js';


// const initialState = {
//     dishes: DISHES,
//     commments: COMMENTS
// }

// export const Reducer = (state=initialState, action)=>{
//     // console.log("Action:", action);

//     if(action.type === 'ADD_COMMENT')
//     {
//         let comment = action.payload;
//         comment.id = state.comments.length;
//         comment.date = new Date().toISOString();
//         console.log(comment);
//        // var newComment = state.comments.concat(comment);
//         return {...state, comments: newComment}
//     }   
  
//     return state;
// }


import DISHES from "../data/dishes";
import CommentForm from "../components/body/CommentForm.js";
import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes.js";

const dishReducer = (dishstate=DISHES, action  ) => {
    switch(action.type){
        default:
            return dishstate;
    }
}

const commentReducer = (commentstate=[], action) => {
    switch(action.type){
        case 'actionTypes.ADD_COMMENT':
        let comment = action.payload;
        comment.id = commentstate.length;
        comment.date = new Date().toISOString();
        console.log(comment);
        var newComment = commentstate.concat(comment);
        return newComment;
    default:
        return commentstate;
    }
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
});


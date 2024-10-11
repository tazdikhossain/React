import React from "react";
import '../stylesheets/Paper.css';


const Paper = (props) =>{
    return(
        <div className="Paper">
            <h4 onClick={props.change}>Paper: {props.name}</h4>
            <h5>Price: {props.price}</h5>
            <input type="text" onChange={props.input} value ={props.name}/>
        </div>
    );
}

export default Paper;

import React from "react";
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText} from 'reactstrap';
import LoadComments from "./LoadComments";
import { Component } from "react";

const DishDetail = (props) =>{
    return(
        <div>
             <Card style={{margin: "10px"}}>
                    <CardImg top src={props.dish.image} alt={props.dish.name}/>
                    <CardBody style={{textAlign:"left"}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>Price: {props.dish.price}/-</p>
                    </CardText>
                    <hr/>
                    <LoadComments comments={props.dish.comments}/>
                    <hr>
                    <CommentFrom dishId={props.dish.id} addComment={props.addComment}/>
                    </hr>
                    </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail; 
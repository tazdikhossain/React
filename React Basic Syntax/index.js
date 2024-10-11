// React Component

function Man(){
    return(
        <div className="man">
            <h1> Tazdik Hossain </h1>
            <p>Age: 28</p>
        </div>
    );
}

ReactDOM.render(<Man/>, document.querySelector('#m1'));
ReactDOM.render(<Man/>, document.querySelector('#m2'));


// props (object) - to make the component dynamic

function Man(props){
    return(
        <div className="man">
            <h1> {props.name} </h1>
            <p> {props.age} </p>
        </div>
    );
}

ReactDOM.render(<Man name="Tazdik" age="22"/>, document.querySelector('#m1'));
ReactDOM.render(<Man name="Hulk" age="2200"/>, document.querySelector('#m2'));


//// To make the data in one div row wise

function Man(props){
    return(
        <div className="man">
            <h1> {props.name} </h1>
            <p> {props.age} </p>
        </div>
    );
}

let men = (
    <div>
        <Man name="Tazdik" age="22"/>
        <Man name="Hulk" age="2200"/>
    </div>
);

ReactDOM.render(men, document.querySelector('#man2'));
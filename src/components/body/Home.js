// import React,{Component} from "react";
// import { connect } from "react-redux";


// const mapStateToProps = (state) =>{
//     console.log("mapStateToProps: ", state);
//     return{
//         dishes : state.dishes,
//         comeents: state.comments
//     }
// }
// class Home extends Component{

//     componentDidMount(){
//         console.log("Home State: ", this.state);
//         console.log("Home Props: ", this.props);
//     }
//     render(){
//         document.title = "Tazdik Restaurent";
//         return(
//             <div>
                
//             </div>
//         );
//     }
// }

// export default connect(mapStateToProps)(Home);



import React,{Component} from "react";

class Home extends Component{
    render(){
        document.title = "Tazdik Restaurent";
        return(
            <div>
                
            </div>
        );
    }
}

export default Home; 
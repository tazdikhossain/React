import React from 'react';
import Paper from '../representational/Paper';

// const PaperList = (props) =>{
//     return(
//         props.paper.map((paper, index) => {
//             return (
//               <Paper
//                 name={paper.name}
//                 price={paper.price}
//                 delete={this.deletePaperState.bind(this, index)}
//                 key={index} 
//                 inputName={(event) => this.changeInputState(event, index)}
//               />
//             );
//           })
//     );
// }


const PaperList = (props) => {
    return (
      props.papers.map((paper, index) => {
        return (
          <Paper
            name={paper.name}
            price={paper.price}
            delete={() => props.deletePaperState(index)} // No need for `this` in functional components
            key={index}
            inputName={(event) => props.changeInputState(event, index)} // Same for this
          />
        );
      })
    );
  }

export default PaperList;
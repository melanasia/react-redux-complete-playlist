// import React, {Component} from 'react';

// whenever we create a class-based component, we need to import React and {Component}

// class Ninjas extends Component{
//     render(){
//         // destructuring: we'll store the name of this.props in a variable called name
//         // we'll store the age of this.props in a variable called age
//         // we'll store the belt of this.props in a variable called belt
//         const { ninjas } = this.props;
//         // next, we will cycle through this list of ninjas and output them to the DOM via the map method
//         // take this array, map it to a NEW array of HTML elements (one for each ninja)
//         const ninjaList = ninjas.map(ninja => {
//             return (
//                 <div className="ninja" key={ninja.id}>
//                 <div>Name: {ninja.name}</div> 
//                 <div>Age: {ninja.age}</div>
//                 <div>Belt: {ninja.belt}</div>
//              </div>  
//             )
//         });
//         return(
//             <div className = 'ninja-list'>
//                 { ninjaList }
//             </div>

//         )
//     }
// }

// export default Ninjas;

// This component does not have its own state. The data it receives is from the props from the container component. We don't need a class to create this component (will refactor below).
// Class-based components have state 
// We'll convert this component into a functional component because it is primarily concerned with the UI: how is that data output?
// Can get rid of the render() method (only for class-based components)
// Props are not automatically passed in functional components as they are in class components -> take them in as a parameter

import React from 'react';

// const Ninjas = (props) => {
//     const { ninjas } = props; // remove 'this.' as no longer referring to the instance of a class

// }

const Ninjas = ({ninjas}) => {
    /*...*/
}
import React, {Component} from 'react';

// whenever we create a class-based component, we need to import React and {Component}

class Ninjas extends Component{
    render(){
        // console.log(this.props);
        // destructuring: we'll store the name of this.props in a variable called name
        // we'll store the age of this.props in a variable called age
        // we'll store the belt of this.props in a variable called belt
        const {name, age, belt} = this.props;
        return(
            <div className="ninja">
               <div>Name: {name}</div> 
               <div>Age: {age}</div>
               <div>Belt: {belt}</div>
            </div>
        )
    }
}

export default Ninjas;
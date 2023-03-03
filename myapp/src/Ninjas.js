import React, {Component} from 'react';

// whenever we create a class-based component, we need to import React and {Component}

class Ninjas extends Component{
    render(){
        // destructuring: we'll store the name of this.props in a variable called name
        // we'll store the age of this.props in a variable called age
        // we'll store the belt of this.props in a variable called belt
        const { ninjas } = this.props;
        // next, we will cycle through this list of ninjas and output them to the DOM via the map method
        // take this array, map it to a NEW array of HTML elements (one for each ninja)
        const ninjaList = ninjas.map(ninja => {
            return (
                <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div> 
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
             </div>  
            )
        });
        return(
            <div className = 'ninja-list'>
                { ninjaList }
            </div>

        )
    }
}

export default Ninjas;
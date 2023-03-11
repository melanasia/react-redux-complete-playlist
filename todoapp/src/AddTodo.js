import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''

    }

    handleChange = (ev) => {
        this.setState({
            content: ev.target.value
        })
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new task</label>
                    <input type='text' onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;
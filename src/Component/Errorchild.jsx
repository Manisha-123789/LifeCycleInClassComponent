import React, { Component } from 'react'

export default class Errorchild extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
    }
    handleChange = () =>{
        this.setState({
           counter : this.state.counter + 1
        })
    }
  render() {
    if(this.state.counter>2){
        throw new Error("Error Child Component");
    }
    return (
      <div>
        <h1>This component is created for error catching</h1>
        <h1>Counter : {this.state.counter}</h1>
        <button onClick={this.handleChange}>Counter Value Incre</button>
      </div>
    )
  }
}

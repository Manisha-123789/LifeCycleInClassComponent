import React from "react";
import { Lifecyclechild } from "./Lifecyclechild";
import Errorchild from "./Errorchild";
import ErrorBound from "./ErrorBound";
export class Lifecycle extends React.Component { 
    constructor(props) {  //CONSTRUCTOR ALSO RUN ONCE IN LIFE CYCLE USEFULL FOR INITILIZATION OF STATE
        super(props);
        this.state = {
            name: "Manisha",
            display : true
        }
        console.log("Parent Mounting Constructor Is Called")
    }

    static getDerivedStateFromProps(props, state) {  //THIS METHOD USERFULL FOR WHEN OUR STATE IS DEPENDENT ON PROPS 2. IT IS RUN EVERY TIME WHEN COMPONENT RE-RENDER 
        console.log("Parent Mounting getDerivedStateFromProps Is Called")
        console.log(props);
        console.log(state);
        return null;
    }

    componentDidMount() { 
        console.log("Parent Mounting ComponentDidMount Is Called") //THIS COMPONENT RUNS ONLY ONE TIME 2. THIS IS USED FOR FETCHING DATA FROM AN API ON FIRST MOUNTING PHASE LIKE USER PROFILE NAME, DETAILS ETC.

    }

    handleChange=()=>{
        this.setState({
            name : "Sona"
        })
    }

    handleComponentRemoved=()=>{
        this.setState({
            display:false
        })
    }

    render() {
        console.log("Parent Mounting Render Is Called")
        return (
            <>
                <h1>Name : {this.state.name}</h1>
                <h1>Age : {this.props.age}</h1>
                <button onClick={this.handleChange}>Change Name</button>
                {this.state.display?<Lifecyclechild age={50} name={this.state.name}/>:<h1>Child Component Removed</h1>}
                <button onClick={this.handleComponentRemoved} >Remove Child Component</button>
                 <ErrorBound><Errorchild/></ErrorBound>
            </>
        )
    }
}
import React from "react";
export class Lifecyclechild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
        console.log("Child Mounting Constructor Is Called")
    }

    static getDerivedStateFromProps(props, state) {  //this is static method this is not instance method so we did not use this keyword
        if (props.name !== state.name) {
            return { name: props.name }
        }
        console.log("Child Mounting getDerivedStateFromProps Is Called")
        console.log(props);
        console.log(state);
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) { //THIS METHOD IS RUN WHEN COMPONENT IS ON UPDATING PHASE, IF WE WRITE THIS METHOD WE SHOULD PASS BOOLEAN VALUE, TRUE OR FALSE, IF WE PASS FALSE THEN WHATEVER CHANGE HAS DONE IT WILL NOT REFLECT ON DOM AND IF WE RETURN TURE THEN THE CHANGES WILL REFLECT ON DOM, THIS METHOD RUN EVERY TIME WHEN COMPONENT IS RE-RENDERED
        console.log("Child shouldComponentUpdate Is Called")
        console.log(nextProps);
        console.log(nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {//THIS METHOD CAPTURE THE PREVSTATE AND PREVPROPS VALUE
        console.log("child getSnapshotBeforeUpdate Is Called")
        console.log(prevProps);
        console.log(prevState);
        return "Hellow";
    }

    componentDidUpdate(prevProps, prevState, snapshot) { //THIS METHOD IS RUN WHEN COMPONENT CHANGE IS REFLECTED ON ACTUAL DOM
        console.log("child componentDidUpdate Is Called")
        console.log(prevProps);
        console.log(prevState);
        console.log(snapshot);
    }

    componentDidMount() {
        console.log("Child Mounting ComponentDidMount Is Called")

    }

    componentWillUnmount() { 
        console.log("Child Mounting componentWillUnmount Is Called")
    }

    render() {
        console.log("Child Mounting Render Is Called")
        return (
            <>
                <h1>Name : {this.state.name}</h1>
                <h1>Age : {this.props.age}</h1>
            </>
        )
    }
}
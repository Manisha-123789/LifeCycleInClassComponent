import React, { Component } from 'react'

export default class ErrorBound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }

    }
    static getDerivedStateFromError(error) { //THIS METHOD IS RUN WHEN ERROR IS OCCURED 
        console.log("getDerivedStateFromError called", error);
        return { hasError: true }
    }

    componentDidCatch(err, info) { //THIS METHOD IS RUN WHEN ERROR IS OCCURED 
        console.log("componentDidCatch Error", err);
        console.log("componentDidCatch Info", info);
    }

    render() { //THIS METHOD RUN ON EVERY RENDERED
        if(this.state.hasError)
        {
            return <h1>Something went wrong</h1>
        }
        return this.props.children;
    }
}

import React, { Component } from 'react'

export default class UseEffectWithClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            what: 0,
        };
    }

    componentDidMount() {
        console.log("didMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        console.log("render");
        return (
        <div>UseEffectWithClassComponent</div>
        )
    }
}
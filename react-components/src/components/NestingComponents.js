import React, { Component } from "react";
import UserData from "./UserData";
import UserMessage from "./UserMessage";


export class NestingComponents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: true,
            isLoggedIn: true,
        };
    }
    render() {
        return (
            <div>
                <UserData isLoaded={this.state.isLoaded}/>
                <UserMessage isLoggedIn={this.state.isLoggedIn}/>
            </div>
        );
    }
}

export default NestingComponents;

/*
Passing props from the parent to a child can be anything:
STRINGS | NUMBERS | FUNCTIONS | METHODS | REACT COMPONENTS

Updating a child component from the parent: 
Pass props
Updating a parent component from the child: 
Pass an event handler and call te event handler
*/
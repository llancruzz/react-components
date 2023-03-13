import React, { Component } from "react";


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
                <h1>{this.state.isLoaded ? "Data Loaded" : "Loading..."}</h1>
                
            </div>
        );
    }
}

export default NestingComponents;
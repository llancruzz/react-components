import React from "react";

class EventBinding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    handleClick() {
        this.setState({
            introduction: "Goodbye!",
        });
        console.log(this.state.introduction);
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.introduction} {this.props.greeting}
                </h1>
                <button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                </button>
            </div>
        )
    }
}

export default EventBinding;

/*
Ways to bind event handlers
1. Use an arrow function in the render method 
(if you need to pass a parameter to an event handler)
2. I call bind on the handler with 'this'
3. Bind the event handler in the constructor
4. Define the handler as an arrow function (best practise and option)
*/
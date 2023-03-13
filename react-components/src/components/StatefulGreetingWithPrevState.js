import React from "react";

class StatefulGreetingWithPrevState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello!",
      buttonText: "Exit",
      count: 0,
    };
  }

  handleClick() {
    this.setState((prevState, prevProps) => {
      console.log("Previous State:", prevState);
      console.log("Previous Props:", prevProps);
      return {
        introduction:
          prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
        buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
      };
    });
  }
  // Function to increment button
  increment() {
    this.setState((prevState, prevProps) => {
      console.log("Previous State:", prevState);
      console.log("Previous Props:", prevProps);
      return {
        count: prevState.count + 1,
      };
    });
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
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
        <button onClick={() => this.increment()}>Increment</button>
        <p>You've clicked {this.state.count} times</p>
      </div>
    );
  }
}

export default StatefulGreetingWithPrevState;

/*
Updating the State:
1.| Add the onClick attribute to the button
2.| Write an event handler to listen for the click event
3.| Use setState() in the event handler to update the state

Rules:
1.| Never update the state directly, use the setState() method instead
2.| Put any code in setState callback that needs to run after the state update
3.| Use a callback function in setState with prevState if you need to update state based
on previos state values

General steps to updating state in React
1.| Assign an event listener to an HTML element, i.e onClick to a button
2.| Write an event handler,i.e handleClick or increment
3.| Call setState properly from within the event handler to update the states
*/
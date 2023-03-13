import React from "react";

// Creating a Class Componet
// Extending & render() Method
// Usining this to Access Props
class StatefulGreetingWithCallback extends React.Component {
  // Adding state
  constructor(props) {
    super(props);
    this.state = {
      // Initial State. It will represent the initial values of anything the component might change either
      // on its own or due to user interaction.
      introduction: "Hello!",
      buttonText: "Exit",
    };
  }
  // Never update the state directly, use the setState method instead
  handleClick() {
    this.setState(
      {
        introduction: "Goodbye!",
        buttonText: "Enter",
      },
      // Put any code in setState callback that needs to run after the state update
      () => {
        console.log("new state", this.state.introduction);
        console.log("new state", this.state.buttonText);
      }
    );
    console.log(this.state.introduction);
    console.log(this.state.buttonText);
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
    );
  }
}

export default StatefulGreetingWithCallback;

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
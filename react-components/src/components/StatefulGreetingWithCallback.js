import React from "react";

// Creating a Class Componet
// Extending & render() Method
// Usining this to Access Props
class StatefulGreetingWithCallback extends React.Component {
  // Adding state
  constructor(props) {
    super(props);
    this.state = {
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
Updating the State
• Add the onClick
1. attribute to the button
Write an event handler
2. I to listen for the click
event
Use setState() in the
3. I event handler to update the state */
import React from "react";

// In order to use Class in react, you must to 'extends React.Component
export default class StatefulGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initial State. It will represent the initial values of anything the component might change either
      // on its own or due to user interaction.
      count: 0
    };
  }

  setCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    return (
      <div className="greeting">
        <h1>
          Hello, {this.props.name}, I'm a stateful component!
        </h1>
        <h2>You've clicked {this.state.count} times</h2>
        <button onClick={this.setCount}>Increment Count</button>
      </div>
    );
  }
}

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
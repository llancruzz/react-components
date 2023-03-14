import React, { Component } from "react";
import MethodsAsPropsChild from "./MethodsAsPropsChild";

class MethodsAsPropsParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  // Method to handle button sign in
  handleSignIn = () => {
    this.setState({ isLoggedIn: true });
    console.log(this);
  };

  // Method to handle button sign out
  handleSignOut = () => {
    this.setState({ isLoggedIn: false });
    console.log(this);
  };

  // Single method that handles both SignIn and SignOut
  toggleIsLoggedIn = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    return (
      <div>
        <MethodsAsPropsChild
          isLoggedIn={this.state.isLoggedIn}
          handleSignIn={this.handleSignIn}
          handleSignOut={this.handleSignOut}
        />
      </div>
    );
  }
}

export default MethodsAsPropsParent;

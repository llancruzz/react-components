import React from "react";

function MethodsAsPropsChild(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <div>
          <p>Welcome to the site! Please complete the steps below:</p>
          <ol>
            <li>Confirm your email</li>
            <li>Complete your profile</li>
            <li>Subscribe to the newsletter</li>
          </ol>
          <button onClick={props.handleSignOut}>Sign out</button>
        </div>
      ) : (
        <div>
          <p>Please sign in</p>
          <button onClick={props.handleSignIn}>Sign in</button>
        </div>
      )}
    </div>
  );
}

export default MethodsAsPropsChild;

/*
The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
a condition followed by a question mark ( ? ), then an expression to execute if the condition 
is truthy followed by a colon ( : ), and finally the expression to execute if the condition is 
falsy:

{props.isLoggedIn ? (true) : (false)}
*/

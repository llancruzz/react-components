import React, { Component } from "react";
import axios from "axios";

export class HTTPPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiResponse: null,
    };
  }
  postToApi = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "Hello world!",
        body: "It works!",
        userId: 123,
      })
      .then((response) => {
        this.setState({
          apiResponse: response.data,
        });
      });
  };
  render() {
    // destructuring
    const { apiResponse } = this.state;
    return (
      <div>
        <button onClick={this.postToApi}>Create Post</button>
        {apiResponse ? (
          <div>
            <h1>{apiResponse.title}</h1>
            <p>Post ID: {apiResponse.id}</p>
            <p>{apiResponse.body}</p>
            <p>User ID: {apiResponse.userId}</p>
          </div>
        ) : (
          <p>Please Click the button above!</p>
        )}
      </div>
    );
  }
}

export default HTTPPost;

// sending HTTP POST request with data to a server or an API
// how to interact with modern APIs either by sending or fetching data
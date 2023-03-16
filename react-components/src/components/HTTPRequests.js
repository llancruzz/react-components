import React, { Component } from "react";
import axios from "axios";

export class HTTPRequests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: null,
    };
  }
  componentDidMount() {
    // Fetch the date using API
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({
          posts: Array.isArray(response.data) ? response.data : [response.data],
        });
      })
      // Catch the error if there is no value on array
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  }
  render() {
    const posts = this.state.posts;
    return (
      <div>
        <h2>Posts:</h2>
        {posts.length ? (
          posts.map((post) => (
            <div key={post.id}>
              <h2>
                {post.id}. {post.title}
              </h2>
              <h4>By User ID {post.userId}</h4>
              <p>{post.body}</p>
              <hr />
            </div>
          ))
        ) : this.state.error ? (
          <p>{this.state.error}</p>
        ) : (
          <h4>Loading posts ...</h4>
        )}
      </div>
    );
  }
}

export default HTTPRequests;

/*
How to fetch API data on mount in a class component with axios:
1.| npm install axios and import it into the component
2.| call axios.get('API_URL') in componentDidMount to fetch the data
3.| call setState to update the data in the state
4.| render the UI based on the new state values
*/

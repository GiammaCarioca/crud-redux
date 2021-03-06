import React, { Component } from "react";
import PostForm from "./PostForm";
import AllPosts from "./AllPosts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Post It</h2>
        </div>
        <PostForm />
        <AllPosts />
      </div>
    );
  }
}
export default App;

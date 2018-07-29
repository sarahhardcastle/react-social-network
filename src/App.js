import React, { Component } from 'react';
import './App.css';
import Post, {NewPost} from './Post/Post';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {username: "Sarah", content: "This is some writing" },
        {username: "Alex",  content: "This is some other writing"}
      ]
    };
  }

  newPostHandler = (event) => {
    const content = document.getElementById('NewPostInput').value;
    const newPost = {
      username: "User",
      content: content
    }
    const posts = [...this.state.posts, newPost];
    console.log(posts)
    this.setState({posts: posts});
    event.preventDefault();
    return false;
  }

  render() {
    return (
      <div className="App">
        <NewPost onSubmit={this.newPostHandler}/>
        {this.state.posts.map((post, index) => <Post username={post.username}
                                                content={post.content} /> )}
      </div>
    );
  }
}

export default App;

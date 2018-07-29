import React, { Component } from 'react';
import './Post.css';
import {UserMiniProfile} from '../User/User';


const Comment = (props) => {
  return (
    <div className="CommentBox">
      <UserMiniProfile username={props.username} />
      <p>{props.content}</p>
      <button onClick={props.click}>Delete</button>
    </div>
  )
}

const NewPost = (props) => {
  return (
    <div className="NewPost">
      <UserMiniProfile username="User" />
      <form id="NewPostForm" onSubmit={props.onSubmit}>
        <input id="NewPostInput" type="text" name="content" />
        <input id="AppData" type="hidden" name="app" value={props.app} />
        <input type="submit" value="Post" />
      </form>
    </div>
  )
}

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      content: props.content,
      comments: []
    };
  }

  loadCommentHandler = () => {
    const newComment = {
      username: "Name",
      content: "Something dumb"
    };
    this.setState({comments: this.state.comments.concat(newComment)});
  }

  deleteCommentHandler = (commentIndex) => {
    const comments = [...this.state.comments];
    comments.splice(commentIndex, 1);
    this.setState({comments: comments});
  }

  render() {
    return (
      <div className="Post">
        <UserMiniProfile username={this.state.username} />
        <div className="PostContent">
          <p>{this.state.content}</p>
          <div className="CommentArea">
            {this.state.comments.map((comment, index) => <Comment
                                                  username={comment.username}
                                                  content={comment.content}
                                                  click={() => this.deleteCommentHandler(index)} />)}
          </div>
          <button className="LoadCommentButton" onClick={this.loadCommentHandler}>Load comments</button>
        </div>
      </div>
    )
  }
}

export default Post;
export {NewPost};

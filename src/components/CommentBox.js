import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class CommentBox extends React.Component {
  state = { comment: '' };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  handleTextChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label htmlFor='comment'>Comment:</label>
        </div>
        <div>
          <textarea
            id='comment'
            rows='4'
            cols='40'
            onChange={this.handleTextChange}
            value={this.state.comment}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveComment: (comment) => dispatch(actions.saveComment(comment)),
  };
}

export default connect(null, mapDispatchToProps)(CommentBox);

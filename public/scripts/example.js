var CommentBox = React.createClass({

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList></CommentList>
        <CommentForm></CommentForm>
      </div>
    );
  }

});



var CommentList = React.createClass({

  render() {
    return (
      <div className="commentList">
      <Comment author="Pete Hunt">This is one comment</Comment>
      <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }

});


var CommentForm = React.createClass({

  render() {
    return (
      <div className="commentForm">
        where mah form at?
      </div>
    );
  }

});

var Comment = React.createClass({

  rawMarkup() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup }
  },

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }

});

ReactDOM.render(<CommentBox />, document.body);

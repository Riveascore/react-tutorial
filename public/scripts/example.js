var dataObj = [
  {id: 1, author: "Pete Boooo", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data}></CommentList>
        <CommentForm></CommentForm>
      </div>
    );
  }

});



var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
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

ReactDOM.render(
  <CommentBox url="/api/comments" />,
  document.getElementById('content')
);

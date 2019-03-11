import React, { Component } from "react";

class Blog extends Component {
  openInNewTab = () => {
    let win = window.open(this.props.url, "_blank");
    win.focus();
  };

  render() {
    return (
      <div className="ui card tarjeta" onClick={this.openInNewTab}>
        <div className="content">
          <div className="header">{this.props.title}</div>
          <div className="meta">{this.props.date}</div>
          <br />
          <br />
          <img
            alt="paragraph wireframe"
            className="ui wireframe image"
            src="/website/paragraph_wireframe.png"
          />
          <p />
        </div>
      </div>
    );
  }
}

export default Blog;

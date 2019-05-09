import React, { Component } from "react";
import { Accordion, Message } from "semantic-ui-react";
import projects from "../projects.js";

class Portfolio extends Component {
  panels = () => {
    console.log("portfolio", this.props.size)
    return projects.map((project, i) => {
      return {
        key: `panel-${i}`,
        title: { content: <span className="blurbStyle">{project.title}</span> },
        content: {
          content: (
            <Message>
              <br />
              <br />
              <center>
                {project.hasDemo ? (
                  <iframe className={this.props.size === "regular" ? "portfolioIFrameShowRegular" : "portfolioIFrameShowSmall"}
                    title={project.title}
                    src={project.demo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img className={this.props.size === "regular" ? "portfolioImageShowRegular" : "portfolioImageShowSmall"}
                    src={project.image}
                    alt={`${project.title} homepage`}
                  />
                )}
              </center>
              <br />
              <br />
              {project.description}
              <br />
              <br />
            </Message>
          )
        }
      };
    });
  };

  render() {
    return (
      <div className="row">
        <br />
        <br />
        <br />
        <br />
        <div className="col s1 m1" />
        <div className="col s10 m10">
          <center>
            <h3>Portfolio</h3>
          </center>
          <br />
          <br />
          <Accordion panels={this.panels()} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="col s1 m1" />
      </div>
    );
  }
}

export default Portfolio;


// width={this.props.size === "regular" ? "560" : "80%"}
// height={this.props.size === "regular" ? "315" : null}

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

const originalState = () => {
  return {
    toRoot: false,
    toPortfolio: false,
    toContact: false,
    toAbout: false
  };
};

class Navbar extends Component {
  state = originalState();

  handleLinkClick = e => {
    e.preventDefault();
    let keyString = `to${e.currentTarget.id}`;
    let stateCopy = { ...this.state };
    stateCopy[keyString] = true;
    this.setState(stateCopy, () => this.setState(originalState()));
  };

  handleResumeClick = e => {
    e.preventDefault();
    window.open("/BrunoGarciaGonzalez_SoftwareEngineer_resume.pdf", "_blank");
  };

  render() {
    if (this.state.toRoot) {
      return <Redirect to="/" />;
    } else if (this.state.toPortfolio) {
      return <Redirect to="/portfolio" />;
    } else if (this.state.toContact) {
      return <Redirect to="/contact" />;
    } else if (this.state.toAbout) {
      return <Redirect to="/about" />;
    }

    if (this.props.size === "regular") {
      return (
        <nav>
          <div className="nav-wrapper teal">
            <span
              id="Root"
              onClick={this.handleLinkClick}
              className="brand-logo center"
            >
              Bruno I. Garcia Gonzalez
            </span>
            <ul id="nav-mobile" className="left">
              <li>
                <a
                  href="https://www.linkedin.com/in/garcia-gonzalez/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li id="Resume" onClick={this.handleResumeClick}>
                <a href="/resume">Resume</a>
              </li>
            </ul>
            <ul id="nav-mobile" className="right">
              <li>
                <a
                  href="https://github.com/brunogarciagonzalez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@brunogarciagonzalez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              {/* <li id="Portfolio" onClick={this.handleLinkClick}>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li id="Contact" onClick={this.handleLinkClick}>
                <a href="/contact">Contact</a>
              </li> */}
            </ul>
          </div>
        </nav>
      );
    } else {
      return (
        <nav>
          <div className="nav-wrapper teal">
            <span
              id="Root"
              onClick={this.handleLinkClick}
              className="brand-logo center"
            >
              {this.props.size === "small"
                ? "Bruno I. Garcia Gonzalez"
                : "Bruno G.G."}
            </span>
            <ul id="nav-mobile" className="left">
              <li>
                <a className="dropDownItem">
                  <Dropdown item text="Menu">
                    <Dropdown.Menu>
                      <a
                        id="Resume"
                        href="/resume"
                        onClick={this.handleResumeClick}
                      >
                        <Dropdown.Item>Resume</Dropdown.Item>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/garcia-gonzalez/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Dropdown.Item>LinkedIn</Dropdown.Item>
                      </a>
                      <a
                        href="https://github.com/brunogarciagonzalez"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Dropdown.Item>GitHub</Dropdown.Item>
                      </a>
                      <a
                        href="https://medium.com/@brunogarciagonzalez"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Dropdown.Item>Blog</Dropdown.Item>
                      </a>
                      {/* <a
                        id="Portfolio"
                        href="/portfolio"
                        onClick={this.handleLinkClick}
                      >
                        <Dropdown.Item>Portfolio</Dropdown.Item>
                      </a>
                      <a
                        id="Contact"
                        href="/contact"
                        onClick={this.handleLinkClick}
                      >
                        <Dropdown.Item>Contact</Dropdown.Item>
                      </a> */}
                    </Dropdown.Menu>
                  </Dropdown>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }
}

export default Navbar;

// <li id="About" onClick={this.handleLinkClick}><a href="/about" >About</a></li>

import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

const originalState = {
    toRoot: false,
    toPortfolio: false,
    toContact: false,
    toAbout: false
}

class Navbar extends Component {
    state = originalState;

    handleLinkClick = (e) => {
        e.preventDefault();
        let keyString = `to${e.currentTarget.id}`;
        let stateCopy = {...this.state};
        stateCopy[keyString] = true;
        this.setState(stateCopy, () => this.setState(originalState));
    }

    handleResumeClick = (e) => {
        e.preventDefault();
        window.open("./BrunoGarciaGonzalez_resume.pdf", "_blank");
    }

    render() {

        if (this.state.toRoot) {
            return <Redirect to="/" />
        } else if (this.state.toPortfolio) {
            return <Redirect to="/portfolio" />
        } else if (this.state.toContact) {
            return <Redirect to="/contact" />
        } else if (this.state.toAbout) {
            return <Redirect to="/about" />
        }

        return (
                <nav>
                    <div className="nav-wrapper teal">
                    <span id="Root" onClick={this.handleLinkClick} className="brand-logo center">Bruno I. Garcia Gonzalez</span>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="https://www.linkedin.com/in/garcia-gonzalez/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://medium.com/@brunogarciagonzalez" target="_blank" rel="noopener noreferrer">Blog</a></li>
                        <li><a href="https://github.com/brunogarciagonzalez" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li id="Resume" onClick={this.handleResumeClick}><a href="/resume" >Resume</a></li>
                        <li id="Portfolio" onClick={this.handleLinkClick}><a href="/portfolio" >Portfolio</a></li>
                        <li id="Contact" onClick={this.handleLinkClick}><a href="/contact" >Contact</a></li>
                        </ul>
                    </div>
                </nav>    
        );
    }
}

export default Navbar;

{/* <li id="About" onClick={this.handleLinkClick}><a href="/about" >About</a></li> */}
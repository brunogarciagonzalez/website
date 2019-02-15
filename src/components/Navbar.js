import React, { Component } from 'react';
import {Redirect} from "react-router-dom";


const originalState = {
    toRoot: false,
    toPortfolio: false,
    toResume: false,
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
        this.setState(stateCopy, () => this.setState(originalState))
    }

    render() {

        if (this.state.toRoot) {
            return <Redirect to="/" />
        } else if (this.state.toPortfolio) {
            return <Redirect to="/portfolio" />
        } else if (this.state.toResume) {
            return <Redirect to="/resume" />
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
                        <li><a href="https://github.com/brunogarciagonzalez" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/garcia-gonzalez/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://medium.com/@brunogarciagonzalez" target="_blank" rel="noopener noreferrer">Blog</a></li>
                        <li id="Portfolio" onClick={this.handleLinkClick}><a href="/portfolio" >Portfolio</a></li>
                        </ul>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li id="Resume" onClick={this.handleLinkClick}><a href="/resume" >Resume</a></li>
                        <li id="Contact" onClick={this.handleLinkClick}><a href="/contact" >Contact</a></li>
                        <li id="About" onClick={this.handleLinkClick}><a href="/about" >About</a></li>
                        </ul>
                    </div>
                </nav>    
        );
    }
}

export default Navbar;

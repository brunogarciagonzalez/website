import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
                <nav>
                    <div className="nav-wrapper teal">
                        <span className="brand-logo center">Bruno I. Garcia Gonzalez</span>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="https://github.com/brunogarciagonzalez" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/garcia-gonzalez/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://medium.com/@brunogarciagonzalez" target="_blank" rel="noopener noreferrer">Blog</a></li>
                        </ul>
                    </div>
                </nav>    
        );
    }
}

export default Navbar;

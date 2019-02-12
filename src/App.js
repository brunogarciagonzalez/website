import React, { Component } from 'react';
import './App.css';
import { Image } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
  
    <div className="App">
        <nav>
          <div className="nav-wrapper teal">
            <a href="#" className="brand-logo center">Bruno I. Garcia Gonzalez</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
        </nav>


        <div className="row">
          <div className="col s3 m3" />
          <div className="col s6 m6">
            <div className="card">
            <br/><br/>
            <center>
              <Image src='./profile_photo_min.jpg' size='medium' circular style={{"display": "inline-block !important"}}/>
              </center>
              <div className="card-content">
                <p>
                  Full stack web developer with a passion for helping people.  With experience in Ruby on Rails, JavaScript, and React, and with a background in botany, my love for code began when I discovered the welcome challenge it gave me to utilize both logic and creativity. I bring strong skills in team-building and communication that help companies find strength in their diversity by building cohesion and momentum. A first-generation immigrant with love for betterment, I am steadfast against adversity.

                </p>
              </div>
            </div>
          </div>
          <div className="col s3 m3" />
        </div>
        
      </div>
    );
  }
}

export default App;

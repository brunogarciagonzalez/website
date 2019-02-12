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
          <div className="col s4 m4" >
            <br/><br/>
            <center>
              <Image src='./profile_photo_min.jpg' size='medium' circular style={{"display": "inline-block !important"}}/>
            </center>
          </div>
          <div className="col s6 m6">
            <br/><br/>
            <br/><br/>
            <div className="card">
              <div className="card-content">
                <p id="blurb">
                Hello, Person! <br />
                  I am a software developer in the DMV, with proficiency in Ruby on Rails (Full Stack) && JS / ReactJS. I am in the process of adding C# / ASP.NET to my repertoire. I am interested<br />
                Regards, and wishing you peace, <br />
                Bruno
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;

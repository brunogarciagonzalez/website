import React, { Component } from "react";
import { Image } from "semantic-ui-react";

class HeroBlurb extends Component {
  render() {

    if (this.props.size === "x-small") {
      return (
        <div>
          <div className="row">
            <div className="row">
              <div className="col" style={{width:"100%"}}>
                <br />
                <br />
                <br />
                <center><span>
                  <Image
                    src="/profile_photo_min.jpg"
                    size="medium"
                    circular
                    style={{ display: "inline-block !important"}}
                  />
                </span></center>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-content">
                  <p className="blurbStyle">
                    Hello! <br />
                    <br />
                    I am a software developer in the DMV, with proficiency in Ruby
                    on Rails && ReactJS and a passion for backend development.
                    I am interested in contributing to great products, original projects, and noble causes.

                    I am a lifelong student who excels at building workplace cohesion through my strong communication skills and positive energy, and can fit well within various team dynamics.
                     <br />
                    <br />
                    Regards, and wishing you peace, <br />
                    Bruno
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col s4 m4">
            <br />
            <br />
            <br />
            <span id="image">
              <Image
                src="/profile_photo_min.jpg"
                size="medium"
                circular
                style={{ display: "inline-block !important" }}
              />
            </span>
          </div>
          <div className="col s7 m7">
            <br />
            <br />
            <div className="card">
              <div className="card-content">
                <p className="blurbStyle">
                  Hello! <br />
                  <br />
                  I am a software developer in the DMV, with proficiency in Ruby
                  on Rails && ReactJS and a passion for backend development.
                  I am interested in constributing to great products, original projects, and noble causes.

                  I am a lifelong student who excels at building workplace cohesion through my strong communication skills and positive energy, and can fit well within various team dynamics.
                   <br />
                  <br />
                  Regards, and wishing you peace, <br />
                  Bruno
                </p>
              </div>
            </div>
          </div>
          <div className="col s1 m1" />
        </div>
      );
    }

  }
}

export default HeroBlurb;

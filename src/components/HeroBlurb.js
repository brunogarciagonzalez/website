import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import CardText from "./CardText.js";

class HeroBlurb extends Component {
  render() {
    if (this.props.size === "x-small") {
      return (
        <div>
          <div className="row">
            <div className="row">
              <div className="col" style={{ width: "100%" }}>
                <br />
                <br />
                <br />
                <center>
                  <span>
                    <Image
                      src="/profile_photo_min.jpg"
                      size="medium"
                      circular
                      style={{ display: "inline-block !important" }}
                    />
                  </span>
                </center>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-content">
                  <p className="blurbStyle">
                    <CardText />
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
                  <CardText />
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

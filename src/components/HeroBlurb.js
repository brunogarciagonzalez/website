import React, { Component } from "react";
import { Image } from "semantic-ui-react";

class HeroBlurb extends Component {
  render() {
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
                on Rails && ReactJS. Professionally, I am interested in backend
                development; beyond that, I am interested in original projects
                and noble causes. I am also in the process of adding C# /
                ASP.NET to my repertoire. <br />
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

export default HeroBlurb;

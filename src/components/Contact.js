import React, { Component } from 'react';

class Contact extends Component {

    render() {
        return (
            <div className="row">
                <div className="col s3 m3" />
                <div className="col s6 m6" >
                    <br /><br />
                    <br /><br />
                    <center><h3>Thank you for your interest.</h3></center>
                    <br /><br />
                    <p className="contact-body">Below you fill find my contact information.</p>
                    <p className="contact-body">My preferred communication method is email. Due to the prevalence of spam-calls nowadays, I don't tend to answer phone calls from unknown numbers.</p>
                    <p className="contact-body">E-mail: <a href="mailto:brunogarciagonzalez@outlook.com">BrunoGarciaGonzalez@outlook.com</a></p>
                    <p className="contact-body">Phone: <a href="tel:12402818121">+1 (240) 281 - 8121</a></p>
                </div>
                <div className="col s3 m3" />
            </div>
        )
    }
}

export default Contact
import React, { Component } from 'react';
import { Accordion, Message } from 'semantic-ui-react';


class Portfolio extends Component {

    panels = () => {
        let max = 3;
        let panelsArr = []
        for (let i = 0; i < max; i++) {        
            panelsArr.push(
                {
                    key: `panel-${i}`,
                    title: `title number ${i}`,
                    content: { content: <Message>testing</Message>}
                }
            )  
        }
        return panelsArr;
    }

    render() {
        return (
            <div className="row">
                <br /><br />
                <br /><br />
                <div className="col s1 m1" />
                <div className="col s10 m10">
                    <center><h3>Portfolio</h3></center>
                    <br /><br />
                    <Accordion
                        panels={this.panels()}
                    />
                </div>
                <div className="col s1 m1" />
            </div>
        )
    }
}

export default Portfolio

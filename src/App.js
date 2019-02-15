import React, { Component, Fragment } from 'react';
import Feed from "rss-to-json";
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar.js'
import HeroBlurb from './components/HeroBlurb.js'
import BlogList from './components/BlogList.js'
import Portfolio from './components/Portfolio.js'
import Contact from './components/Contact.js'
import About from './components/About.js'
import Resume from './components/Resume.js'


class App extends Component {
  state = {
    blogs: []
    }

  componentDidMount() {
    let proxyUrl = "https://cors-anywhere.herokuapp.com/";
    let targetUrl = "https://medium.com/feed/@brunogarciagonzalez";

    Feed.load(proxyUrl + targetUrl, (err, rss) => {
      this.setState({blogs: rss.items}, () => console.log("state:", this.state))
    })
    
  }

  // catch-all route to redirect to home
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar />
        <Route exact path="/" render={() => (
          <Fragment>
            <HeroBlurb />
            <BlogList blogs={this.state.blogs}/>
          </Fragment>
          ) }
        />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
// import Feed from "rss-to-json";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar.js'
import HeroBlurb from './components/HeroBlurb.js'
import BlogList from './components/BlogList.js'
import Portfolio from './components/Portfolio.js'
import Contact from './components/Contact.js'
// import About from './components/About.js'

const getSize = () => window.innerWidth > 889 ? "regular" : "small"

class App extends Component {
  state = {
    size: getSize(),
    blogs: [],
    blogsLoading: true
    }

  componentDidMount() {
    // let proxyUrl = "https://cors-anywhere.herokuapp.com/";
    // let targetUrl = "https://medium.com/feed/@brunogarciagonzalez";
    // Feed.load(proxyUrl + targetUrl, (err, rss) => {
    //   this.setState({blogs: rss.items, blogsLoading: false})
    // })
    // event listener on window resize
    window.onresize = () => {
      console.log("app size: ", window.innerWidth)
      if (window.innerWidth > 889) {
        this.setState({size: "regular"})

      } else if (window.innerWidth > 618) {
        this.setState({size: "small"})
      } else {
        this.setState({size: "x-small"})
      }

    }

    let blogs = [
      {url: "https://medium.com/@brunogarciagonzalez/brief-intr…ernet-396f7f91df92?source=rss-7ba0947c0034------2",
      title: "TLDR: Architecture of the Internet",
      created: 1551742055000},
      {url: "https://medium.com/@brunogarciagonzalez/reactjs-ev…ation-a295505016f1?source=rss-7ba0947c0034------2",
      title: 'ReactJS Events: “Pooling”, “Nullification”, & event.persist()',
      created: 1550079510000}
    ];

    setTimeout(()=>this.setState({blogs, blogsLoading: false}), 500)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar size={this.state.size}/>
        <Switch>
          <Route exact path="/" render={() => (
            <Fragment>
              <HeroBlurb />
              <BlogList blogs={this.state.blogs} loading={this.state.blogsLoading}/>
            </Fragment>
            ) }
          />
          <Route exact path="/portfolio" component={() => (<Portfolio size={this.state.size}/>)} />
          <Route exact path="/contact" component={() => (<Contact size={this.state.size}/>)} />
          <Route path="/*" component={() => (<Redirect to="/" />)} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// <Route exact path="/about" component={About} />

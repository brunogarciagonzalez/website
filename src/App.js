import React, { Component } from 'react';
import Feed from "rss-to-json";
import './App.css';
import Navbar from './components/Navbar.js'
import HeroBlurb from './components/HeroBlurb.js'
import BlogList from './components/BlogList.js'


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

  render() {
    return (
      <div className="App">
        <Navbar />
        <HeroBlurb />
        <BlogList blogs={this.state.blogs}/>
      </div>
    );
  }
}

export default App;

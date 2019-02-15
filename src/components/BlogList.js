import React, { Component } from 'react';
import Blog from "./Blog.js";

class BlogList extends Component {

    buildDate = (milliseconds) => {
        return new Date(milliseconds).toLocaleDateString();
    }

    render() {
        return (
            <div className="row">
                <div className="col s1 m1" />
                <div className="col s10 m10">
                    <h3 id="selectedBlogs">Selected Blog Posts</h3>
                    <br /> <br />
                    <div className="row">
                        {this.props.loading ?
                            <div class="ui active centered inline loader"></div>
                            :
                            <React.Fragment>

                            <div className="col s1 m1" />
                            <div className="col s10 m10">
                                <div className="ui cards">
                                    {this.props.blogs.map(blog => {
                                        return <Blog key={blog.title} title={blog.title} date={this.buildDate(blog.created)} url={blog.url} />
                                    })}
                                </div>
                            </div>
                             <div className="col s1 m1" />
                        </React.Fragment>
                            
                    
                    }
                    
                    </div>

                </div>
                <div className="col s2 m2" />
            </div>
        )
    }
}

export default BlogList

    // < div className = "row" >
    //     <div className="col s1 m1" />
    //     <div className="col s10 m10">
    //         <h3 className="blurbStyle">Selected Blogs</h3>
    //         <div className="ui cards">
    //             {this.props.blogs.map(blog => {
    //                 return <Blog title={blog.title} date={this.buildDate(blog.created)} url={blog.url} />
    //             })}
    //         </div>
    //     </div>
    //     <div className="col s2 m2" />
    //         </div >
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{306:function(e,t,a){e.exports=a(652)},311:function(e,t,a){},324:function(e,t){},326:function(e,t){},370:function(e,t){},371:function(e,t){},440:function(e,t){},531:function(e,t,a){},652:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(70),o=a.n(l),c=(a(311),a(30)),i=a(31),m=a(33),s=a(32),u=a(34),d=a(283),h=a.n(d),p=a(659),b=a(661),E=a(660),g=a(658),f=(a(531),a(294)),w={toRoot:!1,toPortfolio:!1,toContact:!1,toAbout:!1},y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state=w,a.handleLinkClick=function(e){e.preventDefault();var t="to".concat(e.currentTarget.id),n=Object(f.a)({},a.state);n[t]=!0,a.setState(n,function(){return a.setState(w)})},a.handleResumeClick=function(e){e.preventDefault(),window.open("brunogarciagonzalez.github.io/website/BrunoGarciaGonzalez_resume.pdf","_blank")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.toRoot?r.a.createElement(g.a,{to:"/"}):this.state.toPortfolio?r.a.createElement(g.a,{to:"/portfolio"}):this.state.toContact?r.a.createElement(g.a,{to:"/contact"}):this.state.toAbout?r.a.createElement(g.a,{to:"/about"}):r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper teal"},r.a.createElement("span",{id:"Root",onClick:this.handleLinkClick,className:"brand-logo center"},"Bruno I. Garcia Gonzalez"),r.a.createElement("ul",{id:"nav-mobile",className:"left hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/garcia-gonzalez/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://medium.com/@brunogarciagonzalez",target:"_blank",rel:"noopener noreferrer"},"Blog")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/brunogarciagonzalez",target:"_blank",rel:"noopener noreferrer"},"GitHub"))),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",{id:"Resume",onClick:this.handleResumeClick},r.a.createElement("a",{href:"/resume"},"Resume")),r.a.createElement("li",{id:"Portfolio",onClick:this.handleLinkClick},r.a.createElement("a",{href:"/portfolio"},"Portfolio")),r.a.createElement("li",{id:"Contact",onClick:this.handleLinkClick},r.a.createElement("a",{href:"/contact"},"Contact")))))}}]),t}(n.Component),v=a(655),k=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s4 m4"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{id:"image"},r.a.createElement(v.a,{src:"brunogarciagonzalez.github.io/website/profile_photo_min.jpg",size:"medium",circular:!0,style:{display:"inline-block !important"}}))),r.a.createElement("div",{className:"col s7 m7"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"blurbStyle"},"Hello! ",r.a.createElement("br",null),r.a.createElement("br",null),"I am a software developer in the DMV, with proficiency in Ruby on Rails && ReactJS. Professionally, I am interested in backend development; beyond that, I am interested in original projects and noble causes. I am also in the process of adding C# / ASP.NET to my repertoire.  ",r.a.createElement("br",null),r.a.createElement("br",null),"Regards, and wishing you peace, ",r.a.createElement("br",null),"Bruno")))),r.a.createElement("div",{className:"col s1 m1"}))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).openInNewTab=function(){window.open(a.props.url,"_blank").focus()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui card tarjeta",onClick:this.openInNewTab},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},this.props.title),r.a.createElement("div",{className:"meta"},this.props.date),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{alt:"paragraph wireframe",className:"ui wireframe image",src:"brunogarciagonzalez.github.io/website/favicon.ico"}),r.a.createElement("p",null)))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).buildDate=function(e){return new Date(e).toLocaleDateString()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s1 m1"}),r.a.createElement("div",{className:"col s10 m10"},r.a.createElement("h3",{id:"selectedBlogs"},"Selected Blog Posts"),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("div",{className:"row"},this.props.loading?r.a.createElement("div",{class:"ui active centered inline loader"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col s1 m1"}),r.a.createElement("div",{className:"col s10 m10"},r.a.createElement("div",{className:"ui cards"},this.props.blogs.map(function(t){return r.a.createElement(j,{key:t.title,title:t.title,date:e.buildDate(t.created),url:t.url})}))),r.a.createElement("div",{className:"col s1 m1"})))),r.a.createElement("div",{className:"col s2 m2"}))}}]),t}(n.Component),O=a(657),z=a(656),C=[{title:"LinkShare",hasDemo:!0,demo:"https://www.youtube.com/embed/5IODtglMM_0",image:"",description:r.a.createElement("div",null,r.a.createElement("p",null,"This 3-week project is powered by a Ruby on Rails (API), ReactJS, and Semantic UI."),r.a.createElement("p",null,"The concept-board for this project includes three things:"),r.a.createElement("ol",null,r.a.createElement("li",null,"The now-gone Yahoo! Directory,"),r.a.createElement("li",null,"The frontpage of the internet: Reddit, and"),r.a.createElement("li",null,"Amazon and Steam product reviews and review management logic")),r.a.createElement("p",null,"These three concepts are fused to produce a directory of the internet, with admin-curated sub-directories (i.e. \u2018tags\u2019) that are filled with links via user-generated content. These links are each shared through the construction of reviews that have qualitative and quantitative aspects (written content and numerical rating, respectively)."),r.a.createElement("p",null,"In the end, it is an attempt at \u2018community-based internet exploration\u2019, a term I came up with to differentiate this idea from crawler-based search engines as a means to navigate the internet. It is very similar to the original attempts at indexing the world wide web, with many additional features centered around user-generated content and extending the user experience beyond anchor tags."),r.a.createElement("p",{style:{textAlign:"center"}},"[ ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/brunogarciagonzalez/linkshare-backend"},"Project Back End Code")," // ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/brunogarciagonzalez/linkshare-frontend"},"Project Front End Code")," ]"))},{title:"WeatherScript",hasDemo:!0,demo:"https://www.youtube.com/embed/JaiPIwGPMKY",image:"",description:r.a.createElement("div",null,r.a.createElement("p",null,"This 1-week project is powered by Ruby on Rails (API), ReactJS, and Semantic UI. This was a partner-project with ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/ryan-youngdale-508562112/"},"Ryan Youngdale")," as we were learning ReactJS."),r.a.createElement("p",null,"The concept-board for this project includes one thing:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Apple iPhone's built-in weather application")),r.a.createElement("p",null,"A weather application that utilizes the ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.metaweather.com/api/"},"MetaWeather API"),' to showcase 5-day forecasts. API calls to MetaWeather are done through a Rails API application, and memoization is employed therein to minimize calls to MetaWeather. A simple (non-secure) login system is employed to allow users to manage favorite cities, allowing the addition and removal of cities from "My Cities". Finally, the Zomato API was utilized to give users some extra information: best restaurants in the city whose weather is being looked at.'),r.a.createElement("p",{style:{textAlign:"center"}},"[ ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/brunogarciagonzalez/weatherScript"},"Project Code")," ]"))},{title:"CryptoHome",hasDemo:!1,demo:"",image:"https://raw.githubusercontent.com/brunogarciagonzalez/crypto-home-frontend/master/images/1.png",description:r.a.createElement("div",null,r.a.createElement("p",null,"This 1-week project is powered by Ruby on Rails (API) and vanilla JS. This was a partner-project with ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/jerry-w-lee/"},"Jerry Lee")," as we were learning JS fundamentals."),r.a.createElement("p",null,"A single-page application that utilizes the ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://min-api.cryptocompare.com/"},"CryptoCompare API")," and PlotlyJS to showcase charted price histories of Bitcoin, Ethereum, and Ripple. The CryptoCompare API is leveraged once more to show live trade prices for the three aforementioned crypto currencies, by employing SocketsIO. ActionCable (Web Sockets) are employed to allow for a real-time chat between users. A simple (non-secure) login system is employed to allow users to take part in the chat feature."),r.a.createElement("p",{style:{textAlign:"center"}},"[ ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/brunogarciagonzalez/crypto-home"},"Project Back End Code")," // ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/brunogarciagonzalez/crypto-home-frontend"},"Project Front End Code")," ]"))}],A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).panels=function(){return C.map(function(e,t){return{key:"panel-".concat(t),title:{content:r.a.createElement("span",{className:"blurbStyle"},e.title)},content:{content:r.a.createElement(O.a,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,e.hasDemo?r.a.createElement("iframe",{title:e.title,width:"560",height:"315",src:e.demo,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):r.a.createElement("img",{width:"560",src:e.image,alt:"".concat(e.title," homepage")})),r.a.createElement("br",null),r.a.createElement("br",null),e.description,r.a.createElement("br",null),r.a.createElement("br",null))}}})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"col s1 m1"}),r.a.createElement("div",{className:"col s10 m10"},r.a.createElement("center",null,r.a.createElement("h3",null,"Portfolio")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(z.a,{panels:this.panels()})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"col s1 m1"}))}}]),t}(n.Component),I=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s3 m3"}),r.a.createElement("div",{className:"col s6 m6"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("h3",null,"Thank you for your interest.")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"contact-body"},"Below you fill find my contact information."),r.a.createElement("p",{className:"contact-body"},"My preferred communication method is email. Due to the prevalence of spam-calls nowadays, I don't tend to answer phone calls from unknown numbers."),r.a.createElement("p",{className:"contact-body"},"E-mail: ",r.a.createElement("a",{href:"mailto:brunogarciagonzalez@outlook.com"},"BrunoGarciaGonzalez@outlook.com")),r.a.createElement("p",{className:"contact-body"},"Phone: ",r.a.createElement("a",{href:"tel:12402818121"},"+1 (240) 281 - 8121"))),r.a.createElement("div",{className:"col s3 m3"}))}}]),t}(n.Component),P=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s3 m3"}),r.a.createElement("div",{className:"col s6 m6"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"USA Flag"},"\ud83c\uddfa\ud83c\uddf8")," ",r.a.createElement("span",{role:"img","aria-label":"Uruguay Flag"},"\ud83c\uddfa\ud83c\uddfe"))),r.a.createElement("p",null,"Testing...")),r.a.createElement("div",{className:"col s3 m3"}))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={blogs:[],blogsLoading:!0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.load("https://cors-anywhere.herokuapp.com/https://medium.com/feed/@brunogarciagonzalez",function(t,a){e.setState({blogs:a.items,blogsLoading:!1})})}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(b.a,null,r.a.createElement(E.a,{exact:!0,path:"/",render:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(k,null),r.a.createElement(N,{blogs:e.state.blogs,loading:e.state.blogsLoading}))}}),r.a.createElement(E.a,{exact:!0,path:"/portfolio",component:A}),r.a.createElement(E.a,{exact:!0,path:"/contact",component:I}),r.a.createElement(E.a,{exact:!0,path:"/about",component:P}),r.a.createElement(E.a,{path:"/*",component:function(){return r.a.createElement(g.a,{to:"/"})}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[306,1,2]]]);
//# sourceMappingURL=main.76131daa.chunk.js.map
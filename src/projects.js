import React from "react";

export default [
    {
      title: "NewsChat",
      hasDemo: false,
      hasImage: true,
      demo: "",
      image: "https://raw.githubusercontent.com/brunogarciagonzalez/news-chat-react/master/article-page.png",
      description: (
        <div>
          <p>
            This is a platform for people to chat (real-time) about articles at the top of the news cycle.
          </p>
          <p>
            Technologies:
            <ol>
              <li>
                ReactJS frontend application (with hooks and redux)
              </li>
              <li>
                Rails API backend application (PostgreSQL as the RDBMS, ActionCable for WebSockets)
              </li>
              <li>
                Leveraged NewsAPI.org for top news headlines
              </li>
              <li>
                Leveraged BCrypt hashing algorithm for user data security, and JWT for Token Auth
              </li>
            </ol>
          </p>          
          <p style={{ textAlign: "center" }}>
            [{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/brunogarciagonzalez/news-chat-rails-api"
            >
              Project Back End Code
            </a>
            {" // "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/brunogarciagonzalez/news-chat-react"
            >
              Project Front End Code
            </a>{" "}
            ]
          </p>
        </div>
      )
    },
    {
      title: "BookSwap",
      hasDemo: false,
      hasImage: false,
      demo: "",
      image: "",
      description: (
        <div>
          <p>
            This work-in-progress is an application for swapping textbooks and technical books.
          </p>
          <p>
            The frontend of this project is powered by ReactJS + Redux (with redux-thunk); the backend of this project is powered by Ruby on Rails (as an API) and PostgreSQL.
          </p>
          <p style={{ textAlign: "center" }}>
            [{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/brunogarciagonzalez/bookswap-rails"
            >
              Project Back End Code
            </a>
            {" // "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/brunogarciagonzalez/bookswap-react"
            >
              Project Front End Code
            </a>{" "}
            ]
          </p>
          <p>
            Technologies this project currently includes:
            <ol>
                <li>OpenLibrary API for querying book information</li>
                <li>BCrypt hashing algorithm for user password hashing (plain-text passwords not stored)</li>
                <li>JWT & localStorage for authentication + authorization</li>
            </ol>
          </p>
          <p>Technologies in the near-term roadmap:</p>
          <ol>
            <li>WebSockets live-chat, powered by Redis and ActionCable</li>
            <li>Deployment via Heroku</li>
            <li>Image upload to a separate AWS S3 instance</li>
            <li>Responsive CSS, mainly via Material UI</li>
          </ol>
        </div>
      )
    },
    {
    title: "WMATA Train Explorer",
    hasDemo: false,
    hasImage: true,
    demo: "",
    image:
      "https://raw.githubusercontent.com/brunogarciagonzalez/wmataExplorer/master/preview.png",
    description: (
      <div>
        <p>
          This project is powered by ReactJS and Semantic UI. It was completed
          over a few hours, as part of a company's interview process.
        </p>
        <p>
          It makes use of the WMATA API (and its default API Key), in order to showcase some ReactJS skills.
        </p>
        <p style={{ textAlign: "center" }}>
          [{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wmata-explorer.netlify.com/"
          >
            Live Webpage
          </a>
          {" // "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/brunogarciagonzalez/wmataExplorer"
          >
            Project Code
          </a>{" "}
          ]
        </p>
      </div>
    )
  },
    {
    title: "Monday Home Improvement, LLC.",
    hasDemo: false,
    hasImage: true,
    demo: "",
    image:
      "https://raw.githubusercontent.com/brunogarciagonzalez/monday-home-improvement/master/preview.png",
    description: (
      <div>
        <p>
          This project is powered by ReactJS and Semantic UI. It was completed
          over a few weekends, and is the website for my father's business.
        </p>
        <p>
          It was a great experience to build out his (and my mother's) ideas --
          a sort of simulation of what being a freelancer could be.
        </p>
        <p>The concept board for the project included:</p>
        <ol>
          <li>Friendly (intuitive) to older folk</li>
          <li>A modern look, with moving components</li>
        </ol>
        <p style={{ textAlign: "center" }}>
          [{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mondayhome.us"
          >
            Live Webpage
          </a>
          {" // "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/brunogarciagonzalez/monday-home-improvement"
          >
            Project Code
          </a>{" "}
          ]
        </p>
      </div>
    )
  },
  {
    title: "LinkShare",
    hasDemo: true,
    hasImage: false,
    demo: "https://www.youtube.com/embed/5IODtglMM_0",
    image: "",
    description: (
      <div>
        <p>
          This 3-week project is powered by Ruby on Rails (API), ReactJS, and
          Semantic UI.
        </p>
        <p>The concept-board for this project includes three things:</p>
        <ol>
          <li>The now-gone Yahoo! Directory,</li>
          <li>The frontpage of the internet: Reddit, and</li>
          <li>Amazon and Steam product reviews and review management logic</li>
        </ol>
        <p>
          These three concepts are fused to produce a directory of the internet,
          with admin-curated sub-directories (i.e. ‘tags’) that are filled with
          links via user-generated content. These links are each shared through
          the construction of reviews that have qualitative and quantitative
          aspects (written content and numerical rating, respectively).
        </p>
        <p>
          In the end, it is an attempt at ‘community-based internet
          exploration’, a term I came up with to differentiate this idea from
          crawler-based search engines as a means to navigate the internet. It
          is very similar to the original attempts at indexing the world wide
          web, with many additional features centered around user-generated
          content and extending the user experience beyond anchor tags.
        </p>
        <p style={{ textAlign: "center" }}>
          [{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/brunogarciagonzalez/linkshare-backend"
          >
            Project Back End Code
          </a>
          {" // "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/brunogarciagonzalez/linkshare-frontend"
          >
            Project Front End Code
          </a>{" "}
          ]
        </p>
      </div>
    )
  },
  {
    title: "WeatherScript",
    hasDemo: true,
    hasImage: false,
    demo: "https://www.youtube.com/embed/JaiPIwGPMKY",
    image: "",
    description: (
      <div>
        <p>
          This 1-week project is powered by Ruby on Rails (API), ReactJS, and
          Semantic UI. This was a partner-project with{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ryan-youngdale-508562112/"
          >
            Ryan Youngdale
          </a>{" "}
          as we were learning ReactJS.
        </p>
        <p>The concept-board for this project includes one thing:</p>
        <ol>
          <li>Apple iPhone's built-in weather application</li>
        </ol>
        <p>
          A weather application that utilizes the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.metaweather.com/api/"
          >
            MetaWeather API
          </a>{" "}
          to showcase 5-day forecasts. API calls to MetaWeather are done through
          a Rails API application, and memoization is employed therein to
          minimize calls to MetaWeather. A simple (non-secure) login system is
          employed to allow users to manage favorite cities, allowing the
          addition and removal of cities from "My Cities". Finally, the Zomato
          API was utilized to give users some extra information: best
          restaurants in the city whose weather is being looked at.
        </p>
        <p style={{ textAlign: "center" }}>
          [{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/brunogarciagonzalez/weatherScript"
          >
            Project Code
          </a>{" "}
          ]
        </p>
      </div>
    )
  },
  {
    title: "CryptoHome",
    hasDemo: false,
    hasImage: true,
    demo: "",
    image:
      "https://raw.githubusercontent.com/brunogarciagonzalez/crypto-home-frontend/master/images/1.png",
    description: (
      <div>
        <p>
          This 1-week project is powered by Ruby on Rails (API) and vanilla JS.
          This was a partner-project with{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jerry-w-lee/"
          >
            Jerry Lee
          </a>{" "}
          as we were learning JS fundamentals.
        </p>
        <p>
          A single-page application that utilizes the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://min-api.cryptocompare.com/"
          >
            CryptoCompare API
          </a>{" "}
          and PlotlyJS to showcase charted price histories of Bitcoin, Ethereum,
          and Ripple. The CryptoCompare API is leveraged once more to show live
          trade prices for the three aforementioned crypto currencies, by
          employing SocketsIO. ActionCable (Web Sockets) are employed to allow
          for a real-time chat between users. A simple (non-secure) login system
          is employed to allow users to take part in the chat feature.
        </p>
        <p style={{ textAlign: "center" }}>
          [{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/brunogarciagonzalez/crypto-home"
          >
            Project Back End Code
          </a>
          {" // "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/brunogarciagonzalez/crypto-home-frontend"
          >
            Project Front End Code
          </a>{" "}
          ]
        </p>
      </div>
    )
  }
];

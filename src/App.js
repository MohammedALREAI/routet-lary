import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";
import createBrowserHistory from "history/createBrowserHistory";
import asyncComponent from "./AsyncComponent";
import { NotFound } from "./component";

const Home = asyncComponent(() =>
  import("./component/Home").then(module => module.default)
);

const Maps = asyncComponent(() =>
  import("./component/Maps").then(module => module.default)
);

const Blog = asyncComponent(() =>
  import("./component/Blog").then(module => module.default)
);

const history = createBrowserHistory();

const App = () => {

  return (
    <Router history={history}>
      <div>
<header className="header">
      <nav className="navbar container">
        <div className="navbar-brand">
          <Link to="/">
            <span className="navbar-item">Lazy Loading Routes</span>
          </Link>
        </div>

        <div className="navbar-end">
          <Link to="/maps">
            <span className="navbar-item">Maps</span>
          </Link>
          <Link to="/blog">
            <span className="navbar-item">Blog</span>
          </Link>
        </div>
      </nav>
    </header>
 <section className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/maps" component={Maps} />
        <Route path="/blog" component={Blog} />
        <Route path="*" component={NotFound} />
      </Switch>
    </section>      </div>
    </Router>
  );
};

export default App;

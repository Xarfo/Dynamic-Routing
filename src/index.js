import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Users from "./users";
import Friends from "./Friends";
import SingleFriend from "./SingleFriend";
import NoMatch from "./NoMatch";
import Home from "./Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: Users
    };
  }

  someMethod = () => alert("hello");

  render() {
    return (
      <div className="App">
        {/* Mount Home when '/' is requested.*/}
        <Link to="/">Home</Link>
        <hr />
        <Link to="/friends">Friends</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/friends"
            render={props => (
              <Friends
                {...props}
                users={this.state.users}
                passHello={this.someMethod}
              />
            )}
          />
          <Route path="/friends/:userId" component={SingleFriend} />
          <Route component={NoMatch} />
        </Switch>
        {/* Mount Friends when '/friends' is requested.*/}
        {/* What component do I want mounted, when a `/friends` path is requested? */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);

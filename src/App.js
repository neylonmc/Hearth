import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "rsuite";

import Select from "./pages/Select/Select";
import Dashboard from "./pages/Dashboard/Dashboard";
import Browse from "./pages/Browse-Topics/Browse";
import NewPost from "./pages/NewPost/NewPost";
import Profile from "./pages/Profile-Topic/Profile";
import Topic from "./pages/Profile-Topic/Topic";
import Settings from "./pages/Settings/Settings";
import NoMatch from "./pages/NoMatch/NoMatch";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout/Logout";
import About from "./pages/About/About";

import Nav from "./components/Nav/Nav";
import SignUpForm from "./components/SignUpForm/SignUpForm";

import "rsuite/dist/styles/rsuite-default.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then((response) => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null,
        });
      }
    });
  }

  render() {
    const NavRoutes = () => {
      return (
        <div className="app">
          <Nav />
          <Container>
            <Switch>
              <Route exact path={["/", "/login"]} component={Login} />
              <Route exact path="/logout" component={Logout} />
              {/* <Route exact path="/signup" render={() => <SignUpForm />} /> */}
              <Route exact path="/select" component={Select} />
              <Route path="/topics" component={Browse} />
              <Route path="/post" component={NewPost} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/topic/:topic" component={Topic} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/about" component={About} />
              <Route path="*" component={NoMatch} />
            </Switch>
          </Container>
        </div>
      );
    };

    return (
      <Router>
        <div className="app">
          <Container>
            <Switch>
              <Route exact path="/logout" component={Logout} />
              <Route exact path={["/", "/login"]} component={Login} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/select" component={Select} />
              <Route component={NavRoutes} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;

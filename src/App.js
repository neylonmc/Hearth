import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "rsuite";
import Home from "./pages/Home/Home";
import Select from "./pages/Select/Select";
import Dashboard from "./pages/Dashboard/Dashboard";
import Browse from "./pages/Browse-Topics/Browse";
import NewPost from "./pages/NewPost/NewPost";
import Nav from "./components/Nav/Nav";
import Profile from "./pages/Profile-Topic/Profile";
import Topic from "./pages/Profile-Topic/Topic";
import Settings from "./pages/Settings/Settings";
import NoMatch from "./pages/NoMatch/NoMatch";
import Login from "./pages/Login/Login";
import About from "./pages/About/About"
import "rsuite/dist/styles/rsuite-default.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Container>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/select" component={Select}/>
            <Route path="/topics" component={Browse} /> 
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/post" component={NewPost} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/topic/:topic" component={Topic} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/about" component={About} />
            <Route path="*"  component={NoMatch} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;

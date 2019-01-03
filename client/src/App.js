import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Add from "./pages/Add";
import Houses from "./pages/Houses";




const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/houses" component={Houses} />


      </Switch>
    </div>
  </Router>
);

export default App;



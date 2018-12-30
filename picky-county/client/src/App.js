import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Feed from "./pages/Feed";



const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/feed" component={Feed} />


      </Switch>
    </div>
  </Router>
);

export default App;



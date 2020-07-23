import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./sidebar/Sidebar";
import Apropos from "./Apropos";
import Creation from "./Creation";

import Formations from "./Formations";
import Contact from "./Contact";

export default function MyRouter() {
  return (
    <div className="d-flex">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Apropos} />
          <Route path="/creations" component={Creation} />
          <Route path="/formations" component={Formations} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

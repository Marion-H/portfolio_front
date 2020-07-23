import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Col, Row } from "reactstrap";

import Sidebar from "./sidebar/Sidebar";
import Apropos from "./Apropos";
import Creation from "./Creation";

import styles from "./sidebar/sidebar.module.css";
import Formations from "./Formations";
import Contact from "./Contact";

export default function MyRouter() {
  return (
    <div>
      <Router>
        <Row>
          <Col sm="2">
            <Sidebar />
          </Col>

          <Switch>
            <Route path="/apropos" component={Apropos} />
            <Route path="/creations" component={Creation} />
            <Route path="/formations" component={Formations} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Row>
      </Router>
    </div>
  );
}

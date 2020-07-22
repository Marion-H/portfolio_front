import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Col, Row } from "reactstrap";

import Sidebar from "./sidebar/Sidebar";
import Apropos from "./Apropos";

import styles from "./sidebar/sidebar.module.css";

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
          </Switch>
        </Row>
      </Router>
    </div>
  );
}

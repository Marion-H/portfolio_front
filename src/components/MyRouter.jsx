import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

import styles from "./sidebar/sidebar.module.css";
import { Col, Row } from "reactstrap";

export default function MyRouter() {
  return (
    <div>
      <Router>
        <Row>
          <Col sm="2">
            <Sidebar />
          </Col>
        </Row>
      </Router>
    </div>
  );
}

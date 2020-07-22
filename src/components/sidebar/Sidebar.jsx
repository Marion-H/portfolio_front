import React from "react";
import { Navbar, Nav, NavItem, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

import styles from "./sidebar.module.css"
import logo from "./avatar-placeholder.gif";

const items = [
  { name: "A propos", path: "/apropos" },
  { name: "Créations", path: "/creations" },
  { name: "Formations", path: "/formations" },
  { name: "Contact", path: "/contact" },
];

export default function Sidebar() {
  return (
    
    <Navbar center className={`${styles.navbar} fixed-top`}>
      <Nav vertical>
        <Row>
          <Col>
            <img
              src={logo}
              alt="Marion Hourdou"
              width="100vw"
              className="rounded-circle"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Marion HOURDOU</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Web Developpeuse</h4>
          </Col>
        </Row>
          <hr />
        {items.map((item, i) => (
          <>
            <NavItem className={styles.link}>
              <NavLink to={item.path} key={i}>
                {item.name}
              </NavLink>
            </NavItem>
          </>
        ))}
      </Nav>
    </Navbar>
  );
}

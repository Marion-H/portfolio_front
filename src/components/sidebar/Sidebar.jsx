import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavItem, Row, Col, Spinner } from "reactstrap";
import { NavLink } from "react-router-dom";

import styles from "./sidebar.module.css";
import logo from "./avatar-placeholder.gif";
import Axios from "axios";

const items = [
  { name: "A propos", path: "/apropos" },
  { name: "Créations", path: "/creations" },
  { name: "Formations", path: "/formations" },
  { name: "Contact", path: "/contact" },
];

export default function Sidebar() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getContact = async () => {
    try {
      const res = await Axios.get("http://localhost:4000/contacts");
      setContacts(res.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    getContact();
  }, []);

  if (isLoading) {
    return <Spinner color="primary" />;
  }
  if (error) {
    return <div>{error}</div>;
  }

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
        <Row>
          {contacts.map((contact) => (
            <Col>
              <a href={contact.link}>
                <img src={contact.logo} alt={contact.name} width="30%" target="_blank"/>
              </a>
            </Col>
          ))}
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

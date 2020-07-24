import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavItem, Row, Col, Spinner, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";

import styles from "./sidebar.module.css";
import logo from "./avatar-placeholder.gif";
import Axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";

const items = [
  { name: "A propos", path: "/" },
  { name: "Créations", path: "/creations" },
  { name: "Formations", path: "/formations" },
  { name: "Contact", path: "/contact" },
];

export default function Sidebar() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
    <header className={styles.header}>
      <Navbar className={`${styles.navbar}`}>
        <Nav vertical className={`${styles.navVertical}`}>
          <img
            src={logo}
            alt="Marion Hourdou"
            width="100vw"
            className="rounded-circle"
          />
          <h2>Marion HOURDOU</h2>
          <h4>Web Developpeuse</h4>

          <Row className="">
            {contacts.map((contact, key) => (
              <Col key={key} lg="2" style={{ margin: "auto" }}>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={contact.logo}
                    alt={contact.name}
                    width="30vw"
                    target="_blank"
                  />
                </a>
              </Col>
            ))}
          </Row>

          <hr className={styles.hr} />

          {items.map((item, i) => (
            <NavItem key={i}>
              <NavLink className={styles.link} to={item.path}>
                {item.name}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Navbar>
    </header>
  );
}

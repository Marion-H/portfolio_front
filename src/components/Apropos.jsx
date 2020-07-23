import React, { useState, useEffect } from "react";
import {Row, Col, Spinner, Container } from "reactstrap";
import Axios from "axios";


import styles from "./css/apropos.module.css"

export default function Apropos() {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getSkills = async () => {
    try {
      const res = await Axios.get("http://localhost:4000/skills");
      setSkills(res.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    getSkills();
  }, []);

  if (isLoading) {
    return <Spinner color="primary" />;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <Container>
      <Row className={styles.rowDescription}>
        <Col lg="4">
          <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" alt="logo" className="rounded-circle" width="100%" height="100%" />
        </Col>
        <Col lg="6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
          aperiam facilis consectetur distinctio officia voluptas officiis harum
          debitis unde repellendus ratione quidem magni sequi, eligendi nostrum
          minus exercitationem sit illo?
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        {skills.map((skill, i) => (
          <Col key={i} >
            <img src={skill.logo} alt={skill.name} width="100vw" />
            <p>{skill.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

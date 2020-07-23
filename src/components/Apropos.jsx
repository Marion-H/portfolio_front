import React, { useState, useEffect } from "react";
import {Row, Col, Spinner } from "reactstrap";
import Axios from "axios";

import logo from "./sidebar/avatar-placeholder.gif";
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
    <Col lg={{ size: "10" }} sm={{ size: "9" }} xs={{ size: "7" }}>
      <Row className={styles.rowDescription}>
        <Col lg="4">
          <img src={logo} alt="logo" className="rounded-circle" width="100vh" />
        </Col>
        <Col lg="7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
          aperiam facilis consectetur distinctio officia voluptas officiis harum
          debitis unde repellendus ratione quidem magni sequi, eligendi nostrum
          minus exercitationem sit illo?
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        {skills.map((skill, i) => (
          <Col key={i} lg={{ size: "3" }} sm={{ size: "3" }} >
            <img src={skill.logo} alt={skill.name} width="100vw" />
            <p>{skill.description}</p>
          </Col>
        ))}
      </Row>
    </Col>
  );
}

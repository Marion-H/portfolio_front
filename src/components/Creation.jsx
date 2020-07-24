import React, { useState, useEffect } from "react";
import { Row, Col, Spinner, Container } from "reactstrap";
import Axios from "axios";
import ReactHtmlParser from "react-html-parser";
import Slide from "react-reveal/Slide";

import styles from "./css/creation.module.css";

export default function Creation() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getProjects = async () => {
    try {
      const res = await Axios.get("http://localhost:4000/projects");
      setProjects(res.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);

  if (isLoading) {
    return <Spinner color="primary" />;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <Container className={styles.container}>
      <Slide right cascade>
        <div>
          {projects.map((project) => (
            <Row className="d-flex align-items-center">
              <Col lg="6" xs="12">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>{project.title}</h2>
                </a>
                <Row>
                  <Col>{ReactHtmlParser(project.description)}</Col>
                </Row>
              </Col>
              <Col lg="6" xs="12">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={project.image} alt={project.title} width="100%" />
                </a>
              </Col>
            </Row>
          ))}
        </div>
      </Slide>
    </Container>
  );
}

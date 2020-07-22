import React, { useState, useEffect } from "react";
import { Row, Col, Spinner } from "reactstrap";
import Axios from "axios";

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
    <Col>
      {projects.map((project) => (
        <Row>
          <Col>
            {project.description}
            <Row>
              <Col>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  lien
                </a>
              </Col>
            </Row>
          </Col>
          <Col>
            <img src={project.image} alt={project.title} />
          </Col>
        </Row>
      ))}
    </Col>
  );
}

import React, { useState, useEffect } from "react";
import { Row, Col, Spinner } from "reactstrap";
import Axios from "axios";
import ReactHtmlParser from "react-html-parser";

const descriptions = [
  {
    text: ``,
  },
  {
    text: `<p>Projet de groupe Front-end et Back-end</p>
    <p>
      - Création d'une application pour la gestion de données entre
      patients et médecins
    </p>
    <p>
      - Création d'une API pour stocker les données (NodeJs,
      Express, Sequelize, mysql)
    </p>
    <p>
      - Front-end : React , Reacstrap - Envoie, récupération et
      modification de données via une API (Axios) 
    </p>
    <p>- Gestion de projet : Git, Github</p>`,
  },
];

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
            {project.title}
            <Row>
              <Col>{ReactHtmlParser(project.description)}</Col>
            </Row>
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
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} width="100%" />
            </a>
          </Col>
        </Row>
      ))}
    </Col>
  );
}

import React, { useState, useEffect } from "react";
import { Spinner, Col, Row, Container } from "reactstrap";
import Axios from "axios";
import ReactHtmlParser from "react-html-parser";
import Slide from "react-reveal/Slide";

import styles from "./css/creation.module.css";

export default function Formations() {
  const [formations, setFormations] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getFormations = async () => {
    try {
      const res = await Axios.get("http://localhost:4000/formations");
      setFormations(res.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    getFormations();
  }, []);

  if (isLoading) {
    return <Spinner color="primary" />;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <Container className={styles.container}>
      <Row className="d-flex justify-content-center">
        <Slide right cascade>
          <div>
            {formations.map((formation, i) => (
              <Col lg="12" style={{ "text-align": "center" }}>
                <h2 style={{ color: "#e7717d", "font-weight": "700" }}>
                  {formation.diploma}{" "}
                  <span style={{ color: "#afd275" }}>{formation.year}</span>
                </h2>

                <h4>{formation.school}</h4>
                <p>{ReactHtmlParser(formation.description)}</p>
              </Col>
            ))}
          </div>
        </Slide>
      </Row>
    </Container>
  );
}

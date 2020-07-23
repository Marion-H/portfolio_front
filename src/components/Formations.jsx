import React, { useState, useEffect } from "react";
import { Spinner, Col, Row } from "reactstrap";
import Axios from "axios";
import ReactHtmlParser from "react-html-parser"

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
    <Col>
      {formations.map((formation) => (
        <Row>
          <Col>
            <p>{formation.diploma}</p>
            <p>{formation.year}</p>
      <p>{formation.school}</p>
      {ReactHtmlParser(formation.description)}
          </Col>
        </Row>
      ))}
    </Col>
  );
}

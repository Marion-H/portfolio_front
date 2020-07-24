import React, { useState, useEffect } from "react";
import {
  Spinner,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Container,
} from "reactstrap";
import Axios from "axios";
import { toast } from "react-toastify";
import Slide from "react-reveal/Slide";

import styles from "./css/contact.module.css";

export default function Contact() {
  const [clientMail, setClientMail] = useState({});
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const notifySuccess = () => {
    toast.success("email bien envoye !", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const getContact = async () => {
    try {
      const res = await Axios.get("http://localhost:4000/contacts");
      setContacts(res.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  const postMessage = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:4000/sendMail", {
        html: `<p><b>Nom :</b> ${clientMail.name},</p>
        <p><b>Prenom :</b> ${clientMail.surname},</p>
        <p><b>Telephone :</b> ${clientMail.phone},</p>
        <p><b>Adresse :</b> ${clientMail.adresse},</p>
        <p><b>MESSAGE:</b>
 ${clientMail.message}</p>`,
        subject: `Message du site Portfolio de MR/Mme ${clientMail.surname}  ${clientMail.name}`,
        emailTo: "doudou6500@gmail.com",
      });
      notifySuccess();
    } catch (err) {
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
    <Container className={styles.container}>
      <Form className="mr-3" onSubmit={postMessage}>
        <Slide right>
          <div>
            <h2 style={{ color: "#e7717d", "font-weight": "700" }}>Contact</h2>
            <Row>
              <Col sm={6}>
                <Input
                  className={styles.input}
                  onChange={(e) => {
                    setClientMail({ ...clientMail, name: e.target.value });
                  }}
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Nom"
                  required
                />
              </Col>
              <Col sm={6}>
                <Input
                  className={styles.input}
                  onChange={(e) => {
                    setClientMail({ ...clientMail, surname: e.target.value });
                  }}
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Prénom"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Input
                  className={styles.input}
                  onChange={(e) => {
                    setClientMail({ ...clientMail, phone: e.target.value });
                  }}
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Numéro de téléphone"
                  required
                />
              </Col>
              <Col sm={6}>
                <Input
                  className={styles.input}
                  onChange={(e) => {
                    setClientMail({ ...clientMail, adresse: e.target.value });
                  }}
                  type="text"
                  name="adress"
                  id="adress"
                  placeholder="Adresse"
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Input
                  className={styles.input}
                  onChange={(e) => {
                    setClientMail({ ...clientMail, message: e.target.value });
                  }}
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Votre message"
                  required
                />
              </Col>
            </Row>

            <FormGroup check row>
              <Col sm={12}>
                <Button>Envoyer</Button>
              </Col>
            </FormGroup>
          </div>
        </Slide>
      </Form>
    </Container>
  );
}

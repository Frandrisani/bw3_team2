import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Card, Row, Col, Modal, Button, Form, InputGroup } from "react-bootstrap";
import { getAllExperience, addExperience } from "../../redux/actions";

const Esperienza = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.profile.profileDettagli?._id);
  const allExperience = useSelector((state) => state.allExperienceList);
  const [showModal, setShowModal] = useState(false);
  const [newExperience, setNewExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: ""
  });

  useEffect(() => {
    if (userId) {
      console.log("Recupero l'ID utente:", userId);
      dispatch(getAllExperience(userId));
    }
  }, [dispatch, userId]);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = value === "" ? "" : value;
    setNewExperience({ ...newExperience, [name]: newValue });
  };

  const handleAddExperience = async (event) => {
    event.preventDefault();
    try {
      await dispatch(addExperience(userId, newExperience));
      
      setShowModal(false);
      
      dispatch(getAllExperience(userId));
    } catch (error) {
      console.log("Errore durante l'aggiunta dell'esperienza:", error);
    }
  };
  

  if (!allExperience) {
    return (
      <div>
        <Button onClick={handleModalOpen}>Aggiungi Esperienza</Button>
        <Modal show={showModal} onHide={handleModalClose}>
        <Form onSubmit={handleAddExperience}>
      <Form.Group className="mb-3" >
        <Form.Label>Qualifica*</Form.Label>
        <Form.Control type="text" placeholder="Esempio: Retail Sales Manager" name='role' value={newExperience.role} onChange={handleInputChange} />
      </Form.Group>
       <Form.Group  controlId="formGridState1">
          <Form.Label>Tipo di impiego</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Seleziona</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Nome azienda*</Form.Label>
        <Form.Control type="text" placeholder="Esempio: Microsoft" name='company' value={newExperience.company} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Località*</Form.Label>
        <Form.Control type="text" placeholder="Esempio: Milano, Italia" name='area' value={newExperience.area} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group  controlId="formGridState2">
          <Form.Label>Tipo di località</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Seleziona</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <br/>
        <br/>
        <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Attualmente ricopro questo ruolo" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Data di inizio*</Form.Label>
        <Form.Control type="text" placeholder="anno-mese-giorno" name='startDate' value={newExperience.startDate} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Data di fine*</Form.Label>
        <Form.Control type="text" placeholder="anno-mese-giorno" name='endDate' value={newExperience.endDate} onChange={handleInputChange} />
      </Form.Group>
      {/* <Row>
        <Col>
           <Form.Group  controlId="formGridState3">
          <Form.Label >Data di inizio* : Mese</Form.Label>
          
          <Form.Select   name='startDate' value={newExperience.startDate} onChange={handleInputChange}>
            <option></option>
            <option>Gennaio</option>
            <option>Febbraio</option>
            <option>Marzo</option>
            <option>Aprile</option>
            <option>Maggio</option>
            <option>Giugno</option>
            <option>Luglio</option>
            <option>Agosto</option>
            <option>Settembre</option>
            <option>Ottobre</option>
            <option>Novembre</option>
            <option>Dicembre</option>
          </Form.Select>
        </Form.Group>
        </Col>
        <Col>
           <Form.Group  controlId="formGridState4">
          <Form.Label >Anno</Form.Label>
          
          <Form.Select  name='startDate' value={newExperience.startDate} onChange={handleInputChange}>
            <option></option>
            <option>2000</option>
            <option>2001</option>
            <option>2002</option>
            <option>2003</option>
            <option>2004</option>
            <option>2005</option>
            <option>2006</option>
            <option>2007</option>
            <option>2008</option>
            <option>2009</option>
            <option>2010</option>
            <option>2011</option>
            <option>2012</option>
            <option>2013</option>
            <option>2014</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
          </Form.Select>
        </Form.Group>
        </Col>
      </Row>
       <Row>
        <Col>
           <Form.Group  controlId="formGridState5">
          <Form.Label >Data di fine* : Mese</Form.Label>
          
          <Form.Select   name='endDate' value={newExperience.endDate} onChange={handleInputChange} >
            <option></option>
            <option>Gennaio</option>
            <option>Febbraio</option>
            <option>Marzo</option>
            <option>Aprile</option>
            <option>Maggio</option>
            <option>Giugno</option>
            <option>Luglio</option>
            <option>Agosto</option>
            <option>Settembre</option>
            <option>Ottobre</option>
            <option>Novembre</option>
            <option>Dicembre</option>
          </Form.Select>
        </Form.Group>
        </Col>
        <Col>
           <Form.Group  controlId="formGridState6">
          <Form.Label >Anno</Form.Label>
          
          <Form.Select   name='endDate' value={newExperience.endDate} onChange={handleInputChange} >
            <option></option>
            <option>2000</option>
            <option>2001</option>
            <option>2002</option>
            <option>2003</option>
            <option>2004</option>
            <option>2005</option>
            <option>2006</option>
            <option>2007</option>
            <option>2008</option>
            <option>2009</option>
            <option>2010</option>
            <option>2011</option>
            <option>2012</option>
            <option>2013</option>
            <option>2014</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
          </Form.Select>
        </Form.Group>
        </Col>
      </Row> */}
       <Form.Group className="mb-3" >
        <Form.Label>Settore*</Form.Label>
        <Form.Control type="text" placeholder="Esempio: Informatica" name='description' value={newExperience.description} onChange={handleInputChange} />
      </Form.Group>
      <Form.Label >Descrizione</Form.Label>
      <InputGroup>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
      <br/>
      <br/>
      <Form.Group className="mb-3" >
        <Form.Label>Sommario del profilo</Form.Label>
        <Form.Control type="text" placeholder="Esempio: Full-Stack Developer" />
      </Form.Group>
      <Button variant="primary" type="submit">
      Aggiungi Esperienza
    </Button>
    </Form>
        </Modal>
      </div>
    );
  }

  

  return (
    <div>
      {allExperience.map((experience) => (
        <Card key={experience._id}>
          <Card.Body>
            <Row>
              <Col xs={10}>
                <Card.Title>
                  <strong>Esperienza</strong>
                </Card.Title>
              </Col>
              <Col xs={2}>
                <i className="bi bi-plus-lg"></i>{" "}
                <i className="bi bi-pencil-fill"></i>
              </Col>
            </Row>
            <blockquote className="blockquote mb-0">
              <Row>
                <Col xs={2}>
                  <img src={experience.image} alt="experience img" />
                </Col>
                <Col xs={10}>
                  <h2>{experience.role}</h2>
                  <p>{experience.company}</p>
                  <p>
                    {experience.startDate} - {experience.endDate}
                  </p>
                  <p>{experience.area}</p>
                  <p>{experience.description}</p> 
                </Col>
              </Row>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Esperienza;

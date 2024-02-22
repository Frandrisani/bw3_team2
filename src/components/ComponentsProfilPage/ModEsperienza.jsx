import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getSingleExperience } from "../../redux/actions";
import { Link } from "react-router-dom";


const ModEsperienza = ({userId, experienceId}) => { //
  
  const dispatch = useDispatch();
  // const { id } = useParams();
  const experience = useSelector((state) => state.singleExperience.singleExperience);
  
  useEffect(() => {
    dispatch(getSingleExperience(userId, experienceId)); // Utilizza l'azione per ottenere i dettagli dell'esperienza
  }, [dispatch, userId, experienceId]);
// console.log( experience)
//   useEffect(() => {
//     if (experienceId) {
//       dispatch(getSingleExperience(userId, experienceId));
//     }
//   }, [dispatch, userId, experienceId]);


  if (!experience) {
    return <div>Loading...</div>;
  }

 

    return (
       <div>
      <Card key={experience._id}>
        <Card.Body className="modCard">
          <Row>
            <Col xs={1}>
              <Link to={'/'}>
              <i className="bi bi-arrow-left-short"></i>
              </Link>
            </Col>
            <Col xs={9}>
              <Card.Title>
                <strong>Esperienza</strong>
              </Card.Title>
            </Col>
            <Col xs={2}>
              <div className="mb-3 modIcons add"><i className="bi bi-plus-lg add "></i></div>
              <div className="mb-3 modIcons mod"><i className="bi bi-pencil mod"></i></div>
              
            </Col>
          </Row>
          <blockquote className="blockquote mb-0">
            <Row>
              <Col xs={2}>
                <img src={experience.image} alt="experience img" />
              </Col>
              <Col xs={9}>
                <h2>{experience.role}</h2>
                <p>{experience.company}</p>
                <p>
                  {experience.startDate} - {experience.endDate}
                </p>
                <p>{experience.description}</p>
                <p>{experience.area}</p>
              </Col>
              <Col xs={1}>
              <div className="ms-1 mt-1 delete"><i className="bi bi-x-circle delete"></i></div>
              </Col>
            </Row>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
    );
  };
  
  export default ModEsperienza;
  
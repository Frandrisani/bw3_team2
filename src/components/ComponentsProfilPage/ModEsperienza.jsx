import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getAllExperience, getPersonalProfile } from "../../redux/actions";






const ModEsperienza = () => {
    
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.profile.profileDettagli?._id);
  console.log(userId);
  const allExperience = useSelector((state) => state.allExperienceList);

  useEffect(() => {
    if (userId) {
      console.log("Recupero delle esperienze per l'ID utente:", userId);
      dispatch(getAllExperience(userId));
    }
  }, [dispatch, userId]);

  if (!allExperience) {
    return <div>Loading...</div>;
  }



    return (
      <div>

{allExperience.map((experience) => (
      <Card key={experience._id}>
      <Card.Body>
        <Row>
          <Col xs={1}>
          <i class="bi bi-arrow-left-circle-fill"></i>
          </Col>
          <Col xs={9}>
            <Card.Title>
              <strong>Esperienza</strong>
            </Card.Title>
          </Col>
          <Col xs={2}> <div><i class="bi bi-plus-lg"></i></div> <div><i class="bi bi-pencil-fill"></i></div></Col>
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
              <p>{experience.description}</p>
              <p>{experience.area}</p>
            </Col>
          </Row>
        </blockquote>
      </Card.Body>
    </Card>
    ))}
    </div>
    );
  };
  
  export default ModEsperienza;
  
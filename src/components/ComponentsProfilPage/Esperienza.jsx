import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { getAllExperience, getPersonalProfile } from '../../redux/actions'; 

const Esperienza = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.profile.profileDettagli._id);
    console.log(userId) 
    
    useEffect(() => {
        dispatch(getPersonalProfile());
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

  useEffect(() => {
    dispatch(getPersonalProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              <Col xs={10}>
                <Card.Title>
                  <strong>Esperienza</strong>
                </Card.Title>
              </Col>
              <Col xs={2}>{/* icone*/}</Col>
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

export default Esperienza;

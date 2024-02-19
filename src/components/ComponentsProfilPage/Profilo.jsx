import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalProfile } from "../../redux/actions/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Profile = () => {
  const dispatch = useDispatch();
  const profilo = useSelector((state) => state.profile.profileDettagli);
  const spinner = useSelector((state) => state.profile.isLoading);

  useEffect(() => {
    dispatch(getPersonalProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {spinner === false ? (
        <Card>
          <Card.Img variant="top" src="https://placekitten.com/900/200" />
          <Card.Body>
            <div>
              <div className="d-flex">
                <Card.Text>{profilo.name}</Card.Text>
                <Card.Text>{profilo.surname}</Card.Text>
              </div>
              <div className="d-flex">
                <Card.Text>{profilo.title}</Card.Text>
              </div>
            </div>
            <div className="d-flex">
              <Card.Text>{profilo.area}</Card.Text>
              <Card.Text>
                <a href="#">Informazioni di contatto </a>
              </Card.Text>
            </div>
            <div>
              <Card.Text>180 collegamenti</Card.Text>
            </div>
            <div>
              <Button variant="primary">Primary</Button>{" "}
            </div>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Profile;

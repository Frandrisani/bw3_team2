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
        <Card className="p-0" style={{ width: 800 }}>
          <Card.Img variant="top" src="https://placekitten.com/900/200" />
          <img
            src={profilo.image}
            alt=""
            width={150}
            className="rounded-circle z-3 position-absolute bottom-50 ms-3"
          />
          <Card.Body>
            <div className="d-flex p-0 m-0">
              <Card.Text className="me-1 fs-2 fw-semibold p-0 mb-0">
                {profilo.name}
              </Card.Text>
              <Card.Text className="fs-2 fw-semibold p-0 mb-0">
                {profilo.surname}
              </Card.Text>
            </div>
            <Card.Text className="text-start  mt-0 mb-3">
              {profilo.title}
            </Card.Text>

            <div className="d-flex">
              <Card.Text className="me-2 text-secondary">
                {profilo.area}{" "}
              </Card.Text>
              <Card.Text>
                <a href="#" className="text-decoration-none fw-medium">
                  {" "}
                  Informazioni di contatto{" "}
                </a>
              </Card.Text>
            </div>
            <div className="text-start">
              <Card.Text className="mb-3 fw-medium text-primary">
                180 collegamenti
              </Card.Text>
            </div>
            <div className="text-start">
              <Button variant="primary" className="me-2 rounded-pill">
                Disponibile per
              </Button>
              <Button variant="outline-primary" className="me-2 rounded-pill">
                Aggiungi sezione del profilo
              </Button>
              <Button variant="outline-secondary" className="rounded-pill">
                Altro
              </Button>
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

import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPersonalProfile } from "../../redux/actions/index";

const Profile = () => {
  const dispatch = useDispatch();
  const profilox = useSelector((state) => state.profile.profileDettagli);
  const spinner = useSelector((state) => state.profile.isLoading);

  useEffect(() => {
    dispatch(getPersonalProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {spinner === false ? (
        <Row className="center-row">
          <Col lg={4}>
            <div>{profilox.name && <p>{profilox.name}</p>}</div>
            <div>{profilox.surname && <p>{profilox.surname}</p>}</div>
            <div>{profilox.email && <p>{profilox.email}</p>}</div>
            <div>{profilox.username && <p>{profilox.username}</p>}</div>
            <div>{profilox.bio && <p>{profilox.bio}</p>}</div>
            <div>{profilox.title && <p>{profilox.title}</p>}</div>
          </Col>
          <Col lg={8}></Col>
        </Row>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Profile;

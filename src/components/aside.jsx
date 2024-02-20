import { Row, Col, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllProfile } from "../../src/redux/actions";
import { Spinner } from "react-bootstrap/esm";
import PersonOfIinterest from "./componentAside/personOfInterest";
import ProfileConsulted from "./componentAside/profilesConsulted";
import UrlLinkdin from "./componentAside/urlLinkdin";

const Aside = () => {
  return (
    <>
      <UrlLinkdin />
      <PersonOfIinterest />
      <ProfileConsulted />
    </>
  );
};

export default Aside;

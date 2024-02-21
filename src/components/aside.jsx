import { Row, Col, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllProfile } from "../../src/redux/actions";
import { Spinner } from "react-bootstrap/esm";
import ProfileConsulted from "./componentAside/profilesConsulted";
import UrlLinkdin from "./componentAside/urlLinkdin";

const Aside = () => {
  const dispatch = useDispatch();
  const allProfile = useSelector((state) => state.profile.allProfileList);
  const spinner = useSelector((state) => state.profile.isLoading);
  useEffect(() => {
    dispatch(getAllProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <UrlLinkdin />

      <>
        <ProfileConsulted
          title="Altri profili consultati"
          array={allProfile.filter((_, index) => index > 2 && index < 8)}
        />
        <ProfileConsulted
          title="Persone che potresti conoscere"
          array={allProfile.filter((_, index) => index >= 8 && index <= 13)}
        />
      </>
    </>
  );
};

export default Aside;

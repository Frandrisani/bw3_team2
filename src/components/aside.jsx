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
  {
    /**/
  }
  // Se lo spinner è attivo, mostra il componente Spinner
  if (spinner) {
    return <Spinner animation="border" variant="primary" />;
  }
  // Verifica se allProfile è null o undefined
  if (!allProfile) {
    return <div>Loading...</div>; // o un altro indicatore di caricamento
  }
  {
    /**/
  }

  return (
    <div style={{ paddingTop: "6rem" }}>
      {" "}
      {/*aggiunti per non sovrapporsi alla Navbar*/}
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
    </div>
  );
};

export default Aside;

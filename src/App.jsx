import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import React from "react";
import ProfilePage from "./components/ProfilePage";
import Aside from "./components/aside";
import { Col, Container, Row } from "react-bootstrap";
import CardHome from "./components/CardHome";
import HomePage from "./components/HomePage";
import CNavbar from "./components/CNavbar";
import SottoNavbar from "./components/ComponentsProfilPage/SottoNavbar";
import FooterHome from "./components/FooterHome";
import Lavoro from "./components/Lavoro";

function App() {
  return (
    <BrowserRouter>
      <Container>
        {/* <CNavbar /> */}

        <Row>
          <Col lg={8}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/Lavoro" element={<Lavoro />} />
            </Routes>
          </Col>
          <Col lg={3}>
            {/* {<Aside />} */}
            {/* {<FooterHome />} */}
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;

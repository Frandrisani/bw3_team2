import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import AnalisiPage from "./components/ComponentsProfilPage/AnalisiPage";
import RisorsePage from "./components/ComponentsProfilPage/RisorsePage";
import Aside from "./components/aside";
import { Col, Container, Row } from "react-bootstrap";
import HomePage from "./components/HomePage";
import CNavbar from "./components/CNavbar";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <CNavbar />

        <Row>
          <Col lg={6}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/AnalisiPage" element={<AnalisiPage />} />
              <Route path="/RisorsePage" element={<RisorsePage />} />{" "}
            </Routes>
          </Col>
          <Col lg={3}>
            {<Aside />}
            {<FooterHome />}
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;

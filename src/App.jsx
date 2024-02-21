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

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col lg={8}>
            <Routes>
              <Route path="/" element={<ProfilePage />} />

              {/* Puoi aggiungere altre rotte qui più tardi */}
            </Routes>
          </Col>
          <Col lg={3}>
            <Routes>
              <Route path="/" element={<Aside />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;

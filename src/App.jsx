import { Col, Container, Row } from "react-bootstrap";
import Interest from "./components/ComponentsProfilPage/Interessi";
import Profile from "./components/ComponentsProfilPage/Profilo";
import Aside from "./components/aside";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col md={8}>
            <Interest />
          </Col>
          <Col md={4}>
            <Aside />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

import { Row, Col, Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const LanguageSection = () => {
  return (
    <Container>
      <Row>
        <Col className="bg-white my-3">
          <div className="d-flex justify-content-between align-items-center ">
            <h1>Lingue</h1>
            <div>
              <i className="bi bi-plus-lg pe-2 fs-4 "></i>
              <i className="bi bi-pencil-fill  fs-4"></i>
            </div>
          </div>
          <div className="border-bottom">
            <h3>Italiano</h3>
            <p>Conoscenza madre lingua</p>
          </div>
          <div>
            <h3>Inglese</h3>
            <p>Conoscenza professionale</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default LanguageSection;

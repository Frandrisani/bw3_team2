import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Lavoro = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Container fluid>
        <Row className=" justify-content-evenly ">
          <Col lg={3}>
            <Row className="mt-3">
              <Col className="border border-secondary-subtle bg-white rounded-3">
                <p className="mt-3">
                  <i className="bi bi-bookmark-fill "></i> Le mie offerte di
                  lavoro
                </p>
                <p>
                  <i className="bi bi-list"></i> Preferenze
                </p>
                <div className="d-flex">
                  <i className="bi bi-journal-check me-1"></i>
                  <p>Valutazioni delle competenze</p>
                </div>
                <div className="d-flex">
                  <i className="bi bi-youtube me-1"></i>
                  <p>Indicazioni per chi cerca lavoro</p>
                </div>
                <p className="small">
                  <i className="bi bi-gear-fill"></i> Impostazioni candidatura
                </p>
              </Col>
            </Row>

            <Button
              variant=""
              className="d-flex border border-3 border-primary text-primary rounded-5 mt-3 px-3 py-0"
            >
              <i className="bi bi-pencil mt-3 me-3"></i>
              <div>
                <p className="small text-center fw-bold mt-2">
                  Pubblica offerta gratuita
                </p>
              </div>
            </Button>
          </Col>

          <Col
            lg={6}
            className="border border-secondary-subtle bg-white rounded-3 mt-3 "
          >
            <h5 className="mb-0 mt-3">Consigliato per te</h5>
            <p className="small ">
              Sulla base del tuo profilo e della tua cronologia delle ricerche
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Lavoro;

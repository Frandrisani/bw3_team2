import { Col, Container, Row } from "react-bootstrap";

const AnalisiPage = () => {
  return (
    <>
      <Container>
        <Row className=" justify-content-center mt-4">
          <div className=" border border-secondary-subtle bg-white rounded-3 w-75">
            <Row className="ms-3 mt-4">
              <h5 className=" opacity-75 mb-4">
                Analisi <i className="bi bi-question-circle-fill fs-6 "></i>
              </h5>
              <Col>
                <div className="border border-secondary-subtle rounded-3 ps-3">
                  <h5 className="mb-0 mt-3">104</h5>
                  <p className="opacity-75">
                    Impresisoni del post
                    <br />
                    <span className=" text-success">
                      <i className="bi bi-caret-up-fill"></i>300%{" "}
                    </span>
                    Ultimi 7 giorni
                  </p>
                </div>
              </Col>
              <Col>
                <div className="border border-secondary-subtle rounded-3 ps-3 me-3">
                  <h5 className="mb-0 mt-3">188</h5>
                  <p className="opacity-75">
                    Follower
                    <br />
                    <span className="text-success">
                      {" "}
                      <i className="bi bi-caret-up-fill"></i>0,6%{" "}
                    </span>
                    Ultimi 7 giorni
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="my-3 ms-3">
              <Col>
                <div className="border border-secondary-subtle rounded-3 ps-3">
                  <h5 className="mb-0 mt-3">24</h5>
                  <p className="opacity-75">
                    Visitatori del profilo
                    <br />
                    Ultimi 90 giorni
                  </p>
                </div>
              </Col>
              <Col>
                <div className="border border-secondary-subtle rounded-3 ps-3 me-3">
                  <h5 className="mb-0 mt-3">2</h5>
                  <p className="opacity-75">
                    Comparse nelle ricerche
                    <br /> settimana precedente
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className=" border border-secondary-subtle bg-white rounded-3 mt-3 w-75">
            <Row className="ms-3 mt-4">
              <Col>
                <h5>Strumenti di crazione</h5>
                <p>
                  Scopri altri modi per avviare la conversazione con la tua
                  community.
                  <a href="#" className="fw-bold text-decoration-none">
                    {" "}
                    Scopri di più{" "}
                  </a>
                  sull&apos;accesso agli strumenti di creazione.
                </p>
                <div className="d-flex justify-content-between">
                  <p>LinkedIn Live</p>
                  <p className="me-5  opacity-75 mb-0">
                    <i className="bi bi-info-square-fill"></i> Scopri di più{" "}
                    <i className="bi bi-chevron-compact-right"></i>
                  </p>
                </div>
                <hr className="mt-0" />
                <div className="d-flex justify-content-between">
                  <p>Evento audio</p>
                  <p className="me-5  opacity-75 mb-0">
                    <i className="bi bi-info-square-fill"></i> Scopri di più{" "}
                    <i className="bi bi-chevron-compact-right"></i>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default AnalisiPage;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Form from 'react-bootstrap/Form';

const CFooter = () => (
    <div className="row justify-content-center mt-5 footer">
      <div className="col ">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 ">
          <div className="col ">
            <div className="row">
              <div className="col footer-links d-flex flex-column">
                <p>
                  <a href="#" alt="footer link">Informazioni</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Linee guida della community</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Privacy e condizioni <i className="bi bi-caret-down-fill"></i></a>
                </p>
                <p>
                  <a href="#" alt="footer link">Sales Solutions</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Centro sicurezza</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links d-flex flex-column">
                <p>
                  <a href="#" alt="footer link">Accessibilità</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Carriera</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Opzioni per gli annunci <br /> pubblicitari</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Mobile</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="row">
              <div className="col footer-links d-flex flex-column">
                <p>
                  <a href="#" alt="footer link">Talent Solutions</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Soluzioni di marketing</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Pubblicità</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Piccole Imprese</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links d-flex flex-column">
                <p>
                  <a href="#" alt="footer link"><i className="bi bi-question-circle-fill"></i> <strong>Domande?</strong><br />Visita il nostro Centro assistenza </a>
                </p>
                <p>
                  <a href="#" alt="footer link"><i className="bi bi-gear-fill"></i> <strong>Gestici il tuo account e la tua privacy</strong><br />Vai alle impostazioni</a>
                </p>
                <p>
                  <a href="#" alt="footer link"><i className="bi bi-shield-shaded"></i> <strong>Trasparenza sui contenuti consigliati</strong><br />Scopri di più sui contenuti consigliati</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links d-flex flex-column">
                <p>Seleziona Lingua</p>
              <Form.Select aria-label="Default select example">
      <option>Italiano (Italiano)</option>
      <option value="2">Inglese (Inglese)</option>
      <option value="3">Aramaico (Aramaico antico)</option>
    </Form.Select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col mb-2 mt-2 copyright d-flex align-items-start">
           Linkedin Corporation © 2024 
          </div>
        </div>
      </div>
    </div>
  );
  
  export default CFooter;
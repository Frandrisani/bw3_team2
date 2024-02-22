// import { Col, Container, Row } from "react-bootstrap";
// import Interest from "./components/ComponentsProfilPage/Interessi";

// import Aside from "./components/aside";
// import ProfilePage from "./components/ProfilePage";
// import { Router } from "react-bootstrap-icons";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <ProfilePage />
//         {/* route verranno aggiunti qui più tardi */}
//       </div>
//     </Router>
//   );
// }

// export default App;

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
import ModEsperienza from "./components/ComponentsProfilPage/ModEsperienza";
import Esperienza from "./components/ComponentsProfilPage/Esperienza";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col lg={8}>
            <Routes>
              <Route path="/" element={<ProfilePage />} />
              <Route path="/modEsperienza/:userId/:experienceId" element={<ModEsperienza />} />
              {/* Altre rotte possono essere aggiunte qui */}
            </Routes>
          </Col>
          <Col lg={3}>
            {/* <Aside /> */}
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}


export default App;

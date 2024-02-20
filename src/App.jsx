import { Col, Container, Row } from "react-bootstrap";
import Interest from "./components/ComponentsProfilPage/Interessi";
import Profile from "./components/ComponentsProfilPage/Profilo";
import Aside from "./components/aside";

function App() {
  return (
    <Router>
      <div className="App">
        <ProfilePage />
        {/* route verranno aggiunti qui più tardi */}
      </div>
    </Router>
  );
}

export default App;

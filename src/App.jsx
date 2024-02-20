import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ProfilePage from "./components/ProfilePage";

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

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Analisi from "./ComponentsProfilPage/Analisi";
import Risorse from "./ComponentsProfilPage/Risorse";
import AnalisiPage from "./ComponentsProfilPage/AnalisiPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ProfilePage = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Analisi />} />
          <Route path="/AnalisiPage" element={<AnalisiPage />} />
          <Route path="/" element={<Risorse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ProfilePage;

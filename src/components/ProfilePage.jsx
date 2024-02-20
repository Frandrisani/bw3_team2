import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Profile from "./ComponentsProfilPage/Profilo";
import Analisi from "./ComponentsProfilPage/Analisi";
import Risorse from "./ComponentsProfilPage/Risorse";
import AnalisiPage from "./ComponentsProfilPage/AnalisiPage";
import RisorsePage from "./ComponentsProfilPage/RisorsePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ProfilePage = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Analisi />} />
          <Route path="/AnalisiPage" element={<AnalisiPage />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Risorse />} />
          <Route path="/Risorsepage" element={<RisorsePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ProfilePage;

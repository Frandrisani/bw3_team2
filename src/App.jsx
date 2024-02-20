import "./App.css";
import Esperienza from "./components/ComponentsProfilPage/Esperienza";
import ProfilePage from "./components/ProfilePage";
import { useDispatch } from "react-redux";
import { setUserId } from "./redux/actions";
import React, { useEffect } from "react";

function App() {
  return (
    <>
      <header></header>
      <main>
        {/* <ProfilePage></ProfilePage> */}
        <Esperienza></Esperienza>
      </main>
      <footer></footer>
    </>
  );
}

export default App;

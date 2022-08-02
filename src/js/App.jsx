import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Menu from "./component/Menu.jsx";
import Home from "./Views/Home.jsx";
import Contact from "./Views/Contact.jsx";
import About from "./Views/About.jsx";
import NotFound from "./Views/NotFound.jsx";
import CharacterDetail from "./component/CharacterDetail.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          {/*aqui van las rutas */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/character/:character_id" element={<CharacterDetail/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

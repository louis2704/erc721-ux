import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projets from "./pages/Projets";
import ChainInfo from "./pages/Chain-info";
import NavBar from "./pages/NavBar";
import NotFound from "./pages/PagesNotFound";
import WrongNetwork from "./pages/Wrong-Network";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FakeBayc from "./pages/FakeBayc";
import FakeNefturians from "./pages/FakeNefturians";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="chain-info" element={<ChainInfo />} />
          <Route path="projets" element={<Projets/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="Wrong-Network" element={<WrongNetwork />} />
          <Route path="/fakeBayc" element={<FakeBayc />} />
          <Route path="/fakeNefturians" element={<FakeNefturians />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}




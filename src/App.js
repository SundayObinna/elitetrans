import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Services from "./components/Services";
import AmbulatoryService from "./components/AmbulatoryService";
import SpecializedService from "./components/SpecializedService";
import SaleRental from "./components/SaleRental";
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/ambulatory" element={<AmbulatoryService />} />
        <Route exact path="/specialized" element={<SpecializedService />} />
        <Route exact path="/sale-rental" element={<SaleRental />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />

        <Route exact path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

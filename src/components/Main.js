import "../App.css";
import { Helmet } from "react-helmet";

import Jumbotron from "./Jumbotron";
import MedicalService from "./MedicalService";
import ServiceHighlight from "./ServiceHighlight";
import AboutService from "./AboutService";
import Trusted from "./Trusted";

export default function Main() {
  return (
    <section>
      <Helmet>
        <title>eliteTrans - On time, all the time...</title>
      </Helmet>
      <Jumbotron />
      <div className="container py-5">
        <MedicalService />
        <ServiceHighlight />
        <AboutService />
      </div>
      <Trusted />
    </section>
  );
}

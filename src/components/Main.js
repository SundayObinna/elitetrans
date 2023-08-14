import "../App.css";
import Jumbotron from "./Jumbotron";
import MedicalService from "./MedicalService";
import ServiceHighlight from "./ServiceHighlight";
import AboutService from "./AboutService";
import Trusted from "./Trusted";

export default function Main() {
  return (
    <section>
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

import "../App.css";
import AboutService from "./AboutService";
import MedicalService from "./MedicalService";
import ServiceHighlight from "./ServiceHighlight";
import Trusted from "./Trusted";

export default function Main() {
  return (
    <>
      <section className="container py-5">
        <MedicalService />
        <ServiceHighlight />
        <AboutService />
      </section>
      <Trusted />
    </>
  );
}

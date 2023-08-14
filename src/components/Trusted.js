import { Link } from "react-router-dom";
import "../App.css";
import "animate.css";

export default function Trusted() {
  return (
    <div className="trusted p-5 m-0" style={{ backgroundColor: "#ee296a" }}>
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-md-4">
            <img
              className="img-fluid animate__fadeInLeft animate__pulse"
              src="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/ambulance.png"
              alt="Awesome"
            />
          </div>

          <div className="col-md-4">
            <h3 style={{ color: "maroon" }}>
              Find out Why Our Services
              <br /> Are Trusted
            </h3>
            <p style={{ color: "maroon", fontWeight: "700" }}>
              Call anytime:&nbsp;
              <a
                style={{ color: "whitesmoke", textDecoration: "none" }}
                href="tel:+5553848387267"
              >
                + 1-(555)-ELITETRANS
              </a>
            </p>
          </div>

          <div className="col-md-4">
            <Link className="btn et-btn" to="/contact">
              Contact Us&nbsp;<span className="fas fa-arrow-right"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

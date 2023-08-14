import { Link } from "react-router-dom";
import "../App.css";
import footerLogo from "../assets/images/eliteTrans_icon_no-bg.png";

export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row footer-top py-4 d-flex h-100 justify-content-center">
          <div className="col-md-3 text-lg-start text-center mb-4">
            <div className="footer-logo">
              <Link to="/">
                <img
                  className="img-fluid"
                  width={100}
                  alt="eliteTrans"
                  src={footerLogo}
                />
              </Link>
            </div>
            <div className="footer-tagline">
              <p>On time, all the time</p>
            </div>
            <div className="footer-contact">
              <ul>
                <li>
                  <div className="inner">
                    <p>
                      <i className="fas fa-envelope"></i>&nbsp;
                      <a href="mailto:info@elitetrans.us">info@elitetrans.us</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <p>
                      <i className="fas fa-phone"></i>&nbsp;
                      <a href="tel:+111-222-3333">+111-222-3333</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <p>
                      <i className="fas fa-location-dot"></i>&nbsp;88 Brooklyn
                      Silver Street, USA
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/ambulatory">Ambulatory Service</Link>
              </li>
              <li>
                <Link to="/specialized">Specialized Care Service</Link>
              </li>
              <li>
                <Link to="/sale-rental">Vehicle Sale/Rental Service</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <div className="footer-quote text-center">
              <h3 style={{ fontSize: "20px" }}>We can help, today.</h3>
              <p>24 hours a day, 7 days a week support.</p>
              <a href="./" className="btn btn-primary et-btn">
                Get A Free Quote
              </a>
            </div>
          </div>
        </div>
        <div className="row flex text-center footer-bottom py-4">
          <div className="copyright d-flex h-100 justify-content-center align-items-center col-12 col-md-6">
            <p>
              Copyright&nbsp;&copy;&nbsp;2023&nbsp;
              <Link
                style={{
                  fontWeight: "bold",
                  color: "var(--et-color-1)",
                  textDecoration: "none",
                }}
                to="/"
              >
                eliteTrans
              </Link>
              .&nbsp;All Rights Reserved.
            </p>
          </div>
          <div className="social-links col-12 col-md-6">
            <ul className="p-0 mb-0 footer-social-links">
              <li>
                <a href="./">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="./">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="./">
                  <i className="fa fa-google"></i>
                </a>
              </li>
              <li>
                <a href="./">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

import "../App.css";
import footerLogo from "../assets/images/eliteTrans_icon_no-bg.png";

export default function Footer() {
  const noRef = null;

  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row footer-top py-4 d-flex h-100 justify-content-center">
          <div className="col-md-3 text-lg-start text-center mb-4">
            <div className="footer-logo">
              <a href="./">
                <img
                  className="img-fluid"
                  width={100}
                  alt="eliteTrans"
                  src={footerLogo}
                />
              </a>
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
                <a href={noRef}>Home</a>
              </li>
              <li>
                <a href={noRef}>About us</a>
              </li>
              <li>
                <a href={noRef}>Services</a>
              </li>
              <li>
                <a href={noRef}>Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>
                <a href={noRef}>Ambulatory Service</a>
              </li>
              <li>
                <a href={noRef}>Specialized Care Service</a>
              </li>
              <li>
                <a href={noRef}>Vehicle Sale/Rental Service</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <div className="footer-quote text-center">
              <h3 style={{ fontSize: "20px" }}>We can help, today.</h3>
              <p>24 hours a day, 7 days a week support.</p>
              <a href={noRef} className="btn btn-primary et-btn">
                Get A Free Quote
              </a>
            </div>
          </div>
        </div>
        <div className="row flex text-center footer-bottom py-4">
          <div className="copyright d-flex h-100 justify-content-center align-items-center col-12 col-md-6">
            <p>
              Copyright&nbsp;&copy;&nbsp;2023&nbsp;
              <a
                style={{
                  fontWeight: "bold",
                  color: "var(--et-color-1)",
                  textDecoration: "none",
                }}
                href="./"
              >
                eliteTrans
              </a>
              .&nbsp;All Rights Reserved.
            </p>
          </div>
          <div className="social-links col-12 col-md-6">
            <ul className="p-0 mb-0 footer-social-links">
              <li>
                <a href={noRef}>
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href={noRef}>
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href={noRef}>
                  <i className="fa fa-google"></i>
                </a>
              </li>
              <li>
                <a href={noRef}>
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

import "../App.css";
import AboutService from "./AboutService";

export default function About() {
  return (
    <section className="about">
      <div
        className="about-bg py-5"
        style={{
          backgroundImage:
            "linear-gradient(45deg, var(--et-color-1), var(--et-color-2))",
          color: "whitesmoke",
        }}
      >
        <h1 className="text-center py-5 my-5">About</h1>
      </div>
      <div className="container">
        <div className="row my-3">
          <div className="col-12 col-md-6 mb-3">
            <div className="img-text text-center">
              <div className="img" style={{ position: "relative" }}>
                <img
                  className="img-fluid"
                  src="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/contact-info-style2__image.jpg"
                  alt="Contact"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3 d-flex align-items-center">
            <div className="">
              <div className="sec-title">
                <div className="icon" style={{ fontSize: "72px" }}>
                  <span className="fas fa-heartbeat"></span>
                </div>

                <div className="sub-title">
                  <small>Learn more about us</small>
                </div>
                <h1>
                  Get to Know more about
                  <br />
                  our Services
                </h1>
              </div>

              <div className="inner-content py-4">
                <div className="text">
                  <p>
                    We are eliteTrans, we deliver excellently on Ambulatory
                    Services, Specialized Care Services, and Vehicle Sale/Rental
                    Services amongst other related services.
                  </p>
                </div>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <ul className="et-about-list p-0 m-0">
                      <li>
                        <h4>
                          <i className="fas fa-check-circle"></i>&nbsp;On time,
                          all the time...
                        </h4>
                      </li>
                      <li>
                        <h4>
                          <i className="fas fa-check-circle"></i>
                          &nbsp;Top-notch service
                        </h4>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="et-about-list p-0 m-0">
                      <li>
                        <h4>
                          <i className="fas fa-check-circle"></i>&nbsp;Trusted
                        </h4>
                      </li>
                      <li>
                        <h4>
                          <i className="fas fa-check-circle"></i>
                          &nbsp;Professional delivery
                        </h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutService />
      </div>
    </section>
  );
}

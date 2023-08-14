import "../App.css";

export default function Contact() {
  return (
    <section className="contact pt-5">
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
                  <small>Contact us</small>
                </div>
                <h1>
                  Feel Free to Get in
                  <br />
                  Touch with us
                </h1>
              </div>

              <div className="inner-content py-4">
                <div className="text">
                  <p>
                    Integer aliquam odio tortor dolor sit am adipi we help you
                    ensure everyone is in the right jobs sicing elit, sed do
                    consulting firms Et leggings across the nation tempor.
                  </p>
                </div>

                <div className="row mt-4">
                  <div className="col-xl-12">
                    <div className="single-text-box">
                      <h3>
                        <span className="fas fa-location-pin"></span>
                        &nbsp;Contact Address
                      </h3>
                      <p>
                        66 Broklyn Golden Street. New York United States of
                        America
                      </p>
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <div className="row">
                      <div className="col-xl-6">
                        <h3>
                          <span className="fas fa-phone"></span>&nbsp;Call
                        </h3>
                        <p>
                          <a
                            className="et-btn"
                            href="tel:+15553548387267"
                          >
                            +1-(555)-ELITETRANS
                          </a>
                        </p>
                      </div>
                      <div className="col-xl-6">
                        <h3>
                          <span className="fas fa-envelope"></span>&nbsp;Email
                        </h3>
                        <p>
                          <a
                            className="et-btn"
                            href="mailto:info@elitetrans.us"
                          >
                            info@elitetrans.us
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d100866.84702314694!2d144.963151!3d-37.811385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b8c21cb29b%3A0x1c045678462e3510!2sMelbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1692006415207!5m2!1sen!2sus"
          height="450"
          className="b-0 m-0 p-0 w-100"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>
    </section>
  );
}

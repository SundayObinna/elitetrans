import "../App.css";

export default function MedicalServic() {
  return (
    <div className="medical-service">
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <div className="img-text text-center">
            <div className="img" style={{ position: "relative" }}>
              <img
                className="img-fluid"
                src="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/about-style1__image-1.jpg"
                alt="Staff"
              />
              {/* <div className="info-text">
                  <span>
                    <i
                      style={{
                        color: "var(--et-color-1)",
                        fontSize: "72px",
                        position: "absolute",
                        bottom: "50"
                      }}
                      className="fas fa-bus"
                    ></i>
                    &nbsp;1987
                  </span>
                </div> */}
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
                <small>Our Introductions</small>
              </div>
              <h2>
                A Leading Medical Service
                <br /> Provider
              </h2>
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
                <div className="col-xl-6">
                  <div className="single-text-box">
                    <h3>
                      <span className="fas fa-arrow-right"></span>&nbsp;Help us
                      Save a Life
                    </h3>
                    <p>Nullam mollis elit quis dusto is lacinia efficitur</p>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="single-text-box">
                    <h3>
                      <span className="fas fa-arrow-right"></span>&nbsp;Join our
                      Big Family
                    </h3>
                    <p>Phasellus a aliquet turpis. Proin in leo sed dui </p>
                  </div>
                </div>
              </div>

              <div className="btns-box">
                <a
                  className="btn btn-lg et-btn"
                  style={{ fontSize: "50px", padding: "50px" }}
                  href="https://fastwpdemo.com/newwp/ambons/about-block-01/"
                >
                  Discover More About Us&nbsp;
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

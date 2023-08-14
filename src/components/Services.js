import { Link } from "react-router-dom";
import "../App.css";

export default function Services() {
  return (
    <section className="services">
      <div
        className="service-bg py-5"
        style={{
          backgroundImage:
            "linear-gradient(45deg, var(--et-color-1), var(--et-color-2))",
          color: "whitesmoke",
        }}
      >
        <h1 className="text-center py-5 my-5">Services</h1>
      </div>
      <div className="container">
        <div className="about-service p-5 my-4">
          <div className="text-center">
            <i style={{ fontSize: "40px" }} className="fas fa-heartbeat"></i>
            <br />
            <h2>What We’re Offering</h2>
          </div>

          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="single-service-style1 wow fadeInUp animated">
                <div className="img-holder">
                  <img
                    width="370"
                    height="315"
                    src="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/service-v1-1.jpg"
                    className="img-fluid attachment-ambons_370x315 size-ambons_370x315 wp-post-image"
                    alt=""
                    decoding="async"
                    srcSet="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/service-v1-1.jpg 370w, https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/service-v1-3-300x255.jpg 300w, https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/service-v1-3-270x230.jpg 270w"
                    sizes="(max-width: 370px) 100vw, 370px"
                  />{" "}
                </div>

                <div style={{ fontSize: "100%" }} className="text-holder p-3">
                  <h3>Ambulatory Service</h3>
                  <p>
                    Aenean a mi mi. Sed sem eros, commodo ut lacinia ut,
                    eleifend id ipsum.
                  </p>
                  <div className="btn-box">
                    <Link className="btn et-btn" to="/ambulatory">
                      Read More&nbsp;<i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="single-service-style1 wow fadeInUp animated">
                <div className="img-holder">
                  <img
                    width="370"
                    height="315"
                    src="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/service-v1-3.jpg"
                    className="img-fluid attachment-ambons_370x315 size-ambons_370x315 wp-post-image"
                    alt=""
                    decoding="async"
                    srcSet="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/service-v1-3.jpg 370w, https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/service-v1-3-300x255.jpg 300w, https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/service-v1-3-270x230.jpg 270w"
                    sizes="(max-width: 370px) 100vw, 370px"
                  />{" "}
                </div>

                <div style={{ fontSize: "100%" }} className="text-holder p-3">
                  <h3>Specialized Care Service</h3>
                  <p>
                    Aenean a mi mi. Sed sem eros, commodo ut lacinia ut,
                    eleifend id ipsum.
                  </p>
                  <div className="btn-box">
                    <Link className="btn et-btn" to="/specialized">
                      Read More&nbsp;
                      <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="single-service-style1 wow fadeInUp animated">
                <div className="img-holder">
                  <img
                    width="370"
                    height="315"
                    src="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/service-v1-2.jpg"
                    className="img-fluid attachment-ambons_370x315 size-ambons_370x315 wp-post-image"
                    alt=""
                    decoding="async"
                    srcSet="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/service-v1-2.jpg 370w, https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/service-v1-3-300x255.jpg 300w, https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/service-v1-3-270x230.jpg 270w"
                    sizes="(max-width: 370px) 100vw, 370px"
                  />{" "}
                </div>

                <div style={{ fontSize: "100%" }} className="text-holder p-3">
                  <h3>Vehicle Sale/Rental Service</h3>
                  <p>
                    Aenean a mi mi. Sed sem eros, commodo ut lacinia ut,
                    eleifend id ipsum.
                  </p>
                  <div className="btn-box">
                    <Link className="btn et-btn" to="/sale-rental">
                      Read More&nbsp;
                      <span className="fas fa-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

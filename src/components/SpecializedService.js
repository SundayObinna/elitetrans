import "../App.css";
import ServicesSidebar from "./ServicesSidebar";

export default function SpecializedService() {
  return (
    <section className="specialized">
      <div
        className="about-bg py-5"
        style={{
          backgroundImage:
            "linear-gradient(45deg, var(--et-color-1), var(--et-color-2))",
          color: "whitesmoke",
        }}
      >
        <h1 className="text-center py-5 my-5">Specialized Care Service</h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-9 order-md-2">
            <div className="img">
              <img
                className="mx-auto w-100 text-center img-fluid"
                alt="Service"
                src="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/service-details-1-img1.jpg"
              />
            </div>
            <div className="mt-5 text-justify">
              <h1 className="text-center">Specialized Care Service</h1>
              <p className="text-justify">
                Aliquam egestas dolor at ullamcorper accumsan refreshing. Neque
                porro est qui dolorem ipsum quia quaed inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo. Aelltes port
                lacus quis enim var sed efficitur turpis gilla sed sit amet
                finibus eros. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the ndustry
                standard dummy text ever since the 1500s.{" "}
              </p>
              <p className="text-justify">
                t has survived not only five centuries. Lorem Ipsum is simply
                dummy text of the new design printng and type setting Ipsum take
                a look at our round. When an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting.{" "}
              </p>
            </div>
            <div className="row my-5">
              <div className="col-md-4 mx-auto p-4 py-5 my-3">
                <h4>
                  <i className="fas fa-arrow-right"></i>&nbsp;Help us Save a
                  Life
                </h4>
                <p>Proin gravida, urna et cursus aliquam, velit felis</p>
              </div>
              <div className="col-md-4 mx-auto p-4 py-5 my-3">
                <h4>
                  <i className="fas fa-arrow-right"></i>&nbsp;Join our Big
                  Family
                </h4>
                <p>Nullam mollis elit quis dusto is lacinia efficitur</p>
              </div>
            </div>
            <p className="text-justify">
              When an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting. Lorem
              Ipsum has been the ndustry standard dummy text ever since the
              1500s.
            </p>

            <div className="service-benefits my-5">
              <div className="row">
                <div className="col-md-6">
                  <h2>Service Benefits</h2>
                  <h4>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum.
                  </h4>
                  <ul className="et-option-list p-0">
                    <li>
                      <i className="fas fa-check-circle"></i>&nbsp;In id diam
                      nec nisi congue tincidunt
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>&nbsp;Pn malesuada
                      purus a ligula dapibus
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>&nbsp;Vestibulum
                      tincidunt arcu vel nisl
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>&nbsp;Sed tristique
                      lorem non tesque
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 text-center">
                  <img
                    className="img-fluid h-100"
                    alt="Care"
                    src="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/service-details-img2.jpg"
                  />
                </div>
              </div>
              <div className="row mt-5 p-3">
                <div
                  className="accordion p-0"
                  id="accordionExample"
                  style={{ border: "2px solid var(--et-color-1)" }}
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Interdum et malesuada fames ac ante ipsum
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Suspendisse finibus urna mauris, vitae consequat quam
                        vel. Vestibulum leo ligula, vit commodo nisl Sed luctus
                        venenatis pellentesque.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Maecenas condimentum sollicitudin ligula.
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Fusce congue lacinia justo ac sagittis quam vel.
                        Vestibulum leo ligula, vit commodo nisl Sed luctus
                        venenatis pellentesque.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Duis rhoncus orci ut metus rhoncus.
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Quisque tempus varius facilisis. Duis placerat turpis
                        vel. Vestibulum leo ligula, vit commodo nisl Sed luctus
                        venenatis pellentesque.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 order-md-1">
            <ServicesSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}

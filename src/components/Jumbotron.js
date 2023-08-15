import "../App.css";

export default function Jumbotron() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center text-center p-0 mt-5">
        <div
          id="et-welcome-carousel"
          className="carousel carousle-fade slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#et-welcome-carousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#et-welcome-carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#et-welcome-carousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/slide-v1-1.jpg"
                className="d-block w-100"
                alt="Slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Ambularoty Service</h5>
                <p>
                  Discover a new level of convenience and care with our premier
                  ambulatory service
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/slide-v1-2.jpg"
                className="d-block w-100"
                alt="Slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Specialized Care Service</h5>
                <p>
                  From medical appointments to everyday tasks, our experienced
                  professionals are here to provide the support you deserve.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/slide-v1-3.jpg"
                className="d-block w-100"
                alt="Slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Vehicle Sale/Rental Service</h5>
                <p>
                  Unveil a world of possibilities with our vehicle sale/rental
                  service
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#et-welcome-carousel"
            data-bs-slide="prev"
          >
            <span
              className="fas fa-chevron-left control"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#et-welcome-carousel"
            data-bs-slide="next"
          >
            <span
              className="fas fa-chevron-right control"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

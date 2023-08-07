import "../App.css";

export default function Jumbotron() {
  //   const noRef = null;

  return (
    <>
      <div
        className="jumbotron"
        style={{
          //   backgroundColor: "rgba(255, 0, 0, 0.5)",
          height: "100%",
        }}
      >
        <div
          id="carouselExampleCaptions"
          className="carousel carousel-fade slide"
          ride="carousel"
          style={{ height: "100%" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{
                backgroundColor: "red",
              }}
            >
              {/* <img
                src="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/slide-v1-1.jpg"
                className="d-block h-100"
                alt="1"
              /> */}
              <div
                className="carousel-caption d-none d-md-block"
                style={{ color: "green" }}
              >
                <h1>First slide label</h1>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              {/* <img
                src="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/slide-v1-2.jpg"
                className="d-block h-100"
                alt="2"
              /> */}
              <div className="carousel-caption d-none d-md-block">
                <h1>Second slide label</h1>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item" style={{ backgroundColor: "blue" }}>
              {/* <img
                src="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/slide-v1-3.jpg"
                className="d-block h-100"
                alt="3"
              /> */}
              <div
                className="carousel-caption d-none d-md-block"
                style={{ color: "green" }}
              >
                <h1>Third slide label</h1>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

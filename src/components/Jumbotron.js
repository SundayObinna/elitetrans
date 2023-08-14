import "../App.css";

export default function Jumbotron() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/slide-v1-2.jpg')",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundPosition: "center center",
          backgroundBlendMode: "saturation",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="container-fluid d-flex vh-90 h-100 justify-content-center align-items-center text-center p-5 mt-4"
      >
        <div className="row">
          <div className="col-12">
            <div>
              <h1 className="text-light m-0 p-0">eliteTrans</h1>
              <small className="text-light m-0 p-0">
                On time, all the time...
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

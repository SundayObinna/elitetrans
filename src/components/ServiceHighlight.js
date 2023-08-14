import "../App.css";

export default function ServiceHighlight() {
  return (
    <div
      className="service-highlight p-5 my-4"
      style={{ backgroundColor: "lightgray", borderRadius: "35px" }}
    >
      <div className="row">
        <div className="col-md-4 p-3">
          <i className="fas fa-shield"></i>
          <h3>Impeccable Safety</h3>
          <p>Aliquam auctor, lectus sit amet egestas eleifend.</p>
        </div>
        <div className="col-md-4 p-3">
          <i className="fas fa-certificate"></i>
          <h3>Fully Licenced</h3>
          <p>Curabitur congue, tortor at semper tristique.</p>
        </div>
        <div className="col-md-4 p-3">
          <i className="fas fa-truck-medical"></i>
          <h3>Available 24/7</h3>
          <p>Pellentesque elit mauris, mattis eget consectetur odio.</p>
        </div>
      </div>
    </div>
  );
}

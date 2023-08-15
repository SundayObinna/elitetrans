import "../App.css";
import { Link } from "react-router-dom";

export default function ServicesSidebar() {
  return (
    <>
      <ul className="list-group list-group-flush service-nav">
        <li className="list-group-item">
          <Link to="/ambulatory">
            <h5>Ambulatory Service</h5>
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/specialized">
            <h5>Specialized Care Service</h5>
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/sale-rental">
            <h5>Vehicle Sale/Rental Service</h5>
          </Link>
        </li>
      </ul>

      <div
        style={{ backgroundColor: "var(--et-color-1)", color: "white" }}
        className="mx-auto my-5 p-4"
      >
        <h3>Need help?</h3>
        <p className="text-justify">
          Speak with a human on a call to our corporate office and we will
          connect you with a team member who can help.
        </p>
        <h3 className="text-center">
          <a className="et-btn" href="tel:+15553548387267">
            +1-(555)-ELITETRANS
          </a>
        </h3>
      </div>
    </>
  );
}

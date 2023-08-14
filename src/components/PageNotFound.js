import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="container p-5 my-3 text-center">
      <h1
        style={{
          backgroundImage:
            "linear-gradient(45deg, var(--et-color-1), var(--et-color-2))",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
        }}
        className="py-5 my-5"
      >
        404: Error - Page not found
      </h1>
      <p className="text-center">There must be a mixup somewhere...</p>
      <Link
        to="/"
        style={{ border: "2px solid red !important" }}
        className="btn et-btn"
      >
        <i className="fas fa-house-chimney"></i>&nbsp;Go back home
      </Link>
    </div>
  );
}

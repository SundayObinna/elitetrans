import "../App.css";
import logo from "../assets/images/eliteTrans_icon_no-bg.png";

export default function Navbar() {
  const noRef = null; // To numb the <a> links

  return (
    <section className="header">
      <div className="container-fluid p-0">
        <nav
          className="navbar fixed-top navbar-expand-lg py-0"
          style={{ backgroundColor: "whitesmoke" }}
        >
          <div className="container">
            <a className="navbar-brand" href={noRef}>
              <img
                className="img-fluid"
                src={logo}
                alt="eliteTrans"
                width={100}
              />
            </a>
            <span
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i className="fas fa-ellipsis"></i>
            </span>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
              style={{ width: "85vw", backgroundColor: "whitesmoke" }}
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                  Menu
                </h5>
                <span
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <i className="fas fa-circle-xmark"></i>
                </span>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href={noRef}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href={noRef}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services&nbsp;<i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu et-dropdown">
                      <li>
                        <a className="dropdown-item" href={noRef}>
                          Ambulatory Service
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href={noRef}>
                          Specialized Care Service
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href={noRef}>
                          Vehicle Sale/Rental Service
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={noRef}>
                      About us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-disabled="true" href={noRef}>
                      Contact
                    </a>
                  </li>
                </ul>
                {/* <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form> */}
                <div className="social-links d-flex align-items-center">
                  <ul className="p-0 mb-0">
                    <li>
                      <a href={noRef}>
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={noRef}>
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={noRef}>
                        <i className="fa fa-google"></i>
                      </a>
                    </li>
                    <li>
                      <a href={noRef}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

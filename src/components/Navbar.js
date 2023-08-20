import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/images/eliteTrans_icon_no-bg.png";

export default function Navbar() {
  useEffect(() => {
    const handleLinkClick = () => {
      if (
        window.innerWidth <= 768 &&
        document.querySelector(".offcanvas.show")
      ) {
        document.querySelector(".offcanvas").classList.remove("show");
        document.querySelector(".offcanvas-backdrop").classList.remove("show");
        const pageContent =
          document.querySelector(".App .navbar").nextElementSibling;
        console.log(`${pageContent}\n`);
        if (pageContent) {
          console.log(pageContent.getAttribute("class"));
          pageContent.focus();
          console.log(`${pageContent} found!`);
        }
      }
    };

    const navLinks = document.querySelectorAll(".offcanvas a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <section className="header">
      <div className="container-fluid p-0">
        <nav
          className="navbar fixed-top navbar-expand-lg py-0"
          style={{ backgroundColor: "whitesmoke" }}
        >
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img
                className="img-fluid"
                src={logo}
                alt="eliteTrans"
                width={100}
              />
            </Link>
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
                    <Link
                      to="/"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to=""
                      className="nav-link"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services&nbsp;<i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu et-dropdown">
                      <li>
                        <Link to="/ambulatory" className="dropdown-item">
                          Ambulatory Service
                        </Link>
                      </li>
                      <li>
                        <Link to="/specialized" className="dropdown-item">
                          Specialized Care Service
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link to="sale-rental" className="dropdown-item">
                          Vehicle Sale/Rental Service
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/contact"
                      className="nav-link"
                      aria-disabled="true"
                    >
                      Contact
                    </Link>
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
                      <a href="./">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="./">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="./">
                        <i className="fa fa-google"></i>
                      </a>
                    </li>
                    <li>
                      <a href="./">
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

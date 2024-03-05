import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="d-flex col justify-content-between align-items-center mx-md-4 mx-lg-5 px-3">
      <Link
        to="/"
        className={currentPage === "/" ? "nav-link active" : "nav-link"}
      >
        About Me
      </Link>
      <Link
        to="/portfolio"
        className={currentPage === "/portfolio" ? "nav-link active" : "nav-link"}
      >
        Portfolio
        </Link>
        <Link
        to="/contact"
        className={currentPage === "/contact" ? "nav-link active" : "nav-link"}
      >
        Contact
        </Link>
      <Link
        to="/resume"
        className={currentPage === "/resume" ? "nav-link active" : "nav-link"}
      >
        Resume
        </Link>
    </nav>
  );
}

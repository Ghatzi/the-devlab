import Link from 'next/link';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link href="/">
      <a title="the-DevLab | portfolio of George Hatzi">
        <img
          src="/img/logo.png"
          alt="the-DevLab | portfolio of George Hatzi"
          className="logo"
        />
        the-DevLab | portfolio of George Hatzi
      </a>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link href="#intro">
            <a className="nav-link" title="Who am I?">
              Intro
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="#github">
            <a
              className="nav-item nav-link"
              title="Explore my GitHub repositories"
            >
              Repositories
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="#insta">
            <a
              className="nav-item nav-link"
              title="Check out my latest Instagram posts"
            >
              Posts
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="#courses">
            <a className="nav-item nav-link" title="Online courses">
              Courses
            </a>
          </Link>
        </li>

        <li>
          <Link href="#contact">
            <a className="nav-item nav-link" title="Get in touch">
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;

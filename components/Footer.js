import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

const date = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-section__nav">
        <ul>
          <li>
            <Link href="#intro">
              <a title="Back to top">Back to Top</a>
            </Link>
          </li>
          <li>
            <Link href="#github">
              <a title="Explore my GitHub repositories">Repositories</a>
            </Link>
          </li>
          <li>
            <Link href="#insta">
              <a title="Check out my latest Instagram posts">Posts</a>
            </Link>
          </li>
          <li>
            <Link href="#courses">
              <a title="Online courses">Courses</a>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <a title="Get in touch">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="social-icons">
        <ul>
          <li>
            <SocialIcon
              url="https://www.instagram.com/the_devlab/"
              title="Check out the-DevLab on Instagram"
              target="_blank"
              fgColor="#fff"
              bgColor="#2193B0"
              style={{ height: 35, width: 35 }}
            />
          </li>
          <li>
            <SocialIcon
              url="https://github.com/the-devlab/"
              title="Check out my work on GitHub"
              target="_blank"
              fgColor="#fff"
              bgColor="#2193B0"
              style={{ height: 35, width: 35 }}
            />
          </li>
          <li>
            <SocialIcon
              url="https://uk.linkedin.com/in/ghatzi"
              title="Check me out on LinkedIn"
              target="_blank"
              fgColor="#fff"
              bgColor="#2193B0"
              style={{ height: 35, width: 35 }}
            />
          </li>
          <li>
            <SocialIcon
              url="http://www.the-devlab.co.uk"
              title="Share this site"
              target="_blank"
              fgColor="#fff"
              bgColor="#2193B0"
              style={{ height: 35, width: 35 }}
            />
          </li>
        </ul>
      </div>
      <div className="footer-section__end">
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
        <div className="footer-section__copyright">
          &copy; the-DevLab - {date()} - All rights reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;

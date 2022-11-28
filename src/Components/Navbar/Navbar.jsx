import React, { useState } from "react";
import Toggle from "./Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import bars from "../../img/bars.png";

import { useContext } from "react";
import { themeContext } from "../../Context";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Portfolio</div>
        <Toggle />
      </div>

      {menuOpened === false && mobile === true ? (
        <div
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
            className="bars"
          />
        </div>
      ) : (
        <>
          <div className="n-right">
            <div className="n-list">
              <ul>
                <li>
                  <Link
                  to="intro" spy={true} smooth={true} offset={-50} duration={500}
                    className="link-1"
                    style={{ color: darkMode ? "white" : "" }}
                    onClick={() => setMenuOpened(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="service" spy={true} smooth={true} offset={-150} duration={500}
                    className="link-3"
                    style={{ color: darkMode ? "white" : "" }}
                    onClick={() => setMenuOpened(false)}
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    to="experience" spy={true} smooth={true} offset={-150} duration={500}
                    className="link-4"
                    style={{ color: darkMode ? "white" : "" }}
                    onClick={() => setMenuOpened(false)}
                  >
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link
                    to="testimonial" spy={true} smooth={true} offset={-100} duration={500}
                    className="link-5"
                    style={{ color: darkMode ? "white" : "" }}
                    onClick={() => setMenuOpened(false)}
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div className="button n-button">Contact</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;

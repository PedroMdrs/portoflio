import { NavLink, json } from "react-router-dom";
import Github from "./Icons/Github";
import Linkedin from "./Icons/Linkedin";
import { useThemeContext } from "../Context/Context";
import Moon from "./Icons/Moon";
import Sun from "./Icons/Sun";
import styles from "./Styles/Header.module.css";
import React from "react";

const Header = () => {
  const [mobileButton, setMobileButton] = React.useState(false);
  const { theme, setTheme } = useThemeContext();
  return (
    <header>
      <nav
        className={`${styles.nav} 
         ${styles[theme]}`}
      >
        <NavLink className={`${styles.logo}  ${styles[theme]}`} to={"/"} end>
          Pedro Medeiros
        </NavLink>

        <ul className={styles.routes}>
          <li>
            <NavLink className={styles.route} to={"projects"} end>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.route} to={"skills"} end>
              Skills
            </NavLink>
          </li>
        </ul>

        <div className={styles.icons}>
          <a href="https://github.com/PedroMdrs">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/pedro-henrique-medeiros/">
            <Linkedin />
          </a>
          {theme === "dark" ? (
            <div
              onClick={() => {
                setTheme(() => {
                  localStorage.setItem("theme", JSON.stringify("light"));
                  return "light";
                });
                document
                  .querySelector("body")
                  ?.setAttribute("data-theme", "light");
              }}
            >
              <Moon />
            </div>
          ) : (
            <div
              onClick={() => {
                setTheme(() => {
                  localStorage.setItem("theme", JSON.stringify("dark"));
                  return "dark";
                });
                document
                  .querySelector("body")
                  ?.setAttribute("data-theme", "dark");
              }}
            >
              <Sun />
            </div>
          )}
        </div>
      </nav>

      <nav
        className={`${styles.mobileNav} ${mobileButton ? styles.open : ""} ${
          styles[theme]
        }`}
      >
        <div className={styles[theme]}>
          <NavLink className={`${styles.logo}  ${styles[theme]}`} to={"/"} end>
            Pedro Medeiros
          </NavLink>
          <button
            className={`${styles.burger} ${styles[theme]} ${
              mobileButton ? styles.open : ""
            }`}
            onClick={() => setMobileButton((value) => !value)}
          >
            <div className={`${styles.burgerLines} ${styles[theme]}`}></div>
          </button>
          <div
            className={`${mobileButton ? "" : styles.menuClosed} ${
              styles.mobileMenu
            }`}
          >
            <ul className={styles.routes}>
              <li>
                <NavLink className={styles.route} to={"projects"} end>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.route} to={"skills"} end>
                  Skills
                </NavLink>
              </li>
            </ul>

            <div className={styles.icons}>
              <a className={styles[theme]} href="https://github.com/PedroMdrs">
                <Github />
              </a>
              <a
                className={styles[theme]}
                href="https://www.linkedin.com/in/pedro-henrique-medeiros/"
              >
                <Linkedin />
              </a>
              {theme === "dark" ? (
                <div
                  className={styles[theme]}
                  onClick={() => {
                    setTheme(() => {
                      localStorage.setItem("theme", JSON.stringify("light"));
                      return "light";
                    });
                    document
                      .querySelector("body")
                      ?.setAttribute("data-theme", "light");
                  }}
                >
                  <Moon />
                </div>
              ) : (
                <div
                  className={styles[theme]}
                  onClick={() => {
                    setTheme(() => {
                      localStorage.setItem("theme", JSON.stringify("dark"));
                      return "dark";
                    });
                    document
                      .querySelector("body")
                      ?.setAttribute("data-theme", "dark");
                  }}
                >
                  <Sun />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

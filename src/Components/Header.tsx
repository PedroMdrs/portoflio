import { NavLink } from "react-router-dom";
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
    <header className={styles[theme]}>
      <div className={styles.content}>
        <NavLink className={`${styles.logo}  ${styles[theme]}`} to={"/"} end>
          Pedro Medeiros
        </NavLink>
        <nav
          className={` 
         ${styles[theme]} ${mobileButton ? styles.open : ""}`}
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
          <ul className={styles.iconsMobile}>
            <li>
              <a className={styles[theme]} href="https://github.com/PedroMdrs">
                <Github />
              </a>
            </li>
            <li>
              <a
                className={styles[theme]}
                href="https://www.linkedin.com/in/pedro-henrique-medeiros/"
              >
                <Linkedin />
              </a>
            </li>
            <li className={styles[theme]}>
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
                  <Sun />
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
                  <Moon />
                </div>
              )}
            </li>
          </ul>
        </nav>{" "}
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
        <button
          title="menu"
          className={`${styles.burger} ${styles[theme]} ${
            mobileButton ? styles.open : ""
          }`}
          onClick={() => setMobileButton((value) => !value)}
        >
          <div className={`${styles.burgerLines} ${styles[theme]}`}></div>
        </button>
      </div>
    </header>
  );
};

export default Header;

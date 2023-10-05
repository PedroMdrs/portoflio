import { NavLink } from "react-router-dom";
import Github from "./Icons/Github";
import Linkedin from "./Icons/Linkedin";
import { useThemeContext } from "../Context/Context";
import Moon from "./Icons/Moon";
import Sun from "./Icons/Sun";
import styles from "./Styles/Header.module.css";
const Header = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <header>
      <nav
        className={`${styles.nav} 
         ${theme}`}
      >
        <NavLink className={`${styles.logo}`} to={"/"} end>
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
                setTheme("light");
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
                setTheme("dark");
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
    </header>
  );
};

export default Header;

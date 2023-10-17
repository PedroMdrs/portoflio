import { NavLink } from "react-router-dom";
import { useThemeContext } from "../Context/Context";
import Download from "./Icons/Download";
import styles from "./Styles/Home.module.css";
import Arrow from "./Icons/Arrow";
import Typewriter from "typewriter-effect";
import React from "react";

const Home = () => {
  const { theme } = useThemeContext();
  const [title, setTitle] = React.useState(false);
  return (
    <div className={styles.home}>
      <div className={`${styles.title}`}>
        <h1 id="title" className={styles[theme]}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .changeDelay(50)
                .typeString("Hi,")
                .pauseFor(500)
                .typeString(" I'm Pedro Medeiros")
                .callFunction(() => {
                  setTitle(true);
                })
                .start();
            }}
          ></Typewriter>
        </h1>
        <h2 id="sub-title" className={styles[theme]}>
          {title ? (
            <Typewriter
              options={{ skipAddStyles: false }}
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(25)
                  .typeString(
                    "A < Front-end Developer /> with lots of energy to learn new things."
                  )
                  .start();
              }}
            ></Typewriter>
          ) : (
            ""
          )}
        </h2>
      </div>
      <a
        title="Download Resume"
        className={styles[theme]}
        href="Resume.pdf"
        download="PedroMedeirosResume.pdf"
      >
        <Download /> <p>Download Resume</p>
      </a>
      <div title="Next Page" className={`${styles.tab} ${styles[theme]}`}>
        <NavLink to={"projects"}>
          <Arrow />
        </NavLink>
      </div>
    </div>
  );
};

export default Home;

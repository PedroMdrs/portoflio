import { NavLink } from "react-router-dom";
import { useThemeContext } from "../Context/Context";
import Download from "./Icons/Download";
import styles from "./Styles/Home.module.css";
import Arrow from "./Icons/Arrow";
import React from "react";

const Home = () => {
  const { theme } = useThemeContext();
  const [title, setTitle] = React.useState(false);

  return (
    <div className={styles.home}>
      <div className={`${styles.title}`}>
        <h1 id="title" className={styles[theme]}>
          Hi, I'm Pedro Medeiros
        </h1>
        <h2 id="sub-title" className={styles[theme]}>
          <div>A</div>
          <span>&lt; </span>
          <div>Front-End Developer </div>
          <span> /&gt; </span>
          <div>with lots of energy to learn new things.</div>
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

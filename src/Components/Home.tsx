import { NavLink } from "react-router-dom";
import { useThemeContext } from "../Context/Context";
import Download from "./Icons/Download";
import styles from "./Styles/Home.module.css";
import Arrow from "./Icons/Arrow";
import Typewriter from "./Typewriter";

const Home = () => {
  const { theme } = useThemeContext();

  return (
    <div className={styles.home}>
      <div className={`${styles.title}`}>
        <h1 id="title" className={styles[theme]}>
          <Typewriter text="Hi, " />
          <Typewriter container={"span"} text=" I'm Pedro Medeiros" delay={1} />
        </h1>
        <h2 id="sub-title" className={styles[theme]}>
          <Typewriter text="A " speed={30} delay={4} />
          <Typewriter container={"span"} text=" < " speed={30} delay={4.1} />
          <Typewriter text="Front-End Developer" speed={30} delay={4.2} />
          <Typewriter container={"span"} text=" /> " speed={30} delay={4.2} />
          <Typewriter
            text="with lots of energy to learn new things."
            speed={30}
            delay={4.9}
          />
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

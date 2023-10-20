import { NavLink } from "react-router-dom";
import { useThemeContext } from "../Context/Context";
import Download from "./Icons/Download";
import styles from "./Styles/Home.module.css";
import Arrow from "./Icons/Arrow";
import Typewriter from "./Typewriter";
import React from "react";

const Home = () => {
  const { theme } = useThemeContext();
  const [cursor1, setCursor1] = React.useState("");
  const [cursor2, setCursor2] = React.useState("hide");
  const [button, setButton] = React.useState(false);
  const [nextButton, setNextButton] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setCursor1("hide");
    }, 3800);
    setTimeout(() => {
      setCursor2("show");
    }, 4000);
    setTimeout(() => {
      setCursor2("hide");
    }, 6000);
    setTimeout(() => {
      setButton(true);
    }, 7000);
    setTimeout(() => {
      setNextButton(true);
    }, 7500);
  }, []);
  return (
    <div className={styles.home}>
      <div className={`${styles.title}`}>
        <h1 id="title" className={styles[theme]}>
          <div className={styles.typewriterContainer}>
            <Typewriter text="Hi, " />
            <Typewriter text=" I'm Pedro Medeiros" delay={1} />
          </div>
          <span data-cursor={cursor1 === "hide" ? "hide" : ""}>|</span>
        </h1>
        <h2 id="sub-title" className={styles[theme]}>
          <div className={styles.typewriterContainer}>
            <Typewriter text="A " speed={30} delay={4} />
            <Typewriter container={"span"} text=" < " speed={30} delay={4.1} />
            <Typewriter text="Front-End Developer" speed={30} delay={4.2} />
            <Typewriter container={"span"} text=" /> " speed={30} delay={4.2} />
            <Typewriter
              text="with lots of energy to learn new things."
              speed={30}
              delay={4.8}
            />
          </div>
          <span data-cursor={cursor2 === "hide" ? "hide" : ""}>|</span>
        </h2>
      </div>
      <a
        title="Download Resume"
        className={`${styles[theme]} ${button ? styles.slideUp : ""}`}
        href="Resume.pdf"
        download="PedroMedeirosResume.pdf"
      >
        <Download /> <p>Download Resume</p>
      </a>
      <div
        title="Next Page"
        className={`${styles.tab} ${styles[theme]} ${
          nextButton ? styles.slideRight : ""
        }`}
      >
        <NavLink to={"projects"}>
          <Arrow />
        </NavLink>
      </div>
    </div>
  );
};

export default Home;

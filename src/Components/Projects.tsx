import { NavLink } from "react-router-dom";
import { useThemeContext } from "../Context/Context";
import styles from "./Styles/Projects.module.css";
import Arrow from "./Icons/Arrow";

const Projects = () => {
  const { theme } = useThemeContext();
  return (
    <section className={styles.projects}>
      <h3 className={styles[theme]}>Projects</h3>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles[theme]}`}>
          <p className={styles[theme]}>Trading Archives</p>
          <p className={styles[theme]}>
            Analytics Tool for Crypto Traders. Built with Typescript, React and
            MUIMaterial.
          </p>
          <a href="https://pedromdrs.github.io/trading-archives/">
            See Project
          </a>
        </div>
        <div className={`${styles.card} ${styles[theme]}`}>
          <p className={` ${styles[theme]}`}>Decentralized Twitter/𝕏</p>
          <p className={styles[theme]}>
            Web 3 version of twitter built on top of Ethereum Blockchain. Built
            with Javascript, React, VueJs and Tailwind.
          </p>
          <a href="https://x-front-end-kappa.vercel.app/">See Project</a>
        </div>
        <div className={`${styles.card} ${styles[theme]}`}>
          <p className={` ${styles[theme]}`}>Countries</p>
          <p className={styles[theme]}>
            An application to search any country and visualize detailed
            informations about it. Built with Typescript, React and Sass.
          </p>
          <a href="https://pedromdrs.github.io/countries/">See Project</a>
        </div>
        <div className={`${styles.card} ${styles[theme]}`}>
          <p className={styles[theme]}>Portfolio</p>
          <p className={styles[theme]}>
            This website. Built with Typescript, React and Sass.
          </p>
          <a href="https://pedromdrs.github.io/site/">See Project</a>
        </div>
        <div className={`${styles.card} ${styles[theme]}`}>
          <p className={styles[theme]}>Multi Step Form</p>
          <p className={styles[theme]}>
            A template for a multi step form built with HTML, CSS, Javascript
            and React.
          </p>
          <a href="https://multi-step-form-weld-nine.vercel.app/">
            See Project
          </a>
        </div>
        <div className={`${styles.card} ${styles[theme]}`}>
          <p className={styles[theme]}>W.</p>
          <p className={styles[theme]}>
            News website built with HTML, CSS and Javascript.
          </p>
          <a href="https://pedromdrs.github.io/News-Home-Page/">See Project</a>
        </div>
        <div className={`${styles.card} ${styles[theme]}`}>
          <p className={styles[theme]}>???</p>
          <p className={styles[theme]}>Working on it 🤫</p>
        </div>
      </div>
      <a
        title="See all repositories in github"
        href="https://github.com/PedroMdrs?tab=repositories"
        className={styles.repo}
      >
        Github Repositories
      </a>
      <div className={`${styles.tab} ${styles[theme]}`}>
        <NavLink title="Previous Page" to={"/"}>
          <Arrow />
        </NavLink>
        <NavLink title="Next Page" to={"/skills"}>
          <Arrow />
        </NavLink>
      </div>
    </section>
  );
};

export default Projects;

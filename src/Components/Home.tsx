import { useThemeContext } from "../Context/Context";
import styles from "./Styles/Home.module.css";

const Home = () => {
  const { theme } = useThemeContext();

  return (
    <div className={styles.home}>
      <div className={`${styles.title}`}>
        <h1 className={styles[theme]}>Hi, I'm Pedro Medeiros</h1>
        <h2 className={styles[theme]}>
          <span>&lt;/</span> A Front-end Developer <span>&gt; </span>with lots
          of energy to learn new things.
        </h2>
      </div>
      <a
        className={styles[theme]}
        href="Resume.pdf"
        download="PedroMedeirosResume.pdf"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Home;

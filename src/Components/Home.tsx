import styles from "./Styles/home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1>Hi I'm Pedro Medeiros</h1>
        <h2>
          <span>&lt;/</span> A Front-end Developer <span>&gt; </span>with an
          infinite energy to learn new things.
        </h2>
      </div>
      <a href="Resume.pdf" download="PedroMedeirosResume.pdf">
        Download Resume
      </a>
    </div>
  );
};

export default Home;

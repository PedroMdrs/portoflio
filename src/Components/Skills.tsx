import React from "react";
import Html from "./Icons/Html";
import Css from "./Icons/Css";
import Javascript from "./Icons/Javascript";
import ReactIcon from "./Icons/ReactIcon";
import Typescript from "./Icons/Typescript";
import Sass from "./Icons/Sass";
import Bootstrap from "./Icons/Bootstrap";
import Mongodb from "./Icons/Mongodb";
import styles from "./Styles/Skills.module.css";
import { useThemeContext } from "../Context/Context";

const Skills = () => {
  const [activeIcon, setActiveIcon] = React.useState("html");
  const { theme } = useThemeContext();

  return (
    <section className={styles.skills}>
      <h3 className={styles[theme]}>Skills</h3>
      <div className={styles.cardDesc}>
        {activeIcon === "html" ? (
          <div>
            <p className={styles[theme]}>HTML</p>
            <p className={styles[theme]}>
              HTML is a standard markup language for web page creation. It
              allows the creation and structure of sections, paragraphs, and
              links using HTML elements.
            </p>
          </div>
        ) : (
          ""
        )}
        {activeIcon === "css" ? (
          <div>
            <p className={styles[theme]}>CSS</p>
            <p className={styles[theme]}>
              CSS is a stylesheet language and describes how elements should be
              rendered on screen, on paper, in speech, or on other media.
            </p>
          </div>
        ) : (
          ""
        )}
        {activeIcon === "javascript" ? (
          <div>
            <p className={styles[theme]}>Javascript</p>
            <p className={styles[theme]}>
              Javascript is a dynamic programming language that allows you to
              implement dynamic elements to your page.
            </p>
          </div>
        ) : (
          ""
        )}
        {activeIcon === "react" ? (
          <div>
            <p className={styles[theme]}>React</p>
            <p className={styles[theme]}>
              React is a JavaScript library for building user interfaces.
            </p>
          </div>
        ) : (
          ""
        )}
        {activeIcon === "typescript" ? (
          <div>
            <p className={styles[theme]}>Typescript</p>
            <p className={styles[theme]}>
              TypeScript is a programming language that's a superset of
              JavaScript, which means it understands all of JavaScript's syntax
              and capabilities, while adding additional features.
            </p>
          </div>
        ) : (
          ""
        )}
        {activeIcon === "sass" ? (
          <div>
            <p className={styles[theme]}>Sass</p>
            <p className={styles[theme]}>
              Sass is a preprocessor that contains features that don't exist in
              CSS yet like nesting, mixins, inheritance etc.
            </p>
          </div>
        ) : (
          ""
        )}
        {activeIcon === "bootstrap" ? (
          <div>
            <p className={styles[theme]}>Bootstrap</p>
            <p className={styles[theme]}>
              Bootstrap is a front-end framework that provides CSS structures
              for creating responsive websites and applications quickly and
              simply.
            </p>
          </div>
        ) : (
          ""
        )}
        {activeIcon === "mongodb" ? (
          <div>
            <p className={styles[theme]}>MongoDB</p>
            <p className={styles[theme]}>
              MongoDB is a document database used to build highly available and
              scalable internet applications.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.iconsCard}>
        <div
          className={styles[theme]}
          onMouseOver={() => setActiveIcon("html")}
        >
          <Html />
        </div>
        <div className={styles[theme]} onMouseOver={() => setActiveIcon("css")}>
          <Css />
        </div>
        <div
          className={styles[theme]}
          onMouseOver={() => setActiveIcon("javascript")}
        >
          <Javascript />
        </div>
        <div
          className={styles[theme]}
          onMouseOver={() => setActiveIcon("react")}
        >
          <ReactIcon />
        </div>
        <div
          className={styles[theme]}
          onMouseOver={() => setActiveIcon("typescript")}
        >
          <Typescript />
        </div>
        <div
          className={styles[theme]}
          onMouseOver={() => setActiveIcon("sass")}
        >
          <Sass />
        </div>
        <div
          className={styles[theme]}
          onMouseOver={() => setActiveIcon("bootstrap")}
        >
          <Bootstrap />
        </div>
        <div
          className={styles[theme]}
          onMouseOver={() => setActiveIcon("mongodb")}
        >
          <Mongodb />
        </div>
      </div>
    </section>
  );
};

export default Skills;

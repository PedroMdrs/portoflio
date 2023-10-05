import React from "react";
import Html from "./Icons/Html";
import Css from "./Icons/Css";
import Javascript from "./Icons/Javascript";
import ReactIcon from "./Icons/ReactIcon";
import Typescript from "./Icons/Typescript";
import Sass from "./Icons/Sass";
import Bootstrap from "./Icons/Bootstrap";
import Mongodb from "./Icons/Mongodb";

const Skills = () => {
  const [activeIcon, setActiveIcon] = React.useState("html");
  return (
    <section>
      <h3>Skills</h3>
      <div>
        {activeIcon === "html" ? (
          <div>
            <p>HTML</p>
            <p>
              HTML is a standard markup language for web page creation. It
              allows the creation and structure of sections, paragraphs, and
              links using HTML elements
            </p>
          </div>
        ) : (
          ""
        )}
        {activeIcon === "css" ? (
          <div>
            <p>Css</p>
            <p>
              CSS is a stylesheet language and describes how elements should be
              rendered on screen, on paper, in speech, or on other media.
            </p>
          </div>
        ) : (
          ""
        )}
        {activeIcon === "javascript" ? (
          <div>
            <p>Javascript</p>
            <p>
              Javascript is a dynamic programming language that allows you to
              implement dynamic elements to your page
            </p>
          </div>
        ) : (
          ""
        )}
        {activeIcon === "react" ? (
          <div>
            <p>React</p>
            <p>React is a JavaScript library for building user interfaces.</p>
          </div>
        ) : (
          ""
        )}
        {activeIcon === "typescript" ? (
          <div>
            <p>Typescript</p>
            <p>
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
            <p>Sass</p>
            <p>
              Sass is a preprocessor that contains features that don't exist in
              CSS yet like nesting, mixins, inheritance etc.
            </p>
          </div>
        ) : (
          ""
        )}
        {activeIcon === "bootstrap" ? (
          <div>
            <p>Bootstrap</p>
            <p>
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
            <p>Mongodb</p>
            <p>
              MongoDB is a document database used to build highly available and
              scalable internet applications.
            </p>
          </div>
        ) : (
          ""
        )}
        {activeIcon === "empty" ? (
          <div>
            <p>More skills on the way</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <div onMouseOver={() => setActiveIcon("html")}>
          <Html />
        </div>
        <div onMouseOver={() => setActiveIcon("css")}>
          <Css />
        </div>
        <div onMouseOver={() => setActiveIcon("javascript")}>
          <Javascript />
        </div>
        <div onMouseOver={() => setActiveIcon("react")}>
          <ReactIcon />
        </div>
        <div onMouseOver={() => setActiveIcon("typescript")}>
          <Typescript />
        </div>
        <div onMouseOver={() => setActiveIcon("sass")}>
          <Sass />
        </div>
        <div onMouseOver={() => setActiveIcon("bootstrap")}>
          <Bootstrap />
        </div>
        <div onMouseOver={() => setActiveIcon("mongodb")}>
          <Mongodb />
        </div>
        <div onMouseOver={() => setActiveIcon("empty")}></div>
      </div>
    </section>
  );
};

export default Skills;

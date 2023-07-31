import React from "react";
import Icons from "./Icons";
import { ReactComponent as Html } from "/public/html.svg";
import { ReactComponent as Css } from "/public/css.svg";
import { ReactComponent as JavaScript } from "/public/javascript.svg";
import { ReactComponent as Figma } from "/public/figma.svg";
import { ReactComponent as ReactIcon } from "/public/react.svg";
import { ReactComponent as Node } from "/public/nodejs.svg";
import { ReactComponent as Sass } from "/public/sass.svg";
import { ReactComponent as Bootstrap } from "/public/bootstrap.svg";
import { ReactComponent as Wordpress } from "/public/wordpress.svg";
import { ReactComponent as Mongo } from "/public/mongodb.svg";
import { ReactComponent as Jquery } from "/public/jquery.svg";
import { ReactComponent as Firebase } from "/public/firebase.svg";
import { ReactComponent as TradingArchivesIcon } from "/public/tradingArchivesLogo.svg";
import { HashLink } from "react-router-hash-link";
import styles from "./css/MainPage.module.css";

const Mainpage = () => {
  const [linkedin, setLinkedin] = React.useState(false);
  const [linkedin2, setLinkedin2] = React.useState(false);
  const [github, setGithub] = React.useState(false);
  const [github2, setGithub2] = React.useState(false);
  const [github3, setGithub3] = React.useState(false);
  const [instagram, setInstagram] = React.useState(false);
  const [instagram2, setInstagram2] = React.useState(false);
  const [menuMobile, setMenuMobile] = React.useState(false);

  React.useEffect(() => {
    setMenuMobile(false);
  }, []);
  return (
    <>
      <nav
        className={` ${styles.navMobile} ${
          menuMobile ? `${styles.show}` : `${styles.hide}`
        }`}
      >
        <ul className={`${styles.mobileMenu}`}>
          <li onClick={() => setMenuMobile(false)}>
            <div></div>
          </li>
          <li>
            <HashLink onClick={() => setMenuMobile(false)} to="/#experiencia">
              experiência
            </HashLink>
          </li>
          <li>
            <HashLink onClick={() => setMenuMobile(false)} to="/#habilidades">
              habildades
            </HashLink>
          </li>
          <li>
            <HashLink onClick={() => setMenuMobile(false)} to="/#formacao">
              formação
            </HashLink>
          </li>
          <li>
            <HashLink onClick={() => setMenuMobile(false)} to="/#contato">
              contato
            </HashLink>
          </li>
        </ul>
        <ul className={`${styles.mobileIcons}`}>
          <li
            onMouseOver={() => setLinkedin2(true)}
            onMouseOut={() => setLinkedin2(false)}
          >
            <a href="https://www.linkedin.com/in/pedro-henrique-medeiros/">
              <Icons icon={"linkedin"} active={linkedin2} />
            </a>
          </li>
          <li
            onMouseOver={() => setGithub3(true)}
            onMouseOut={() => setGithub3(false)}
          >
            <a href="https://github.com/PedroMdrs/">
              <Icons icon={"github"} active={github3} />
            </a>
          </li>
          <li
            onMouseOver={() => setInstagram2(true)}
            onMouseOut={() => setInstagram2(false)}
          >
            <a href="https://www.instagram.com/pedro.mdrs_/">
              <Icons icon={"instagram"} active={instagram2} />
            </a>
          </li>
        </ul>
      </nav>
      {!menuMobile && (
        <div className={`${styles.headerMobile}`}>
          <HashLink to="/#container" className={`${styles.name}`}>
            Pedro Medeiros<span>.</span>
          </HashLink>
          <button
            className={`${styles.openButton}`}
            onClick={() => {
              setMenuMobile(true);
            }}
          ></button>
        </div>
      )}
      <div className={`${styles.email}`}>
        <a href="mailto:contatopedromdrs@outlook.com">
          CONTATOPEDROMDRS@OUTLOOK.COM
        </a>
      </div>
      <div className={`${styles.container}`} id="container">
        <ul className={`${styles.iconsNavContainer}`}>
          <li
            onMouseOver={() => setLinkedin(true)}
            onMouseOut={() => setLinkedin(false)}
          >
            <a href="https://www.linkedin.com/in/pedro-henrique-medeiros/">
              <Icons icon={"linkedin"} active={linkedin} />
            </a>
          </li>
          <li
            onMouseOver={() => setGithub(true)}
            onMouseOut={() => setGithub(false)}
          >
            <a href="https://github.com/PedroMdrs">
              <Icons icon={"github"} active={github} />
            </a>
          </li>
          <li
            onMouseOver={() => setInstagram(true)}
            onMouseOut={() => setInstagram(false)}
          >
            <a href="https://www.instagram.com/pedro.mdrs_/">
              <Icons icon={"instagram"} active={instagram} />
            </a>
          </li>
        </ul>

        <div className={`${styles.nameContainer} animeLeft`}>
          <div className={`${styles.titles}`}>
            <h2>Front-End Developer</h2>
            <h1>
              Pedro Medeiros<span>.</span>
            </h1>
          </div>
          <a href="Curriculo.pdf" download={"CurriculoPedroMedeiros"}>
            Currículo
          </a>
        </div>
      </div>
      <section className={`${styles.experiencia}`} id="experiencia">
        <h3>experiência</h3>
        <div className={`${styles.exp1}`}>
          <h4>trading archives </h4>
          <div className={`${styles.exp1Description}`}>
            <p>
              Trading Archives é um <span>aplicativo web</span> criado por mim
              que oferece aos usuários a possibilidade de acompanhar seus lucros
              e perdas nas negociações realizadas na corretora Binance por meio
              de um gráfico intuitivo.
            </p>
            <ul className={`${styles.techs}`}>
              <li className={`${styles.html}`}>HTML</li>
              <li className="css">CSS</li>
              <li className="javascript">JavaScript</li>
              <li className="react">React</li>
              <li className="uidesign">Ui Design</li>
            </ul>
          </div>
          <div className={`${styles.exp1Content}`}>
            <div>
              <TradingArchivesIcon />
            </div>
            <div>
              <a
                onMouseOver={() => setGithub2(true)}
                onMouseOut={() => setGithub2(false)}
                href="https://github.com/PedroMdrs/trading-archives"
              >
                <Icons icon={"github"} active={github2} />
              </a>
              <a href="https://pedromdrs.github.io/trading-archives/">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.habilidades}`} id="habilidades">
        <h3>habilidades</h3>

        <ul className={`${styles.icons}`}>
          <li>
            <Html />
          </li>
          <li>
            <Css />
          </li>
          <li>
            <JavaScript />
          </li>
          <li>
            <Figma />
          </li>
          <li>
            <ReactIcon />
          </li>
          <li>
            <Node />
          </li>
          <li>
            <Sass />
          </li>
          <li>
            <Bootstrap />
          </li>
          <li>
            <Wordpress />
          </li>
          <li>
            <Mongo />
          </li>
          <li>
            <Jquery />
          </li>
          <li>
            <Firebase />
          </li>
        </ul>
      </section>
      <section className={`${styles.formacao}`} id="formacao">
        <h3>formação</h3>
        <div className={`${styles.formacaoContent}`}>
          <div className={`${styles.cursos}`}>
            <h4>CURSOS</h4>
            <div>
              <ul>
                <li>
                  Desenvolvimento Web Full Stack ProgBr <span>50H</span>
                </li>
                <li>
                  React Completo Origamid <span>36H</span>
                </li>
                <li>
                  UI/UX Origamid <span>36H</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.idiomas}`}>
            <h4>idiomas</h4>
            <div>
              <ul>
                <li>
                  Português <span>/ </span>
                  <span> Língua materna</span>
                </li>
                <li>
                  Ingles <span>/ </span>
                  <span> Fluente</span>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <section className={`${styles.contato}`} id="contato">
        <h3>contato</h3>
        <div>
          <p className={`${styles.emailContato}`}>
            CONTATOPEDROMDRS@OUTLOOK.COM
          </p>
          <p>
            Estou disponível para vagas de emprego no momento.
            <span> Entre em contato comigo</span> com os detalhes da proposta.
          </p>
          <form
            action="https://formsubmit.co/contatopedromdrs@outlook.com"
            method="POST"
          >
            <label htmlFor="">
              Seu Nome
              <input required name="name" type="text"></input>
            </label>
            <label htmlFor="">
              Seu Email
              <input name="email" type="email" required></input>
            </label>
            <label htmlFor="">
              Mensagem
              <textarea type="text" name="message" required></textarea>
            </label>
            <input
              type="hidden"
              name="_next"
              value="https://pedromdrs.github.io/portoflio/#/thanks"
            />

            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Mainpage;

import React from "react";
import './header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGithubAlt, faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";



function Header({onAboutMeClick, onProjectClick}) {
  
    return (
        <div>
            <div className="container-header">

                <div className="navigation">
                    <ul>
                        <li onClick={onAboutMeClick}>Sobre Mim</li>
                        <li onClick={onProjectClick}>Projetos</li>
                        <li>Skills</li>
                        <li>Contato</li>
                    </ul>
                </div>

                <div className="box-header">
                    <div className="titulo">
                        <h1><span>Eu sou</span> Bruno Teixeira</h1>
                        <h2>Desenvolvedor Front-End</h2>
                    </div>
                    <div className="img">
                        <img src="https://raw.githubusercontent.com/brunotxrs/dev-links/d0021d8d8e5a663121f72bf62353a067a091eb8a/src/assets/img/avatar-light.svg" alt="imagem de Bruno Teixeira de Óculos" />
                    </div>
                </div>

                <div className="about">
                    <p>Desenvolvedor Front-End com paixão por transformar ideias em experiências web impactantes.</p>
                </div>

                <div className="link-social">
                    <ul>
                        <li><a href="https://github.com/brunotxrs" target="_blank">
                            <FontAwesomeIcon className="social" icon={faGithub} />
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/brunotxrs/" target="_blank"><FontAwesomeIcon className="linkedin" icon={faLinkedinIn} /></a></li>
                        
                        <li></li>
                    </ul>
                </div>

                

            </div>

        </div>
    );
};

export default Header;
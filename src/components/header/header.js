import React from "react";
import './header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";



function Header({ onProjectClick, onSkillsClick }) {
  
    return (
        <div>
            <div className="container-header">

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

                <div className="link-social" 
                style={{ 
                    display: 'flex', 
                    width: '100%', 
                    height: '50px', 
                    alignItems: 'center',justifyContent: 'right'
                    }}>
                    
                    <ul className="box-links" 
                    style={{ 
                        width: '80%',
                        height: '100%', 
                        display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent: 'space-evenly'
                     }}>
                        <li 
                        style={{ 
                            listStyle: 'none', height: '70%', 
                            width: '15%', 
                            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', 
                            borderRadius: '9999px' 
                            }}>
                            <a href="https://github.com/brunotxrs" target="_blank"
                            style={{ 
                                 height: '100%', 
                                width: '100%', 
                                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                borderRadius: '9999px'
                            }}>
                            <FontAwesomeIcon 
                            style={{ 
                                height: '100%', 
                                width: '100%',  
                                borderRadius: '9999px' 
                            }}
                            className="github" icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/brunotxrs/" target="_blank"
                            style={{  }}
                            ><FontAwesomeIcon className="linkedin" icon={faLinkedinIn} /></a>
                        </li>
                        
                        {/* <li>
                            <a href=""><FontAwesomeIcon className="instagram" icon={faInstagram} /></a>
                        </li> */}
                    </ul>
                </div>

                <div className="navigation">
                    <ul className="box-links">
                        <li onClick={onProjectClick}><span>Projetos</span></li>

                        <li onClick={onSkillsClick}><span>habilidades</span></li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Header;
import React from "react";
import './header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from '../../context/LanguageContext'
import { faGlobe } from "@fortawesome/free-solid-svg-icons";



function Header({ onProjectClick, onSkillsClick }) {
  
    const { language, changeLanguage, getTranslation } = useLanguage();

    const handleLanguageChange = (event) => {
        changeLanguage(event.target.value);
    };


    return (
        <div>
            <div className="container-header">

                <div className="language">
                    <label htmlFor="language"><span><FontAwesomeIcon className="world" icon={faGlobe}/></span></label>

                    <select id="language" value={language} onChange={handleLanguageChange}>
                        <option value="pt" >Português</option>
                        <option value="en">English</option>
                    </select>
                </div>

                <div className="box-header">
                    <div className="titulo">
                        <h1><span>{getTranslation('euSou')}</span>Bruno Teixeira</h1>
                        <h2>{getTranslation('desenvolvedorFrontEnd')}</h2>
                    </div>
                    <div className="img">
                        <img src="https://raw.githubusercontent.com/brunotxrs/dev-links/d0021d8d8e5a663121f72bf62353a067a091eb8a/src/assets/img/avatar-light.svg" alt="imagem de Bruno Teixeira de Óculos" />
                    </div>
                </div>

                <div className="about">
                    <p>{getTranslation('sobreMim')}</p>
                </div>  

                <div className="link-social" 
                style={{ height: '50px' }}
                >
                    
                    <ul className="box-links"
                     style={{display:'flex',  flexDirection: 'row', alignItems: 'center' }}
                    >
                        <li 
                        style={{ 
                            display: 'flex',
                            borderRadius: '9999px',
                            flexDirection: 'row',
                            justifyContent: 'center', 
                            }}>
                            <a
                            style={{ 
                                height: '100%', 
                                width: '100%', 
                                display: 'flex', 
                                alignItems: 'center', justifyContent: 'center'
                           }}
                            href="https://github.com/brunotxrs" target="_blank"
                            >
                            <FontAwesomeIcon 
                            className="github" icon={faGithub} />
                            </a>
                        </li>

                        <li 
                        style={{ 
                            display: 'flex',
                            borderRadius: '9999px',
                            flexDirection: 'row',
                            justifyContent: 'center', 
                            }}>
                            <a
                            style={{ 
                                height: '100%', 
                                width: '100%', 
                                display: 'flex', 
                                alignItems: 'center', justifyContent: 'center'
                           }} 
                            href="https://www.linkedin.com/in/brunotxrs/" target="_blank"
                            ><FontAwesomeIcon className="linkedin" icon={faLinkedinIn} /></a>
                        </li>
                        
                    </ul>
                </div>

                <div className="navigation">
                    <ul className="box-links" 
                    style={{
                        display:'flex',  flexDirection: 'row', alignItems: 'center' ,             justifyContent: 'space-around'
                    }}
                    >
                        <li 
                        style={{
                            display:'flex',  flexDirection: 'row', alignItems: 'center' ,             justifyContent: 'center'
                        }}
                        onClick={onProjectClick}><span
                        style={{
                            display:'flex',  flexDirection: 'row', alignItems: 'center' ,             justifyContent: 'center'
                        }}
                        >{ getTranslation('projetos') }</span></li>

                        <li 
                        style={{
                            display:'flex',  flexDirection: 'row', alignItems: 'center' ,             justifyContent: 'center'
                        }} 
                        onClick={onSkillsClick}><span 
                        style={{
                            display:'flex',  flexDirection: 'row', alignItems: 'center' ,             justifyContent: 'center'
                        }}
                        >{getTranslation('habilidades')}</span></li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Header;
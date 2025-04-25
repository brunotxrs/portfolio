import React from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faFigma, faGitAlt, faGithub, faHtml5, faJs, faNpm, faReact } from "@fortawesome/free-brands-svg-icons";
import { useCertificados } from "../../context/CertificadosContext";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";



function Skills() {

    const { certificados, certificadosExibidos, certificadoSelecionado, exibirCertificados, selecionarCertificado, fecharCertificados } = useCertificados();
    

    return(
        <div>

            <div className="container-skills">
                <h2>Habilidades</h2>
                <p>Front-End:</p>

                <div className="skills">
                    <ul>
                        <li onClick={() => exibirCertificados("HTML")}><span title="HTML5" aria-label="HTML5"><FontAwesomeIcon className="html" icon={faHtml5} /></span></li>
                        <li><span><FontAwesomeIcon className="css" icon={faCss3Alt} /></span></li>
                        <li><span><FontAwesomeIcon className="js" icon={faJs} /></span></li>
                        <li><span><FontAwesomeIcon className="react" icon={faReact} /></span></li>
                    </ul>
                </div>

                <p>Ferramentas:</p>

                <div className="skills">
                    <ul>
                        <li><span><FontAwesomeIcon className="git" icon={faGitAlt} /></span></li>
                        <li><span><FontAwesomeIcon className="github" icon={faGithub} /></span></li>
                        <li><span><FontAwesomeIcon className="npm" icon={faNpm} /></span></li>
                        <li><span><FontAwesomeIcon className="figma" icon={faFigma} /></span></li>
                        
                    </ul>
                </div>


                {certificadosExibidos && (
                    <div className="overlay">
                        <div className="certificados-lista">
                            <h3>Certificados de {Object.keys(certificados).find(key => certificados[key] === certificadosExibidos)}</h3>
                            <ul>
                                {certificadosExibidos.map((certificado, index) => (
                                    <li key={index} onClick={() => selecionarCertificado(certificado.certificadoUrl)}>
                                        {certificado.titulo}<span><FontAwesomeIcon icon={faEye}/></span>
                                    </li>
                                ))}
                            </ul>

                            <button onClick={fecharCertificados}>Fechar</button>
                            
                        </div>
                    </div>
                )}
                

                {certificadoSelecionado && (
                    <div
                        className="certificado-detalhe"
                        style={{ backgroundImage: `url(${certificadoSelecionado})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                    >
                        <button onClick={() => fecharCertificados()}><FontAwesomeIcon icon={faEyeSlash} /></button>
                    </div>
                )}

            </div>

        </div>
    );
};

export default Skills;
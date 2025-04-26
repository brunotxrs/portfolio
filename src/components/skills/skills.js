import React, { useState } from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faFigma, faGitAlt, faGithub, faHtml5, faJs, faNpm, faReact } from "@fortawesome/free-brands-svg-icons";
import { useCertificados } from "../../context/CertificadosContext";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faBrain, faCertificate, faXmark } from "@fortawesome/free-solid-svg-icons";

function Skills() {
    const { certificados, certificadosExibidos, certificadoSelecionado, exibirCertificados, selecionarCertificado, fecharCertificados } = useCertificados();
    const [exibirCertificadoDetalhe, setExibirCertificadoDetalhe] = useState(false);
    const [urlCertificadoDetalhe, setUrlCertificadoDetalhe] = useState(null);

    const handleVisualizarCertificado = (url) => {
        setUrlCertificadoDetalhe(url);
        setExibirCertificadoDetalhe(true);
    };

    const handleFecharCertificadoDetalhe = () => {
        setUrlCertificadoDetalhe(null);
        setExibirCertificadoDetalhe(false);
    };

    return (
        <div>

            <div className="container-skills">

                <div>
                    <h2>Habilidades</h2>
                    <p>Explore minhas habilidades clicando nos ícones abaixo.</p>
                </div>
   
                <div className="skills">
                    <p>Front-End:</p>
                    <ul>
                        <li onClick={() => exibirCertificados("HTML")}><span title="HTML5" aria-label="HTML5"><FontAwesomeIcon className="html" icon={faHtml5} /></span></li>

                        <li onClick={() => exibirCertificados("CSS")}><span title="CSS3" aria-label="CSS3"><FontAwesomeIcon className="css" icon={faCss3Alt} /></span></li>

                        <li onClick={() => exibirCertificados("JavaScript")}><span title="JavaScript" aria-label="JavaScript"><FontAwesomeIcon className="js" icon={faJs} /></span></li>

                        <li onClick={() => exibirCertificados("React.js")}><span title="React.js" aria-label="React.js"><FontAwesomeIcon className="react" icon={faReact} /></span></li>
                    </ul>
                </div>

                <div className="skills">
                    <p>Ferramentas:</p>
                    <ul>
                        <li onClick={() => exibirCertificados("Git")}><span title="Git" aria-label="Git"><FontAwesomeIcon className="git" icon={faGitAlt} /></span></li>

                        <li><span title="Github" aria-label="Github"><FontAwesomeIcon className="github" icon={faGithub} /></span></li>

                        <li onClick={() => exibirCertificados("npm")}><span  title="npm" aria-label="npm"><FontAwesomeIcon className="npm" icon={faNpm} /></span></li>
                        
                        <li onClick={() => exibirCertificados("Figma")}><span title="Figma" aria-label="Figma"><FontAwesomeIcon className="figma" icon={faFigma} /></span></li>
                    </ul>
                </div>

                <div className="skills">
                    <p>Outros:</p>
                    <ul>
                        <li onClick={() => exibirCertificados("Lógica de Programação")}><span title="Lógica de Programação" aria-label="Lógica de Programação"><FontAwesomeIcon className="logic" icon={faBrain} /></span></li>

                        <li onClick={() => exibirCertificados("Complementares")}><span title="Certificados" aria-label="Certificados"><FontAwesomeIcon className="certificate" icon={faCertificate} /></span></li>

                       
                    </ul>
                </div>

                {certificadosExibidos && !exibirCertificadoDetalhe && (
                    <div className="overlay">
                        <div className="certificados-lista">
                            <h3>Certificados de {Object.keys(certificados).find(key => certificados[key] === certificadosExibidos)}</h3>
                            <ul>
                                {certificadosExibidos.map((certificado, index) => (
                                    <li key={index} onClick={() => handleVisualizarCertificado(certificado.certificadoUrl)}>
                                        {certificado.titulo} <span><FontAwesomeIcon icon={faEyeSlash} /></span>
                                    </li>
                                ))}
                            </ul>

                            <div className="btn"><button onClick={fecharCertificados}><FontAwesomeIcon icon={faXmark} /></button></div>

                        </div>
                    </div>
                )}

                {exibirCertificadoDetalhe && urlCertificadoDetalhe && (

                    <div className="box-details-certificate">
                        
                        <div className="box-btn">
                            <span className="button" onClick={handleFecharCertificadoDetalhe}>
                                <FontAwesomeIcon icon={faEye} />
                            </span>
                        </div>
                        
                        <div className="certificado-detalhe"
                            style={{ backgroundImage: `url(${urlCertificadoDetalhe})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height:'50%' }}>
                        </div>

                        <span className="description">
                            {certificadosExibidos &&
                                certificadosExibidos.find(cert => cert.certificadoUrl === urlCertificadoDetalhe)?.descricao
                            }
                        </span>

                    </div>
                )}
            </div>
        </div>
    );
}

export default Skills;
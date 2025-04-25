import React, { useState } from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faFigma, faGitAlt, faGithub, faHtml5, faJs, faNpm, faReact } from "@fortawesome/free-brands-svg-icons";
import { useCertificados } from "../../context/CertificadosContext";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
                        <li><span><FontAwesomeIcon className="css" icon={faCss3Alt} /></span></li>
                        <li><span><FontAwesomeIcon className="js" icon={faJs} /></span></li>
                        <li><span><FontAwesomeIcon className="react" icon={faReact} /></span></li>
                    </ul>
                </div>

                
                <div className="skills">
                    <p>Ferramentas:</p>
                    <ul>
                        <li><span><FontAwesomeIcon className="git" icon={faGitAlt} /></span></li>
                        <li><span><FontAwesomeIcon className="github" icon={faGithub} /></span></li>
                        <li><span><FontAwesomeIcon className="npm" icon={faNpm} /></span></li>
                        <li><span><FontAwesomeIcon className="figma" icon={faFigma} /></span></li>
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
                    <div
                        className="certificado-detalhe"
                        style={{ backgroundImage: `url(${urlCertificadoDetalhe})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                    >

                        <div className="box-btn"><span  className="button" onClick={handleFecharCertificadoDetalhe}><FontAwesomeIcon icon={faEye} /></span></div>

                        <span className="description">
                            {certificadosExibidos &&
                             certificadosExibidos.find(cert => cert.certificadoUrl === urlCertificadoDetalhe)?.descricao
                            }
                        </span>

                       
                        
                        {/* <button onClick={handleFecharCertificadoDetalhe}><FontAwesomeIcon icon={faEye} /></button> */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Skills;
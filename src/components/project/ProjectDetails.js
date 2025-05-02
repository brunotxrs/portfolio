import React from 'react';
import { useProject } from '../../context/ProjectContext';
import "./project.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from "../../context/LanguageContext"

function ProjectDetails() {
  const { projetoSelecionado, projetosData, fecharProjeto } = useProject();
  const { language, getTranslation } = useLanguage();

  if (!projetoSelecionado) {
    return null;
  }

  const projeto = projetosData.find((p) => p.id === projetoSelecionado);

  if (!projeto) {
    return <div>Projeto não encontrado.</div>;
  }

  return (
    <div className="project-details-overlay">
      <div className="project-details">
            <h3>{getTranslation(projeto.nome)}</h3>

            <p>{projeto.descricao[language] || projeto.descricao.pt || "Descrição não traduzida"}</p>

            <div className="project-links">
            {projeto.linkProjeto && (
                <a href={projeto.linkProjeto} target="_blank" rel="noopener noreferrer" title='Ver Projeto Online' aria-label='Ver Projeto Online'><FontAwesomeIcon className='link' icon={faArrowUpRightFromSquare} /></a>
            )}
            <a href={projeto.linkGithub} target="_blank" rel="noopener noreferrer" title='Ver Código no GitHub' aria-label='Ver Código no GitHub'><FontAwesomeIcon className='link' icon={faGithub} /></a>
            </div>

            <div className="btn">
                <button onClick={fecharProjeto}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
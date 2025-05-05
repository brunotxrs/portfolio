import React from "react";
import "./project.css";
import { useProject } from "../../context/ProjectContext";
import ProjectDetails from "./ProjectDetails";
import { useLanguage } from "../../context/LanguageContext"

function Project() {
  const { projetosData, selecionarProjeto, projetoSelecionado } = useProject();
  const { language, getTranslation } = useLanguage();

  return (
    <div>
      <div className="container-project">

        <div className="title">
          <h2>{getTranslation('meusTrabalhos')}</h2>
          <p>{getTranslation('subTituloTrabalho')}</p>
        </div>

        <div className="works">
          {projetosData.map((projeto) => (
            <div key={projeto.id} className="box-work" onClick={() => selecionarProjeto(projeto.id)}>
              <div className="work">
                <p>{getTranslation(projeto.nome)}</p>

                <div className="box-img">
                  <img src={projeto.imagem} alt={projeto.nome} />
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {projetoSelecionado && <ProjectDetails />}


        <p className="paragraph">{getTranslation('paragraph')}</p>
      </div>
      
    </div>
  );
}

export default Project;
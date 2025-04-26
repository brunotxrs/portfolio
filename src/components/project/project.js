import React from "react";
import "./project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { useProject } from "../../context/ProjectContext";
import ProjectDetails from "./ProjectDetails"; // Certifique-se que este caminho está correto

function Project() {
  const { projetosData, selecionarProjeto, projetoSelecionado } = useProject();

  return (
    <div>
      <div className="container-project">

        <div className="title">
          <h2>Meus Trabalhos</h2>
          <p>Detalhes e informações sobre cada trabalho estão disponíveis ao clicar abaixo.</p>
        </div>

        <div className="works">
          {projetosData.map((projeto) => (
            <div key={projeto.id} className="box-work" onClick={() => selecionarProjeto(projeto.id)}>
              <div className="work">
                <p>{projeto.nome}</p>
                <img src={projeto.imagem} alt={projeto.nome} />
              </div>
            </div>
          ))}
        </div>

        {projetoSelecionado && <ProjectDetails />}
      </div>
      
    </div>
  );
}

export default Project;
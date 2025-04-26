import React, { createContext, useState, useContext } from 'react';
import spotifyClone from "../assets/img/spotify-clone.gif";
import devlinks from "../assets/img/devlinks.gif";
import detonaRalph from "../assets/img/detona-ralph.gif";
import jogoDaMemoria from "../assets/img/jogo-da-memoria.gif";

const ProjectContext = createContext();

export function useProject() {
  return useContext(ProjectContext);
}

export function ProjectProvider({ children }) {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const projetosData = [
    { id: 'spotify-clone', nome: 'Spotify Clone', descricao: 'O projeto Spotify-Clone representa a concretização do desafio proposto pela Imersão Front-End 2ª Edição da Alura, com o objetivo de recriar a página inicial do Spotify para desktop. No entanto, fui além do escopo inicial, adotando uma abordagem mobile-first para garantir uma experiência de usuário otimizada em dispositivos móveis, e subsequentemente adaptando o layout para telas maiores através de media queries. O projeto foi desenvolvido utilizando HTML, CSS e JavaScript puro, demonstrando um domínio das tecnologias fundamentais da web. Para enriquecer a funcionalidade, implementei uma busca dinâmica por artistas utilizando uma API local simplificada, que eu mesmo desenvolvi especificamente para este projeto. A interação com esta API local foi realizada através de fetch e then para o tratamento e manipulação dos dados retornados, permitindo uma experiência de busca fluida e responsiva dentro do ambiente de desenvolvimento. Demonstrei grande atenção aos detalhes visuais e de interação, buscando a máxima fidelidade à página inicial oficial do Spotify. A precisão na reprodução dos elementos da interface foi uma prioridade, visando criar um clone com a maior semelhança possível ao original. Adicionalmente, o projeto conta com um sistema de rotas de navegação entre as páginas, proporcionando uma experiência de usuário consistente e intuitiva. Implementei um layout de carrossel dinâmico para a exibição dos artistas, replicando a dinâmica de apresentação da plataforma original. Um destaque especial é a implementação de um elemento dinâmico no carrossel, com comportamento sensível ao dia e horário. Este elemento é exibido apenas durante um período específico, simulando a natureza efêmera de certas promoções ou conteúdos da plataforma original. Através deste projeto, Spotify-Clone, demonstro um domínio de conceitos de responsividade (mobile-first e media queries), desenvolvimento com HTML, CSS e JavaScript puro, implementação e consumo de APIs (através da minha API local), manipulação de dados, criação de rotas de navegação, desenvolvimento de layouts dinâmicos (carrossel) e atenção meticulosa à fidelidade do design e comportamento da interface do usuário.', linkProjeto: 'https://brunotxrs.github.io/Spotify-Clone/', linkGithub: 'https://github.com/brunotxrs/Spotify-Clone', imagem: spotifyClone },
    { id: 'devlinks', nome: 'DevLinks', descricao: 'Uma página agregadora de links para perfis e redes sociais de desenvolvedores.', linkProjeto: 'https://seu-devlinks.com', linkGithub: 'https://github.com/seu-usuario/devlinks', imagem: devlinks },
    { id: 'detona-ralph', nome: 'Jogo Detona Ralph', descricao: 'Um jogo interativo do Detona Ralph desenvolvido com HTML, CSS e JavaScript.', linkProjeto: 'https://seu-jogo-detona-ralph.com', linkGithub: 'https://github.com/seu-usuario/jogo-detona-ralph', imagem: detonaRalph },
    { id: 'jogo-da-memoria', nome: 'Jogo Da Memoria', descricao: 'Um clássico jogo da memória com tema de emojis, construído com HTML, CSS e JavaScript.', linkProjeto: 'https://seu-jogo-da-memoria.com', linkGithub: 'https://github.com/seu-usuario/jogo-da-memoria', imagem: jogoDaMemoria },
  ];

  const selecionarProjeto = (id) => {
    setProjetoSelecionado(id);
  };

  const fecharProjeto = () => {
    setProjetoSelecionado(null);
  };

  return (
    <ProjectContext.Provider value={{ projetoSelecionado, projetosData, selecionarProjeto, fecharProjeto }}>
      {children}
    </ProjectContext.Provider>
  );
}
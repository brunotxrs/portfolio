import React from "react";

import "./project.css"
import spotifyClone from "../../assets/img/spotify-clone.gif"
import devlinks from "../../assets/img/devlinks.gif"
import detonaRalph from "../../assets/img/detona-ralph.gif"
import jogoDaMemoria from "../../assets/img/jogo-da-memoria.gif"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";


function Project() {

    return (
        <div>
            
            <div className="container-project">
                <div className="title">
                    <h2>Meus Trabalhos</h2>
                    <p>Detalhes e informações sobre cada trabalho estão disponíveis ao clicar abaixo.</p>
                </div>

                <div className="works">
                    <div className="box-work">
                        <div className="work">
                            <p><FontAwesomeIcon icon={faSpotify}/> Spotify-Clone</p>
                            
                            <img src={spotifyClone}/>
                        </div>

                        <div className="work">
                            <p>DevLinks</p>
                            <img src={devlinks}/>
                        </div>

                        <div className="work">
                            <p>Jogo Detona Ralph</p>
                            <img src={detonaRalph}/>
                        </div>

                        <div className="work">
                            <p>Jogo Da Memoria</p>
                            <img src={jogoDaMemoria}/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Project;
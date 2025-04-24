import React from "react";

import './header.css';


function Header() {

    return (
        <div>
            <div className="container-header">

                <div className="navigation">
                    <ul>
                        <li>Sobre Mim</li>
                        <li>Projetos</li>
                        <li>Skills</li>
                        <li>Contato</li>
                    </ul>
                </div>

                <div className="box-header">
                    <div className="titulo">
                        <h1><span>Eu sou</span> Bruno Teixeira</h1>
                        <h2>Desenvolvedor Front-End</h2>
                    </div>
                    <div className="img">
                        <img src="https://raw.githubusercontent.com/brunotxrs/dev-links/d0021d8d8e5a663121f72bf62353a067a091eb8a/src/assets/img/avatar-light.svg" alt="imagem de Bruno Teixeira de Óculos" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Header;
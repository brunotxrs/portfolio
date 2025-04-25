import React, { createContext, useState, useContext } from 'react';

const CertificadosContext = createContext();

export function useCertificados() {
    return useContext(CertificadosContext);
}

export function CertificadosProvider({ children }) {
    const [certificados, setCertificados] = useState({
        "HTML": [
            {
                titulo: "Introdução ao HTML na Prática",
                descricao: "Curso introdutório sobre HTML. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/FQrv_wMczFFJ78h7JpGv5xhM3yo2or6I0sboeJb_sg8/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9YVFAwQ0dESi5qcGc"
            },
            {
                titulo: "Trabalhando com Formulários em HTML",
                descricao: "Curso específico sobre a criação e manipulação de formulários em HTML. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/5TptDYttb0_RTVUfQwaNfRpns3umm_tubr74FgOm9wE/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9FQ0RQSkI3Vy5qcGc"
            },
            {
                titulo: "Entendendo HTML Semântico",
                descricao: "Curso focado na importância e aplicação do HTML semântico. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/-ACeFoUWbUMpH6AfhJTlovoyZ2uLQQYPGPI81IhV6dc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9aTExMRTMwRS5qcGc"
            },
            {
                titulo: "Estruturando seu HTML + Formatações",
                descricao: "Curso sobre a estrutura fundamental do HTML e as diversas opções de formatação. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/5WNdvTToBc1Wrf4aGKBZekkwKT0qvkX2c-2yMKekcUU/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9YRUdTSVVBUS5qcGc"
            }, 
            {
                titulo: "Desenvolvendo suas Primeiras Páginas com HTML e CSS",
                descricao: "Curso inicial para aprender a criar as primeiras páginas web com HTML e CSS. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/o2m3D28pqOBA12KnIKtI5PHiP-_Agu9h6o4Xzkw2D4o/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8xTVZLMUxJSC5qcGc"
            },
            {
                titulo: "Criando sua Primeira Landing Page com HTML e CSS",
                descricao: "Curso prático para construir uma landing page utilizando HTML e CSS. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/8J6-UHDMaGMjgcUBUv48TXdl7259nujVMw2hZKGvLec/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9HUUdGVlNMUy5qcGc"
            },
            {
                titulo: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
                descricao: "Certificado de aprendizado sobre ambientes de desenvolvimento HTML e CSS, organização de arquivos e a utilização de tags fundamentais. Adquiri este certificado durante a Imersão Front-End 2ª Edição, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://media.licdn.com/dms/image/v2/D4D2DAQFQ9xJjrKHctQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1736366333965?e=1746216000&v=beta&t=7o7uLI1_fv84ZcG9qV1zDPPhz1LyQKA42QZwp5U1eOM"
            },
            {
                titulo: "Imersão Front-End 2ª Edição",
                descricao: "Certificado de participação na Imersão Front-End, 2ª Edição.",
                certificadoUrl: "https://media.licdn.com/dms/image/v2/D4D2DAQGUuJR5TpF_Sw/profile-treasury-image-shrink_800_800/B4DZTwqIz.HYAc-/0/1739204366872?e=1746216000&v=beta&t=T0RHLXZg_cBxnKCBxF2vUWv5MEBIC8hQis-oVdZm5tw"
            },
            {
                titulo: "Introdução ao Desenvolvimento Front-end com a Ri Happy",
                descricao: "Curso introdutório ao desenvolvimento front-end com foco na Ri Happy. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/ltIFEmAM10cvYE1hYPTe7oTCkIfa3Aykr3Sg4YA9ufQ/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9NNkgxOVVCVi5qcGc"
            },
            {
                titulo: "Curso HTML5 e CSS3: Módulo 1 de 5",
                // descricao: "Primeiro módulo de um curso abrangente sobre HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            },
            {
                titulo: "Curso HTML5 e CSS3: Módulo 2 de 5",
                // descricao: "Segundo módulo do curso, aprofundando em HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            },
            {
                titulo: "Curso HTML5 e CSS3: Módulo 3 de 5",
                // descricao: "Terceiro módulo do curso, continuando o aprendizado de HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            },
            {
                titulo: "Curso HTML5 e CSS3: Módulo 4 de 5",
                // descricao: "Quarto módulo do curso, avançando nos conceitos de HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            },
            {
                titulo: "Curso HTML5 e CSS3: Módulo 5 de 5",
                // descricao: "Módulo final do curso completo de HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            }
            
            // ... mais certificados de HTML
        ],
        "CSS": [
            {
                titulo: "Fundamentos do CSS",
                descricao: "Curso que cobre os conceitos básicos e essenciais do CSS. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/meL69yiBk-Ox_C2vphWwgBKdZ59Vj5EDK3TFrST9hYU/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9TWVZYVkI2OC5qcGc"
            },
            {
                titulo: "Estilizações Básicas com CSS",
                descricao: "Curso introdutório sobre as principais técnicas de estilização com CSS. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/bfB6Bc-6HwK2AW6Z5K8QvWsZZKlBrcge2rDr-plN0cA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci83VTRTU0FMTS5qcGc"
            }, 
            {
                titulo: "Criando sua Primeira Landing Page com HTML e CSS",
                descricao: "Curso prático para construir uma landing page utilizando HTML e CSS. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/8J6-UHDMaGMjgcUBUv48TXdl7259nujVMw2hZKGvLec/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9HUUdGVlNMUy5qcGc"
            }, 
            {
                titulo: "Desenvolvendo suas Primeiras Páginas com HTML e CSS",
                descricao: "Curso inicial para aprender a criar as primeiras páginas web com HTML e CSS. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/o2m3D28pqOBA12KnIKtI5PHiP-_Agu9h6o4Xzkw2D4o/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8xTVZLMUxJSC5qcGc"
            },
            {
                titulo: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
                descricao: "Certificado de aprendizado sobre ambientes de desenvolvimento HTML e CSS, organização de arquivos e a utilização de tags fundamentais. Adquiri este certificado durante a Imersão Front-End 2ª Edição, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://media.licdn.com/dms/image/v2/D4D2DAQFQ9xJjrKHctQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1736366333965?e=1746216000&v=beta&t=7o7uLI1_fv84ZcG9qV1zDPPhz1LyQKA42QZwp5U1eOM"
            },
            {
                titulo: "Curso HTML5 e CSS3: Módulo 1 de 5",
                // descricao: "Primeiro módulo de um curso abrangente sobre HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            },
            {
                titulo: "Curso HTML5 e CSS3: Módulo 2 de 5",
                // descricao: "Segundo módulo do curso, aprofundando em HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            },
            {
                titulo: "Curso HTML5 e CSS3: Módulo 3 de 5",
                // descricao: "Terceiro módulo do curso, continuando o aprendizado de HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            },
            {
                titulo: "Curso HTML5 e CSS3: Módulo 4 de 5",
                // descricao: "Quarto módulo do curso, avançando nos conceitos de HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            },
            {
                titulo: "Curso HTML5 e CSS3: Módulo 5 de 5",
                // descricao: "Módulo final do curso completo de HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            }
            // ... mais certificados de CSS
        ],
        "JavaScript": [
            {
                titulo: "Primeiros Passos Com JavaScript",
                descricao: "Curso introdutório sobre JavaScript.",
                certificadoUrl: "link_para_certificado_js_1.pdf"
            },
            {
                titulo: "Conhecendo Funções JavaScript",
                descricao: "Curso sobre funções em JavaScript.",
                certificadoUrl: "link_para_certificado_js_2.pdf"
            }
            // ... mais certificados de JavaScript
        ],
        "React": [
            {
                titulo: "NLW Pocket: Mobile - React Native",
                descricao: "Curso sobre desenvolvimento mobile em React Native.",
                certificadoUrl: "link_para_certificado_react_1.pdf"
            }
            // ... mais certificados de React
        ],
        "Git": [
            {
                titulo: "O básico de Git e GitHub",
                descricao: "Curso sobre o básico de Git e GitHub.",
                certificadoUrl: "link_para_certificado_git_1.pdf"
            },
            {
                titulo: "Versionamento de Código com Git e GitHub",
                descricao: "Curso sobre versionamento de código com Git e GitHub.",
                certificadoUrl: "link_para_certificado_git_2.pdf"
            }
            
        ],
        
    });

    const [certificadosExibidos, setCertificadosExibidos] = useState(null);
    const [certificadoSelecionado, setCertificadoSelecionado] = useState(null);

    const exibirCertificados = (tecnologia) => {
        setCertificadosExibidos(certificados[tecnologia] || []);
        setCertificadoSelecionado(null);
    };

    const selecionarCertificado = (certificadoUrl) => {
        setCertificadoSelecionado(certificadoUrl);
    };

    const fecharCertificados = () => {
        setCertificadosExibidos(null);
        setCertificadoSelecionado(null);
    };

    const value = {
        certificados,
        certificadosExibidos,
        certificadoSelecionado,
        exibirCertificados,
        selecionarCertificado,
        fecharCertificados
    };

    return (
        <CertificadosContext.Provider value={value}>
            {children}
        </CertificadosContext.Provider>
    );
}
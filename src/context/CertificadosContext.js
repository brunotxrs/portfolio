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
                descricao: "Curso introdutório sobre JavaScript. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/clieXtAeeH3dlDS2sOnJY2S9PgiFv-ZeNVcp6G0N9lc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9TVDdZTUVOQy5qcGc"
            },
            {
                titulo: "Conhecendo Funções JavaScript",
                descricao: "Curso focado no aprendizado e aplicação de funções em JavaScript. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/UjZilm0eVlBclIqNrWvS5X5nSZ3oVtxi2rdZfArLs2w/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DSjFHTFhNWi5qcGc"
            },
            {
                titulo: "Criando um Jogo do Detona Ralph com JavaScript",
                descricao: "Curso prático de desenvolvimento de um jogo utilizando JavaScript. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/FtTVBMpU2YIzzgdduQp9A_Gl38v7b1s14pf7lYNYD6U/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9UMk5RVldCMi5qcGc"
            }, 
            {
                titulo: "Criando um Jogo da memória com Emojis Utilizando Javascript",
                descricao: "Curso prático de desenvolvimento de um jogo da memória com JavaScript. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/45liwQdwOzzWsYlXnmlxnxyJyroLqKh0PGVFAC_r0dc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9VSkZBRE9YUi5qcGc"
            }
            // ... mais certificados de JavaScript
        ],
        "React.js": [
            {
                titulo: "React.js (Desenvolvimento Front-End)",
                descricao: "Experiência prática em React.js para criar interfaces de usuário dinâmicas e interativas, utilizando componentes, estados e propriedades.",
                certificadoUrl: "https://th.bing.com/th/id/OIP.uf5Wr4c5nlbGbTR0XyGUvQHaEO?rs=1&pid=ImgDetMain"
            }
            // ... mais certificados de React
        ],
        "Git": [
            {
                titulo: "O básico de Git e GitHub",
                descricao: "Curso introdutório aos conceitos e comandos básicos do Git e GitHub",
                certificadoUrl: "https://media.licdn.com/dms/image/v2/D4D2DAQFXIdtfqJuuTQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734091214190?e=1746223200&v=beta&t=76osa5z-RiauFVN5p8ML8PoOBNoMtroSi6d8B0v2CIc"
            },
            {
                titulo: "Versionamento de Código com Git e GitHub",
                descricao: "Curso sobre o uso do Git para controle de versão e GitHub para colaboração. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/u7_6TloBEsuQEnq4tXv7LP4_jRb-gYEx97063mK_6Tg/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9ES1BKT0hPRy5qcGc"
            },
            {
                titulo: "Princípios de Desenvolvimento de Software Colaborativo",
                descricao: "Curso sobre as práticas e princípios para desenvolvimento colaborativo de software. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/FHmIg8n11-ccaoI_u5s9ErY5mN8mmHo7R85smBgDiTI/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9HQlVPVVZWQy5qcGc"
            },
            {
                titulo: "Contribuindo em um Projeto Open Source no GitHub",
                descricao: "Curso prático sobre como contribuir em projetos de código aberto no GitHub. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/Ti3SiDycOUZLxQeeke_a7L-jJYDmvE5k5wAQVyzpJZ0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9YTjFYRlpDSy5qcGc"
            }
            
        ],
        "Github":[
            {
                titulo: "Lógica de programação: mergulhe em programação com JavaScript",
                descricao: "Curso introdutório à lógica de programação utilizando a linguagem JavaScript como ferramenta prática.",
                certificadoUrl: "https://assets.dio.me/45liwQdwOzzWsYlXnmlxnxyJyroLqKh0PGVFAC_r0dc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9VSkZBRE9YUi5qcGc"
            }
        ],
        "npm":[
            {
                titulo: "NPM (Node Package Manager)",
                descricao: "Experiência prática em NPM para gerenciar dependências em projetos React (instalação, atualização, remoção) e compreensão do package.json.",
                certificadoUrl: "https://th.bing.com/th/id/OIP.H2rmEzRgHE7N2HeLUCeUjAHaEB?w=970&h=526&rs=1&pid=ImgDetMain"
            }
        ],
        "Figma":[
            {
                titulo: "Figma (Para Desenvolvimento Front-End)",
                descricao: "Experiência prática em Figma para extrair medidas, cores, tipografia e especificações de design para implementação precisa em código front-end (HTML/CSS).",
                certificadoUrl: "https://th.bing.com/th/id/R.d9f66b70e5f47918c52eb009a0a9d00a?rik=YYUwgIaQv0xF0w&pid=ImgRaw&r=0"
            }
        ],
        "Lógica de Programação":[
            {
                titulo: "Aprendendo Lógica de Programação",
                descricao: "Curso introdutório aos fundamentos da lógica de programação. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/AH1iHWJPQGCjJTkVNMGxhC2Ay14mkP6cyrQea5wAPys/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9JUlEzVUZTRS5qcGc"
            },
            {
                titulo: "Desafios de Código: Aperfeiçoe Sua Lógica e Pensamento Computacional",
                descricao: "Curso com foco em exercícios práticos para aprimorar a lógica de programação. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/rJbtpioW28plNhbcZcXjDGzZL-Dm21vLnpmAv-E_gqY/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9YUFZSQUVRRi5qcGc"
            },
            {
                titulo: "Trabalhando com Variáveis",
                descricao: "Curso específico sobre o conceito e uso de variáveis em programação. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/MhzRyuxIBQRt9hNcXfvgFSYhOcMem3n10JL_GMJpRIQ/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9LWlVXSDFPTi5qcGc"
            },
            {
                titulo: "Entendendo Algoritmos e Fluxogramas",
                descricao: "Curso sobre a criação e interpretação de algoritmos e fluxogramas. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/6-xR1EfeTyp3k_RmkVT_4IiOXzw3tR5CkE91EsumBbc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9XVkNHNFNGSC5qcGc"
            },
            {
                titulo: "Trabalhando Com Estruturas Condicionais (if, else if, else)",
                descricao: "Curso sobre a aplicação de estruturas condicionais em programação. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/wl662tIEbvIQ7EXEOh9mkXu66B824Xr0HUPLegwga4E/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9VTUNKUUgzVS5qcGc"
            },
            {
                titulo: "Trabalhando Com Estruturas de Decisão (Estrutura Switch Case)",
                descricao: "Curso sobre o uso da estrutura de decisão switch case. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/WfMAPbo7alCm3oKmPvqTXZluwu-_vhZaqrqHdA6RZtI/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9CUFlMVzZLVy5qcGc"
            },
            {
                titulo: "Trabalhando Com Estruturas de Repetição (for, while, do-while)",
                descricao: " Curso sobre a aplicação de estruturas de repetição em programação. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/dSr9M5I6cCOYill7Lu5UQe27JBC0i46bsr3Q_ONDvGM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9CNktZREM0QS5qcGc"
            },
            {
                titulo: "Classificador de Nível de Herói",
                descricao: "Projeto prático de programação para classificar o nível de um herói. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/BjMpqhBrPwqDdJ7JXpWIuN0OfYwoQn5rZ2NQ84hm2WM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9ZSVhGQktPUS5qcGc"
            },
            {
                titulo: "Lógica de programação: mergulhe em programação com JavaScript",
                descricao: "Curso introdutório à lógica de programação utilizando a linguagem JavaScript como ferramenta prática.",
                certificadoUrl: "https://media.licdn.com/dms/image/v2/D4D2DAQGLQuvv2GzyuQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1731854058921?e=1746241200&v=beta&t=U-3bqPg-NpAbclGfm6_LVtJF3yxCw1XHoiEtChS71H0"
            }
        ],
        "Complementares":[
            {
                titulo: "Entendendo Comunicação Client x Server",
                descricao: " Curso sobre os conceitos e fundamentos da comunicação entre cliente e servidor. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/jUd9_r3mbd0UjEhbmUm_jgfy-Q9-amUp2Vizy904AZI/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9RVFc4Uk1KUC5qcGc"
            },
            {
                titulo: "Desafios de Projetos: Crie Um Portfólio Vencedor",
                descricao: "Curso com foco em projetos práticos para a criação de um portfólio de destaque. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/6UU16fv9IW5o3XmXVTu7p6y0C1UFK1BokoqgJRfQPdc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9GTkNVUEFOWS5qcGc"
            },
            {
                titulo: "Estrutura de um Software e Seu Ambiente de Desenvolvimento",
                descricao: "Curso sobre a organização de um software e a configuração do ambiente de desenvolvimento. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/GpCh4mRA7OOK_tZXo5PUtD7933EhRi1Jq2LjDKO-GGE/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9BN0JVRFhMOC5qcGc"
            },
            {
                titulo: "Discover",
                descricao: "Introdução ao mundo da tecnologia e desenvolvimento de software, explorando o papel do desenvolvedor, conceitos da internet, frontend/backend, HTML, CSS, JavaScript e Git/GitHub para iniciar a jornada no desenvolvimento web.",
                certificadoUrl: "https://media.licdn.com/dms/image/v2/D4D2DAQGC6gaMTVUWHg/profile-treasury-image-shrink_800_800/B4DZYcxdCNHAAc-/0/1744239449635?e=1746241200&v=beta&t=BiaY97Yz8qarsPR8kQJ53pyGZkLDwjIjcQruDisvouU"
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
            // {
            //     titulo: "Hardware",
            //     descricao: "Curso básico sobre os componentes físicos de um computador (hardware).",
            //     certificadoUrl: ""
            // },
            // {
            //     titulo: "Bases Numéricas",
            //     descricao: "Curso sobre os diferentes sistemas de numeração utilizados na computação.",
            //     certificadoUrl: ""
            // }
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
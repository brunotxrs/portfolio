import React, { createContext, useState, useContext } from 'react';

const CertificadosContext = createContext();

export function useCertificados() {

    return useContext(CertificadosContext);
}

export function CertificadosProvider({ children }) {

    const [certificados, setCertificados] = useState({
        "HTML": [
            {
                titulo: {
                    pt: "Introdução ao HTML na Prática",
                    en: "Introduction to HTML in Practice",
                  },
                  descricao: {
                    pt: "Curso introdutório sobre HTML. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Introductory course on HTML. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                  },
                certificadoUrl: "https://assets.dio.me/FQrv_wMczFFJ78h7JpGv5xhM3yo2or6I0sboeJb_sg8/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9YVFAwQ0dESi5qcGc"
            },
            {
                titulo: {
                    pt: "Trabalhando com Formulários em HTML",
                    en: "Working with Forms in HTML",
                },
                descricao: {
                    pt: "Curso específico sobre a criação e manipulação de formulários em HTML. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Specific course on creating and manipulating forms in HTML. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/5TptDYttb0_RTVUfQwaNfRpns3umm_tubr74FgOm9wE/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9FQ0RQSkI3Vy5qcGc"
            },
            {
                titulo: {
                    pt: "Entendendo HTML Semântico",
                    en: "Understanding Semantic HTML",
                },
                descricao: {
                    pt: "Curso focado na importância e aplicação do HTML semântico. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Course focused on the importance and application of semantic HTML. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/-ACeFoUWbUMpH6AfhJTlovoyZ2uLQQYPGPI81IhV6dc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9aTExMRTMwRS5qcGc"
            },
            {
                titulo: {
                    pt: "Estruturando seu HTML + Formatações",
                    en: "Structuring Your HTML + Formatting",
                },
                descricao: {
                    pt: "Curso sobre a estrutura fundamental do HTML e as diversas opções de formatação. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Course on the fundamental structure of HTML and the various formatting options. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/5WNdvTToBc1Wrf4aGKBZekkwKT0qvkX2c-2yMKekcUU/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9YRUdTSVVBUS5qcGc"
            }, 
            {
                titulo: {
                    pt: "Desenvolvendo suas Primeiras Páginas com HTML e CSS",
                    en: "Developing Your First Pages with HTML and CSS",
                },
                descricao: {
                    pt: "Curso inicial para aprender a criar as primeiras páginas web com HTML e CSS. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Initial course to learn how to create the first web pages with HTML and CSS. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/o2m3D28pqOBA12KnIKtI5PHiP-_Agu9h6o4Xzkw2D4o/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8xTVZLMUxJSC5qcGc"
            },
            {
                titulo: {
                    pt: "Criando sua Primeira Landing Page com HTML e CSS",
                    en: "Creating Your First Landing Page with HTML and CSS",
                },
                descricao: {
                    pt: "Curso prático para construir uma landing page utilizando HTML e CSS. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Practical course to build a landing page using HTML and CSS. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/8J6-UHDMaGMjgcUBUv48TXdl7259nujVMw2hZKGvLec/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9HUUdGVlNMUy5qcGc"
            },
            {
                titulo: {
                    pt: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
                    en: "HTML and CSS: development environments, file structure, and tags",
                },
                descricao: {
                    pt: "Certificado de aprendizado sobre ambientes de desenvolvimento HTML e CSS, organização de arquivos e a utilização de tags fundamentais. Adquiri este certificado durante a Imersão Front-End 2ª Edição, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Certificate of learning about HTML and CSS development environments, file organization, and the use of fundamental tags. I acquired this certificate during the Front-End Immersion 2nd Edition, enhancing my development skills.",
                },
                certificadoUrl: "https://github.com/brunotxrs/portfolio/blob/main/src/assets/img/cert/HTML%20e%20CSS%20-%20ambientes%20de%20desenvolvimento,%20estrutura%20de%20arquivos%20e%20tags.jpg?raw=true"
            },
            // {
            //     titulo: {
            //         pt: "Curso HTML5 e CSS3: Módulo 1 de 5",
            //         en: "HTML5 and CSS3 Course: Module 1 of 5",
            //     },
            //     // descricao: {
            //     //     pt: "Primeiro módulo de um curso abrangente sobre HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
            //     //     en: "First module of a comprehensive course on HTML5 and CSS3. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
            //     // },
            //     certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            // },
            // {
            //     titulo: {
            //         pt: "Curso HTML5 e CSS3: Módulo 2 de 5",
            //         en: "HTML5 and CSS3 Course: Module 2 of 5",
            //     },
            //     // descricao: {
            //     //     pt: "Segundo módulo do curso, aprofundando em HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
            //     //     en: "Second module of the course, delving deeper into HTML5 and CSS3. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
            //     // },
            //     certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            // },
            // {
            //     titulo: {
            //         pt: "Curso HTML5 e CSS3: Módulo 3 de 5",
            //         en: "HTML5 and CSS3 Course: Module 3 of 5",
            //     },
            //     // descricao: {
            //     //     pt: "Terceiro módulo do curso, continuando o aprendizado de HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
            //     //     en: "Third module of the course, continuing the learning of HTML5 and CSS3. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
            //     // },
            //     certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            // },
            // {
            //     titulo: {
            //         pt: "Curso HTML5 e CSS3: Módulo 4 de 5",
            //         en: "HTML5 and CSS3 Course: Module 4 of 5",
            //     },
            //     // descricao: {
            //     //     pt: "Quarto módulo do curso, avançando nos conceitos de HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
            //     //     en: "Fourth module of the course, advancing in the concepts of HTML5 and CSS3. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
            //     // },
            //     certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            // },
            // {
            //     titulo: {
            //         pt: "Curso HTML5 e CSS3: Módulo 5 de 5",
            //         en: "HTML5 and CSS3 Course: Module 5 of 5",
            //     },
            //     // descricao: {
            //     //     pt: "Módulo final do curso completo de HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
            //     //     en: "Final module of the complete HTML5 and CSS3 course. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
            //     // },
            //     certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            // }
            
            // ... mais certificados de HTML
        ],
        "CSS": [
            {
                titulo: {
                    pt: "Fundamentos do CSS",
                    en: "CSS Fundamentals",
                },
                descricao: {
                    pt: "Curso que cobre os conceitos básicos e essenciais do CSS. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Course covering the basic and essential concepts of CSS. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/meL69yiBk-Ox_C2vphWwgBKdZ59Vj5EDK3TFrST9hYU/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9TWVZYVkI2OC5qcGc"
            },
            {
                titulo: {
                    pt: "Estilizações Básicas com CSS",
                    en: "Basic Styling with CSS",
                },
                descricao: {
                    pt: "Curso introdutório sobre as principais técnicas de estilização com CSS. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Introductory course on the main styling techniques with CSS. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/bfB6Bc-6HwK2AW6Z5K8QvWsZZKlBrcge2rDr-plN0cA/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci83VTRTU0FMTS5qcGc"
            }, 
            {
                titulo: {
                    pt: "Criando sua Primeira Landing Page com HTML e CSS",
                    en: "Creating Your First Landing Page with HTML and CSS",
                },
                descricao: {
                    pt: "Curso prático para construir uma landing page utilizando HTML e CSS. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Practical course to build a landing page using HTML and CSS. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/8J6-UHDMaGMjgcUBUv48TXdl7259nujVMw2hZKGvLec/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9HUUdGVlNMUy5qcGc"
            }, 
            {
                titulo: {
                    pt: "Desenvolvendo suas Primeiras Páginas com HTML e CSS",
                    en: "Developing Your First Pages with HTML and CSS",
                },
                descricao: {
                    pt: "Curso inicial para aprender a criar as primeiras páginas web com HTML e CSS. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Initial course to learn how to create the first web pages with HTML and CSS. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/o2m3D28pqOBA12KnIKtI5PHiP-_Agu9h6o4Xzkw2D4o/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci8xTVZLMUxJSC5qcGc"
            },
            {
                titulo: {
                    pt: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
                    en: "HTML and CSS: development environments, file structure, and tags",
                },
                descricao: {
                    pt: "Certificado de aprendizado sobre ambientes de desenvolvimento HTML e CSS, organização de arquivos e a utilização de tags fundamentais. Adquiri este certificado durante a Imersão Front-End 2ª Edição, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Certificate of learning about HTML and CSS development environments, file organization, and the use of fundamental tags. I acquired this certificate during the Front-End Immersion 2nd Edition, enhancing my development skills.",
                },
                certificadoUrl: "https://github.com/brunotxrs/portfolio/blob/main/src/assets/img/cert/HTML%20e%20CSS%20-%20ambientes%20de%20desenvolvimento,%20estrutura%20de%20arquivos%20e%20tags.jpg?raw=true"
            },
            // {
            //     titulo: {
            //         pt: "Curso HTML5 e CSS3: Módulo 1 de 5",
            //         en: "HTML5 and CSS3 Course: Module 1 of 5",
            //     },
            //     // descricao: {
            //     //     pt: "Primeiro módulo de um curso abrangente sobre HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
            //     //     en: "First module of a comprehensive course on HTML5 and CSS3. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
            //     // },
            //     certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            // },
            // {
            //     titulo: {
            //         pt: "Curso HTML5 e CSS3: Módulo 2 de 5",
            //         en: "HTML5 and CSS3 Course: Module 2 of 5",
            //     },
            //     // descricao: {
            //     //     pt: "Segundo módulo do curso, aprofundando em HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
            //     //     en: "Second module of the course, delving deeper into HTML5 and CSS3. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
            //     // },
            //     certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            // },
            // {
            //     titulo: {
            //         pt: "Curso HTML5 e CSS3: Módulo 3 de 5",
            //         en: "HTML5 and CSS3 Course: Module 3 of 5",
            //     },
            //     // descricao: {
            //     //     pt: "Terceiro módulo do curso, continuando o aprendizado de HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
            //     //     en: "Third module of the course, continuing the learning of HTML5 and CSS3. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
            //     // },
            //     certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            // },
            // {
            //     titulo: {
            //         pt: "Curso HTML5 e CSS3: Módulo 4 de 5",
            //         en: "HTML5 and CSS3 Course: Module 4 of 5",
            //     },
            //     // descricao: {
            //     //     pt: "Quarto módulo do curso, avançando nos conceitos de HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
            //     //     en: "Fourth module of the course, advancing in the concepts of HTML5 and CSS3. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
            //     // },
            //     certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            // },
            // {
            //     titulo: {
            //         pt: "Curso HTML5 e CSS3: Módulo 5 de 5",
            //         en: "HTML5 and CSS3 Course: Module 5 of 5",
            //     },
            //     // descricao: {
            //     //     pt: "Módulo final do curso completo de HTML5 e CSS3. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
            //     //     en: "Final module of the complete HTML5 and CSS3 course. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
            //     // },
            //     certificadoUrl: "https://gifmania.com.br/wp-content/uploads/2020/07/aguarde-gif.gif"
            // }
            // ... mais certificados de CSS
        ],
        "JavaScript": [
            {
                titulo: {
                    pt: "Primeiros Passos Com JavaScript",
                    en: "First Steps With JavaScript",
                },
                descricao: {
                    pt: "Curso introdutório sobre JavaScript. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Introductory course on JavaScript. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/clieXtAeeH3dlDS2sOnJY2S9PgiFv-ZeNVcp6G0N9lc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9TVDdZTUVOQy5qcGc"
            },
            {
                titulo: {
                    pt: "Conhecendo Funções JavaScript",
                    en: "Getting to Know JavaScript Functions",
                },
                descricao: {
                    pt: "Curso focado no aprendizado e aplicação de funções em JavaScript. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Course focused on learning and applying functions in JavaScript. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/UjZilm0eVlBclIqNrWvS5X5nSZ3oVtxi2rdZfArLs2w/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9DSjFHTFhNWi5qcGc"
            },
            {
                titulo: {
                    pt: "Criando um Jogo do Detona Ralph com JavaScript",
                    en: "Creating a Wreck-It Ralph Game with JavaScript",
                },
                descricao: {
                    pt: "Curso prático de desenvolvimento de um jogo utilizando JavaScript. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Practical course on developing a game using JavaScript. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/FtTVBMpU2YIzzgdduQp9A_Gl38v7b1s14pf7lYNYD6U/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9UMk5RVldCMi5qcGc"
            }, 
            {
                titulo: {
                    pt: "Criando um Jogo da memória com Emojis Utilizando Javascript",
                    en: "Creating an Emoji Memory Game Using Javascript",
                },
                descricao: {
                    pt: "Curso prático de desenvolvimento de um jogo da memória com JavaScript. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Practical course on developing a memory game with JavaScript. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/45liwQdwOzzWsYlXnmlxnxyJyroLqKh0PGVFAC_r0dc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9VSkZBRE9YUi5qcGc"
            }
            // ... mais certificados de JavaScript
        ],
        "React.js": [
            {
                titulo: {
                    pt: "React.js (Desenvolvimento Front-End)",
                    en: "React.js (Front-End Development)",
                },
                descricao: {
                    pt: "Experiência prática em React.js para criar interfaces de usuário dinâmicas e interativas, utilizando componentes, estados e propriedades.",
                    en: "Practical experience in React.js to create dynamic and interactive user interfaces, utilizing components, states, and props.",
                },
                certificadoUrl: "https://th.bing.com/th/id/OIP.uf5Wr4c5nlbGbTR0XyGUvQHaEO?rs=1&pid=ImgDetMain"
            }
            // ... mais certificados de React
        ],
        "Git": [
            {
                titulo: {
                    pt: "O básico de Git e GitHub",
                    en: "The Basics of Git and GitHub",
                },
                descricao: {
                    pt: "Curso introdutório aos conceitos e comandos básicos do Git e GitHub",
                    en: "Introductory course to the basic concepts and commands of Git and GitHub",
                },
                certificadoUrl: "https://github.com/brunotxrs/portfolio/blob/main/src/assets/img/cert/O%20basico%20de%20Git%20e%20GitHub.jpg?raw=true"
            },
            {
                titulo: {
                    pt: "Versionamento de Código com Git e GitHub",
                    en: "Code Versioning with Git and GitHub",
                },
                descricao: {
                    pt: "Curso sobre o uso do Git para controle de versão e GitHub para colaboração. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Course on using Git for version control and GitHub for collaboration. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/u7_6TloBEsuQEnq4tXv7LP4_jRb-gYEx97063mK_6Tg/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9ES1BKT0hPRy5qcGc"
            },
            {
                titulo: {
                    pt: "Princípios de Desenvolvimento de Software Colaborativo",
                    en: "Principles of Collaborative Software Development",
                },
                descricao: {
                    pt: "Curso sobre as práticas e princípios para desenvolvimento colaborativo de software. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Course on the practices and principles for collaborative software development. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/FHmIg8n11-ccaoI_u5s9ErY5mN8mmHo7R85smBgDiTI/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9HQlVPVVZWQy5qcGc"
            },
            {
                titulo: {
                    pt: "Contribuindo em um Projeto Open Source no GitHub",
                    en: "Contributing to an Open Source Project on GitHub",
                },
                descricao: {
                    pt: "Curso prático sobre como contribuir em projetos de código aberto no GitHub. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Practical course on how to contribute to open source projects on GitHub. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/Ti3SiDycOUZLxQeeke_a7L-jJYDmvE5k5wAQVyzpJZ0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9YTjFYRlpDSy5qcGc"
            }
            
        ],
        "Github":[
            {
                titulo: {
                    pt: "Contribuindo em um Projeto Open Source no GitHub",
                    en: "Contributing to an Open Source Project on GitHub",
                },
                descricao: {
                    pt: "Curso prático sobre como contribuir em projetos de código aberto no GitHub. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Practical course on how to contribute to open source projects on GitHub. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/Ti3SiDycOUZLxQeeke_a7L-jJYDmvE5k5wAQVyzpJZ0/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9YTjFYRlpDSy5qcGc"
            },
            {
                titulo: {
                    pt: "GitHub Experiência prática",
                    en: "GitHub Practical experience",
                },
                descricao: {
                    pt: "Experiência prática em hospedar e gerenciar projetos, criar repositórios, utilizar ferramentas do GitHub (Issues, Pull Requests, Actions) e manipular repositórios remotos via terminal (Git e comandos 'gh').",
                    en: "Practical experience in hosting and managing projects, creating repositories, using GitHub tools (Issues, Pull Requests, Actions), and manipulating remote repositories via terminal (Git and 'gh' commands).",
                },
                certificadoUrl: "https://th.bing.com/th/id/OIP.LH0z7LNsXmxMoap3PZDGeQHaER?rs=1&pid=ImgDetMain"
            }
        ],
        "npm":[
            {
                titulo: {
                    pt: "NPM (Node Package Manager)",
                    en: "NPM (Node Package Manager)",
                },
                descricao: {
                    pt: "Experiência prática em NPM para gerenciar dependências em projetos React (instalação, atualização, remoção) e compreensão do package.json.",
                    en: "Practical experience in NPM for managing dependencies in React projects (installation, update, removal) and understanding package.json.",
                },
                certificadoUrl: "https://th.bing.com/th/id/OIP.H2rmEzRgHE7N2HeLUCeUjAHaEB?w=970&h=526&rs=1&pid=ImgDetMain"
            }
        ],
        "Figma":[
            {
                titulo: {
                    pt: "Figma (Para Desenvolvimento Front-End)",
                    en: "Figma (For Front-End Development)",
                },
                descricao: {
                    pt: "Experiência prática em Figma para extrair medidas, cores, tipografia e especificações de design para implementação precisa em código front-end (HTML/CSS).",
                    en: "Practical experience in Figma to extract measurements, colors, typography, and design specifications for precise implementation in front-end code (HTML/CSS).",
                },
                certificadoUrl: "https://th.bing.com/th/id/R.d9f66b70e5f47918c52eb009a0a9d00a?rik=YYUwgIaQv0xF0w&pid=ImgRaw&r=0"
            }
        ],
        "Lógica de Programação":[
            {
                titulo: {
                    pt: "Aprendendo Lógica de Programação",
                    en: "Learning Programming Logic",
                },
                descricao: {
                    pt: "Curso introdutório aos fundamentos da lógica de programação. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Introductory course to the fundamentals of programming logic. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/AH1iHWJPQGCjJTkVNMGxhC2Ay14mkP6cyrQea5wAPys/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9JUlEzVUZTRS5qcGc"
            },
            {
                titulo: {
                    pt: "Desafios de Código: Aperfeiçoe Sua Lógica e Pensamento Computacional",
                    en: "Code Challenges: Improve Your Logic and Computational Thinking",
                },
                descricao: {
                    pt: "Curso com foco em exercícios práticos para aprimorar a lógica de programação. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Course focused on practical exercises to improve programming logic. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/rJbtpioW28plNhbcZcXjDGzZL-Dm21vLnpmAv-E_gqY/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9YUFZSQUVRRi5qcGc"
            },
            {
                titulo: {
                    pt: "Trabalhando com Variáveis",
                    en: "Working with Variables",
                },
                descricao: {
                    pt: "Curso específico sobre o conceito e uso de variáveis em programação. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Specific course on the concept and use of variables in programming. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/MhzRyuxIBQRt9hNcXfvgFSYhOcMem3n10JL_GMJpRIQ/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9LWlVXSDFPTi5qcGc"
            },
            {
                titulo: {
                    pt: "Entendendo Algoritmos e Fluxogramas",
                    en: "Understanding Algorithms and Flowcharts",
                },
                descricao: {
                    pt: "Curso sobre a criação e interpretação de algoritmos e fluxogramas. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Course on the creation and interpretation of algorithms and flowcharts. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/6-xR1EfeTyp3k_RmkVT_4IiOXzw3tR5CkE91EsumBbc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9XVkNHNFNGSC5qcGc"
            },
            {
                titulo: {
                    pt: "Trabalhando Com Estruturas Condicionais (if, else if, else)",
                    en: "Working With Conditional Structures (if, else if, else)",
                },
                descricao: {
                    pt: "Curso sobre a aplicação de estruturas condicionais em programação. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Course on the application of conditional structures in programming. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/wl662tIEbvIQ7EXEOh9mkXu66B824Xr0HUPLegwga4E/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9VTUNKUUgzVS5qcGc"
            },
            {
                titulo: {
                    pt: "Trabalhando Com Estruturas de Decisão (Estrutura Switch Case)",
                    en: "Working With Decision Structures (Switch Case Structure)",
                },
                descricao: {
                    pt: "Curso sobre o uso da estrutura de decisão switch case. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Course on the use of the switch case decision structure. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/WfMAPbo7alCm3oKmPvqTXZluwu-_vhZaqrqHdA6RZtI/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9CUFlMVzZLVy5qcGc"
            },
            {
                titulo: {
                    pt: "Trabalhando Com Estruturas de Repetição (for, while, do-while)",
                    en: "Working With Repetition Structures (for, while, do-while)",
                },
                descricao: {
                    pt: " Curso sobre a aplicação de estruturas de repetição em programação. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: " Course on the application of repetition structures in programming. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/dSr9M5I6cCOYill7Lu5UQe27JBC0i46bsr3Q_ONDvGM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9CNktZREM0QS5qcGc"
            },
            {
                titulo: {
                    pt: "Classificador de Nível de Herói",
                    en: "Hero Level Classifier",
                },
                descricao: {
                    pt: "Projeto prático de programação para classificar o nível de um herói. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Practical programming project to classify a hero's level. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/BjMpqhBrPwqDdJ7JXpWIuN0OfYwoQn5rZ2NQ84hm2WM/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9ZSVhGQktPUS5qcGc"
            },
            {
                titulo: {
                    pt: "Lógica de programação: mergulhe em programação com JavaScript",
                    en: "Programming logic: dive into programming with JavaScript",
                },
                descricao: {
                    pt: "Curso introdutório à lógica de programação utilizando a linguagem JavaScript como ferramenta prática.",
                    en: "Introductory course to programming logic using JavaScript as a practical tool.",
                },
                certificadoUrl: "https://github.com/brunotxrs/portfolio/blob/main/src/assets/img/cert/logica%20de%20programa%C3%A7%C3%A3o-mergulhe%20em%20programa%C3%A7%C3%A3o%20com%20javascript.jpg?raw=true"
            }
        ],
        "Complementares":[
            {
                titulo: {
                    pt: "Entendendo Comunicação Client x Server",
                    en: "Understanding Client x Server Communication",
                },
                descricao: {
                    pt: " Curso sobre os conceitos e fundamentos da comunicação entre cliente e servidor. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: " Course on the concepts and fundamentals of communication between client and server. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/jUd9_r3mbd0UjEhbmUm_jgfy-Q9-amUp2Vizy904AZI/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9RVFc4Uk1KUC5qcGc"
            },
            {
                titulo: {
                    pt: "Desafios de Projetos: Crie Um Portfólio Vencedor",
                    en: "Project Challenges: Create a Winning Portfolio",
                },
                descricao: {
                    pt: "Curso com foco em projetos práticos para a criação de um portfólio de destaque. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Course focused on practical projects for creating a standout portfolio. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/6UU16fv9IW5o3XmXVTu7p6y0C1UFK1BokoqgJRfQPdc/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9GTkNVUEFOWS5qcGc"
            },
            {
                titulo: {
                    pt: "Estrutura de um Software e Seu Ambiente de Desenvolvimento",
                    en: "Software Structure and Its Development Environment",
                },
                descricao: {
                    pt: "Curso sobre a organização de um software e a configuração do ambiente de desenvolvimento. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Course on the organization of software and the configuration of the development environment. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/GpCh4mRA7OOK_tZXo5PUtD7933EhRi1Jq2LjDKO-GGE/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9BN0JVRFhMOC5qcGc"
            },
            {
                titulo: {
                    pt: "Discover",
                    en: "Discover",
                },
                descricao: {
                    pt: "Introdução ao mundo da tecnologia e desenvolvimento de software, explorando o papel do desenvolvedor, conceitos da internet, frontend/backend, HTML, CSS, JavaScript e Git/GitHub para iniciar a jornada no desenvolvimento web.",
                    en: "Introduction to the world of technology and software development, exploring the role of the developer, internet concepts, frontend/backend, HTML, CSS, JavaScript, and Git/GitHub to start the web development journey.",
                },
                certificadoUrl: "https://github.com/brunotxrs/portfolio/blob/main/src/assets/img/cert/Discover.jpg?raw=true"
            },
            {
                titulo: {
                    pt: "Imersão Front-End 2ª Edição",
                    en: "Front-End Immersion 2nd Edition",
                },
                descricao: {
                    pt: "Certificado de participação na Imersão Front-End, 2ª Edição.",
                    en: "Certificate of participation in the Front-End Immersion, 2nd Edition.",
                },
                certificadoUrl: "https://github.com/brunotxrs/portfolio/blob/main/src/assets/img/cert/Imersao%20Front-end%20%202nd%20edi%C3%A7ao.jpg?raw=true"
            },
            {
                titulo: {
                    pt: "Introdução ao Desenvolvimento Front-end com a Ri Happy",
                    en: "Introduction to Front-End Development with Ri Happy",
                },
                descricao: {
                    pt: "Curso introdutório ao desenvolvimento front-end com foco na Ri Happy. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                    en: "Introductory course to front-end development with a focus on Ri Happy. I acquired this certificate during the Front-End Developer Training Course, enhancing my development skills.",
                },
                certificadoUrl: "https://assets.dio.me/ltIFEmAM10cvYE1hYPTe7oTCkIfa3Aykr3Sg4YA9ufQ/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9NNkgxOVVCVi5qcGc"
            },
            // {
            //     titulo: {
            //         pt: "Hardware",
            //         en: "Hardware",
            //     },
            //     descricao: {
            //         pt: "Curso básico sobre os componentes físicos de um computador (hardware).",
            //         en: "Basic course on the physical components of a computer (hardware).",
            //     },
            //     certificadoUrl: ""
            // },
            // {
            //     titulo: {
            //         pt: "Bases Numéricas",
            //         en: "Number Bases",
            //     },
            //     descricao: {
            //         pt: "Curso sobre os diferentes sistemas de numeração utilizados na computação.",
            //         en: "Course on the different numbering systems used in computing.",
            //     },
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
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
                descricao: "Curso sobre formulários em HTML. Adquiri este certificado durante o Curso de Formação Desenvolvedor Front-End, aprimorando minhas habilidades de desenvolvimento.",
                certificadoUrl: "https://assets.dio.me/5TptDYttb0_RTVUfQwaNfRpns3umm_tubr74FgOm9wE/f:webp/h:320/q:70/w:450/L2NlcnRpZmljYXRlcy9jb3Zlci9FQ0RQSkI3Vy5qcGc"
            },
            {
                titulo: "Trabalhando com Formulários em HTML",
                descricao: "Curso sobre formulários em HTML.",
                certificadoUrl: "link_para_certificado_html_2.pdf"
            },
            {
                titulo: "Trabalhando com Formulários em HTML",
                descricao: "Curso sobre formulários em HTML.",
                certificadoUrl: "link_para_certificado_html_2.pdf"
            }
            // ... mais certificados de HTML
        ],
        "CSS": [
            {
                titulo: "Fundamentos do CSS",
                descricao: "Curso sobre os fundamentos do CSS.",
                certificadoUrl: "link_para_certificado_css_1.pdf"
            },
            {
                titulo: "Estilizações Básicas com CSS",
                descricao: "Curso sobre estilizações básicas com CSS.",
                certificadoUrl: "link_para_certificado_css_2.pdf"
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
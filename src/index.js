import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CertificadosProvider } from './context/CertificadosContext';
import { ProjectProvider } from './context/ProjectContext';
import { LanguageProvider } from './context/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <LanguageProvider>
    <ProjectProvider>
      <CertificadosProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CertificadosProvider>
    </ProjectProvider>
  </LanguageProvider>

  

  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

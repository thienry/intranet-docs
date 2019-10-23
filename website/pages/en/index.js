/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');



const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
    const fa = {
      icon: 'fas fa-book-medical',
      iconBook: "fas fa-book",
      iconHelpdesk: "fas fa-toolbox"
    }

    const Docs = [
      {
        path: "prontuario-eletronico-paciente",
        title: "Prontuário Eletrônico do Paciente",
        doc: "Ir para a documentação",
        icon: 'fas fa-book-medical'
      },
      {
        path: "manual-helpdesk",
        title: "Manual Sistema de Chamados",
        doc: "Ir para a documentação",
        icon: 'fas fa-toolbox'
      },
      {
        path: "image-worklists",
        title: "Manual de Usuário Atendimento DIAG",
        doc: "Ir para a documentação",
        icon: 'fas fa-book'
      }
    ]

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    )

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

     

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <div className="docs-grid">
            {Docs.map(doc => (
              <a key={doc.path} className="item" href={`${docsPart + doc.path}/_introduction`}>
                <i className={doc.icon}></i>
                <h3>{doc.title}</h3>
                <p>{doc.doc}</p>
              </a>
            ))}
          </div>
        </div>
      </SplashContainer>
    )
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
      </div>
    );
  }
}

module.exports = Index;

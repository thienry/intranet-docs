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
        icon: 'fas fa-book'
      },
      {
        path: "manuais-sistemas-agfa",
        title: "Manuais Sistemas AGFA",
        doc: "Ir para a documentação",
        icon: 'fas fa-toolbox'
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

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    const Box = () => (
      <div className = "docs-grid">
        <a className="item" href={docUrl('pep/_introduction.html')}>
          <i className={fa.icon}></i>
          <h3>Prontuário Eletrônico do Paciente</h3>
          <p>Ir para a documentação</p>
        </a>
        <a className="item" href="/docs/helpdesk.html">
          <i className={fa.iconHelpdesk}></i>
          <h3>Manual Sistema de Chamados</h3>
          <p>Ir para a documentação</p>
        </a>
        <a className="item" href={docUrl('pep/_introduction.html')}>
          <i className={fa.iconBook}></i>
          <h3>Manuais dos Sistemas AGFA</h3>
          <p>Ir para a documentação</p>
        </a>
      </div>
    )

  

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

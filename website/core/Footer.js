/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5> Documentações </h5>
            <a href={this.docUrl('prontuario-eletronico-paciente/_introduction')}>
              Prontuário Eletrônico do Paciente
            </a>
            <a href={this.docUrl('clinical-forms/_introduction')}>
              Manuais Formulários Clínicos
            </a>
            <a href={this.docUrl('manual-helpdesk/_introduction')}>
              Manual Sistema de Chamados
            </a>
            <a href={this.docUrl('manuais-sistemas-agfa/_introduction')}>
              Manuais dos Sistemas da AGFA
            </a>
            <a href={this.docUrl('manuais-diversos/_introduction')}>
              Manuais Diversos
            </a>
            {/*<a href={this.docUrl('doc3.html', this.props.language)}>
              API Reference (or other categories)
            </a>
            */}
          </div>
          <div>
            <h5>Mais</h5>
            <a href="http://intranet/"> Intranet </a>
            <a href="http://intranet/blog"> Blog </a>
            <a href="http://intranet/events"> Eventos </a>
            <a href = "http://intranet/notificacao"> Notificação </a>
            <a href = "http://intranet/convenants"> Lista de Convênios </a>
          </div>
        </section>
          <img
            className="fbOpenSource"
            src={`${this.props.config.baseUrl}img/hjf.png`}
          />
 
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;

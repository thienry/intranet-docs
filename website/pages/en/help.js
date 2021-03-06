/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
  const helpdesk = "http://helpdesk";

  const supportLinks = [
    {
      content: `Aprenda mais sobre o PEP usando a [documentação neste site.](${docUrl(
        'pep/pep-introduction.html',
      )})`,
      title: 'Navegue pela Documentação',
    },
    {
      content: `Caso precise de uma ajuda técnica, abra um chamado no [HELPDESK](${helpdesk}) que a equipe de TI estará de prontidão para atende-lo(a).`,
      title: 'Abra um chamado',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Precisa de ajuda?</h1>
          </header>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;

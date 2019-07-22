---
id: _introduction
title: Backup do Active Directory no Windows Server 2012
sidebar_label: Backup do Active Directory no Windows Server 2012
---

## Fazer backup do Estado do Sistema

Abra o recurso de Backup do Windows Server clicando em **Ferramentas > Backup** no painel de gerenciamento do servidor.

No Painel de Ações, clique no item **Backup Único…** para abrir o assistente de backup:

![Imagem 1](../assets/manuais-diversos/active-directory/ad-1.png)

Na tela Opções de backup escolha a opção "Opções diferentes" para que possamos especificar os itens de backup desejados, e clique no botão Avançar:

![Imagem 2](../assets/manuais-diversos/active-directory/ad-2.png)

Na tela Selecionar Configuração de Backup escolha a opção Personalizar e clique no botão Avançar:

![Imagem 3](../assets/manuais-diversos/active-directory/ad-3.png)

Na tela Selecionar Itens para Backup clique no botão Adicionar Itens para que possamos escolher os itens que farão parte de nosso backup (no caso, o Estado do Sistema):

![Imagem 4](../assets/manuais-diversos/active-directory/ad-4.png)

Na janela Selecionar Itens, marque a checkbox Estado do Sistema e clique no botão OK:

![Imagem 5](../assets/manuais-diversos/active-directory/ad-5.png)

Após adicionar o item Estado do Sistema, clique no botão Avançar para prosseguir com o backup:

![Imagem 6](../assets/manuais-diversos/active-directory/ad-6.png)

Na tela seguinte vamos especificar o tipo de destino.Marque a opção "Unidades locais". Clique em
Avançar:

![Imagem 7](../assets/manuais-diversos/active-directory/ad-7.png)

Na tela Selecione o destino do backup, escolha a unidade que receberá os dados a serem salvos.

![Imagem 8](../assets/manuais-diversos/active-directory/ad-8.png)

Na tela de Confirmação, verifique se o item Estado do Sistema está listado na janela de Itens do backup, e clique no botão Backup para iniciar a cópia de segurança dos dados do ADDS:

![Imagem 9](../assets/manuais-diversos/active-directory/ad-9.png)

Esse processo pode levar vários minutos, devido ao volume de dados, e pode ser acompanhado na janela Progresso do backup:

![Imagem 10](../assets/manuais-diversos/active-directory/ad-10.png)

Quando o backup estiver finalizado, você verá a mensagem Concluído no status da janela de Progresso do backup. Clique no botão Fechar para encerrar o processo.

![Imagem 11](../assets/manuais-diversos/active-directory/ad-11.png)

A tela acima mostra que o backup foi concluído com sucesso.

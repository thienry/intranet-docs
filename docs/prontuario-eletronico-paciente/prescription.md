---
id: prescription
title: Prescrição
---

Na barra de ferramentas, **CLICAR** no botão **PRESCRIÇÃO**, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem29.png)

Ao abrir a tela de **PESCRIÇÃO**, deve-se atentar para as datas informadas, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem30.png)

O Sistema apresenta a **DATA DA PRESCRIÇÃO** (data atual) e a **VALIDADE** da prescrição. A validade está configurada para expirar às 23h59m do dia seguinte à realização da prescrição, portanto, o Profissional Médico deverá **RENOVAR** a prescrição antes deste horário ou o Sistema cancelará todos os itens prescritos.

No campo "PRESCREVER" abaixo:

![Prescrição](../assets/imagem31.png)

 O profissional médico fará a digitação dos itens que o paciente necessita (dietas, medicamentos, cuidados e/ou hemocomponentes) utilizando o mesmo campo e podendo inserir todos os itens aleatoriamente.

Conforme os itens forem sendo inseridos, o Profissional Médico poderá utilizar a funcionalidade **ORDENAR ITENS**, para obter uma melhor visualização dos itens inseridos, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem32.png)

Ao digitar o item o Sistema faz a seleção na forma de auto-complete, ou seja, o mesmo irá trazer todas as referências aos caracteres digitados independente se no início, no centro ou no final da palavra e utilizando o recurso Tall Man Letters, distinguindo as descrições para uma melhor identificação o medicamento desejado, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem33.png)

OBS.: No exemplo acima, ao digitarmos **TRAMA** o Sistema apresenta as referências para MEDICAMENTOS identificados como **TRAMAL** e itens que possuem o PRINCÍPIO ATIVO **TRAMADOL**.

O sistema iria trazer quaisquer outros itens que apresentassem a informação **TRAMA** em alguma parte do nome ou da descrição do Princípio Ativo.

Desta forma pode-se concluir que para os itens **MEDICAMENTOS** o Profissional Médico poderá pesquisar tanto pelo nome comercial quanto pelo(s) princípio(s) ativo(s), conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem34.png)

Após escolher o medicamento desejado o Sistema abrirá os campos para a inclusão das informações complementares ao medicamento selecionado, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem35.png)

Os referidos campos determinam:

- **Dose**: Deverá ser indicada a dose do item prescrito. Entende-se por dose do medicamento, a quantidade capaz de provocar uma resposta terapêutica desejada no paciente, preferencialmente sem outras ações (efeitos colaterais) no organismo;

- **Unidade de dose**: Deverá ser indicada a unidade de dose do item prescrito (Ex.: FRASCO AMPOLA, AMPOLA, ML, GOTAS, MG, MCG, etc.). Esta configuração será realizada por item e avaliada pela Unidade Hospitalar para garantir que o Profissional Médico tenha disponível todas as possibilidades específicas do item selecionado;

- **Via**: Também configurada por item, tem o objetivo de listar as vias possíveis para cada medicamento;

- **Intervalo**: São as freqüências de administração do medicamento (Ex.: 2h/2h, 6h/6h, Dose única, etc.). As opções seguirão a grade de horários padrão determinada pela Farmácia Corporativa em conjunto com a Unidade Hospitalar;

- **Duração (em dias)**: Campo indicativo da quantidade de dias para itens do tipo antimicrobianos onde o usuário poderá indicar qual a previsão de utilização do medicamento para acompanhamento da quantidade de dias utilizado.

- **Início imediato**: O Sistema informará como primeira administração do item, o horário atual, ou seja, o paciente precisa receber o item prescrito o quanto antes;

- **S/N (Se necessário)**: Indicará para a enfermagem que o item deverá ser administrado de acordo com uma indicação pré-definida pelo médico, neste caso o Sistema obrigará uma observação onde o médico deverá indicar qual será a indicação, por exemplo: **se dor**, **se febre**, etc.;

- **ACM (A critério médico)**: Indicará para a enfermagem que o item deverá ser administrado após uma nova avaliação do Profissional Médico, neste caso, o pré-requisito ainda não é definido e não será obrigatória a definição do campo observação;

- **Observação**: Este campo será utilizado pelo Profissional Médico a fim de informar qualquer orientação necessária à administração do medicamento de forma optativa, obrigatória ou caso o item tenha sido indicado como S/N (se necessário);

- **Data/Hora início**: Indica o primeiro horário que será administrado o medicamento. Deve ser avaliado e alterado caso o Profissional Médico entenda que o item deve ser antecipado ou atrasado de acordo com o estado do paciente e/ou interações existentes na prescrição;

- **Previsão fim**: Campo que será utilizado para definir a previsão de utilização de itens controlados. No caso dos antimicrobianos, a data é informada automaticamente através da informação inserida no campo **duração em dias**;

- **Aprazamento**: Este campo já aparece marcado, seu objetivo é indicar que a medicação seguirá a grade padronizada e definida pela Unidade Hospitalar. No caso de alteração da **data/hora início**, o Profissional Médico poderá optar por **DESMARCAR** este check-box e o Sistema realizará adequações nos intervalos de administração seguintes, como exemplo:

    - 8h/8h (06h, 14h e 22h) – Com o check-box aprazamento **MARCADO** o Sistema seguirá a definição da Unidade Hospitalar e colocará como data/hora início o horário existente na grade mais próximo do atual, ou seja, se a prescrição foi confirmada às 07h o horário início será 14h (próximo horário da grade);

    - Se o Profissional Médico mudar o horário início para 10h, por entender que a medicação deve ser antecipada, mas se MANTIVER o check-box aprazamento **MARCADO**, o Sistema indicará 10h como sendo o primeiro horário e seguirá conforme a grade definida pela Unidade Hospitalar para os horários seguintes, ou seja, 14h, 22h e assim por diante;

    - Se o Profissional Médico mudar o horário início para 10h, por entender que a medicação deve ser antecipada, mas DESMARCAR o check-box **APRAZAMENTO**, o Sistema indicará 10h como sendo o primeiro horário e recalculará os demais horários de acordo com o intervalo de aprazamento (08:00), ou seja, os demais horários serão 18h, 02h e assim por diante.

- **Vel. infusão/unid. vel./bomba infusora**: Este campo será utilizado quando da prescrição de alguns itens em específico. Neste campo o Profissional Médico devera selecionar a unidade de velocidade específica, onde a mesma já marcará o check-box **BOMBA INFUSORA**. Esta informação será apresentada na impressão da prescrição de acordo com o modelo configurado.

<hr>

<!-- Prescrição de Medicamentos -->

## Associando Medicamentos e Diluentes

Ao prescrever itens do tipo **MEDICAMENTO** o Sistema irá apresentar os diluentes/aditivos associados ao mesmo de acordo com a configuração/cadastro previamente definidos pela Farmácia Corporativa em conjunto com a Unidade Hospitalar. Estes itens podem ser aceitos pelo Profissional Médico ou podem ser alterados, caso haja necessidade, e devem ser informados no campo **ASSOCIAÇÕES/DILUENTES**, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem36.png)

A coluna **TIPO** indica se o item é um diluente ou medicamento associado ao item prescrito, de acordo com a sua característica.

Ao clicar no botão abaixo:

![Prescrição](../assets/imagem37.png)

o Sistema apresentará os itens prescritos, conforme apresentado na figura abaixo: 

![Prescrição](../assets/imagem38.png)

### Prescrição de Medicamentos com alteração do KIT

O Sistema apresenta automaticamente, conforme a **VIA DE ACESSO** indicada, os medicamentos que compõem o KIT vinculado ao medicamento prescrito e definido pela Farmácia Corporativa em conjunto com a Unidade Hospitalar. O Profissional Médico pode retirar, conforme apresentado nas figuras abaixo:

![Prescrição](../assets/imagem39.png)

Ou acrescentar outro(s) medicamento(s) de acordo com a necessidade:

![Prescrição](../assets/imagem40.png)

**OBS.**: Os Kit**s que sofrerem alterações são identificados pelos Farmacêuticos durante o processo de **VALIDAÇÃO DA PRESCRIÇÃO** para autorizar a dispensação dos respectivos itens prescritos.

### Prescrição de Medicamentos NÃO Padrão

Itens não padronizados são aqueles que não compõem o estoque e o processo de compra normal da Unidade Hospitalar, porém, em vários momentos são necessários para o cuidado clínico do paciente.

Ao digitar o medicamento, este não sendo padrão da Unidade Hospitalar, o Sistema apresentará o identificador abaixo:

![Prescrição](../assets/imagem41.png)

 Ao lado direito do nome do medicamento, conforme apresentado na figura abaixo:

 ![Prescrição](../assets/imagem42.png)

 Ao escolher este item o Sistema executará pesquisa de busca de outros itens que possuam o mesmo **PRINCÍPIO ATIVO (substância)**, **CLASSE TERAPÊUTICA**, **GRUPO FARMACOLÓGICO**, e/ou **FORMA FARMACÊUTICA**. O objetivo desta pesquisa é apresentar para o Profissional Médico os medicamentos padronizados na Unidade Hospitalar e que podem substituir a prescrição do item não padronizado, conforme apresentado na figura abaixo:

 ![Prescrição](../assets/imagem43.png)

 O Profissional Médico poderá optar por **SUBSTITUIR (F2)** o item prescrito por uma das opções indicadas pelo Sistema; **MANTER (F3)** sua conduta ou **CANCELAR (F4)** o item prescrito e prescrever outro medicamento.

 Os **BOTÕES** apresentados na tela têm o seguinte significado:

![Prescrição](../assets/imagem44.png)

 - Substituirá o medicamento prescrito por um dos medicamentos apresentados na lista de possibilidades exibida, caso esta seja a sua decisão;

 ![Prescrição](../assets/imagem45.png)

 - É a indicação do Profissional Médico de que ele deseja manter sua conduta com relação ao medicamento prescrito mesmo sabendo que o mesmo não é padronizado pela Unidade Hospitalar bem como a definição de que nenhum dos medicamentos apresentados como possível substituição atendem aos critérios necessários  para  o  cuidado  com  o  paciente.  Se  o  Profissional  Médico  optar  por **MANTER** o  item  não padronizado, o Sistema apresentará o formulário **SOLICITAÇÃO DE MEDICAMENTOS NÃO PADRONIZADOS** para o preenchimento da justificativa e posterior aquisição e/ou liberação do mesmo, conforme apresentado na figura abaixo:

    ![Prescrição](../assets/imagem46.png)

    Ao **SALVAR** a digitação da justificativa, será impresso o relatório **SOLICITAÇÃO DE MEDICAMENTOS NÃO PADRONIZADOS**, que deverá ser assinado pelo Profissional Médico e enviado para a Farmácia, conforme apresentado na figura abaixo:

    ![Prescrição](../assets/imagem47.png)

    Após a impressão do formulário, o Profissional Médico deverá clicar no botão **FECHAR** e prosseguir com a prescrição, informando a dose, unidade de dose e etc., conforme já explicados anteriormente.

    Ao lado do item justificado será apresentado o botão abaixo:

    ![Prescrição](../assets/imagem48.png)

    Este botão possibilita a visualização das informações inseridas na justificativa por qualquer usuário que tenha acesso à prescrição, podendo analisar a conduta utilizada, pelo Profissional Médico, para a prescrição do medicamento, conforme apresentado na figura abaixo:

    ![Prescrição](../assets/imagem49.png)

![Prescrição](../assets/imagem50.png)

 - Cancelará a prescrição deste medicamento, ou seja, o medicamento não será substituído por uma das opções exibidas e o Profissional Médico cancelará a prescrição do medicamento anteriormente selecionado ou fará a prescrição de outro medicamento;

**OBS.**: No exemplo apresentado, o Sistema informa que o medicamento **ACETILCISTEINA 600MG ENV** não é padronizado, mas existem outros medicamentos que possuem o mesmo princípio ativo (substância) e/ou grupo farmacológico e são padronizados na Unidade Hospitalar.

### Prescrição de Medicamentos de Alto Risco

Para os medicamentos do tipo **ALTO RISCO** a identificação do item será apresentada pelo ícone abaixo:

![Prescrição](../assets/imagem51.png)

conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem52.png)

### Prescrição de Medicamentos NÃO Cadastrados

Para a prescrição de medicamentos não cadastrados o Profissional Médico deverá digitar a descrição **MEDICAMENTO NÃO CADASTRADO *NP*** e inserir o nome comercial ou princípio ativo do medicamento no campo **OBSERVAÇÃO**, além, das informações complementares e referentes à dose, intervalo, via de acesso, etc. Estas informações serão impressas na prescrição e também no Mapa de Distribuição gerado pela Farmácia.

![Prescrição](../assets/imagem53.png)

Ao prescrever um medicamento não cadastrado, o Sistema apresentará o formulário **SOLICITAÇÃO DE MEDICAMENTOS NÃO PADRONIZADOS** para o preenchimento da justificativa e posterior aquisição e/ou liberação do mesmo, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem54.png)

Ao **SALVAR** a digitação da justificativa, será impresso o relatório **SOLICITAÇÃO DE MEDICAMENTOS NÃO PADRONIZADOS**, que deverá ser assinado pelo Profissional Médico e enviado para a Farmácia, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem55.png)

Após a impressão do formulário, o Profissional Médico deverá clicar no botão **FECHAR** e prosseguir com a prescrição informando a dose, unidade de dose e etc., conforme já explicados anteriormente.

Ao lado do item justificado será apresentado o botão abaixo: 

![Prescrição](../assets/imagem56.png)

Este botão possibilita a visualização das informações inseridas na justificativa por qualquer usuário que tenha acesso à prescrição, podendo analisar a conduta utilizada, pelo Profissional Médico, para a prescrição do medicamento, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem57.png)

### Interação Medicamentosa

O Sistema está configurado para indicar os medicamentos que possuem interação medicamentosa. Serão identificadas duas possibilidades de interação: **PREJUDICIAIS** e **PROIBIDAS**.

![Prescrição](../assets/imagem58.png)

- Esta informação serve como um alerta ao Profissional Médico no intuito de indicar o risco da utilização dos dois medicamentos prescritos, porém, podem ser liberados através de uma justificativa;

![Prescrição](../assets/imagem59.png)

- Esta informação indica que **NÃO** será permitida a prescrição dos dois medicamentos indicados por serem incompatíveis e/ou extremamente prejudiciais ao paciente;

![Prescrição](../assets/imagem60.png)

- Esta informação serve como uma alerta ao Profissional Médico no intuito de indicar que existe uma interação medicamentosa, porém ela não é prejudicial e não necessita de justificativa;

Ao confirmar a prescrição que possuir medicamentos com interação medicamentosa (Ex.: CETOPROFENO + ENOXAPARINA), o Sistema exibirá a tela **INTERAÇÕES MEDICAMENTOSAS DA PRESCRIÇÃO**, conforme figura apresentada abaixo:

![Prescrição](../assets/imagem61.png)

Caso o Profissional Médico clique no botão abaixo: 
 
![Prescrição](../assets/imagem62.png)

E as interações apresentadas possuam efeito **POTENCIALMENTE PERIGOSAS**, o Sistema informará sobre a obrigatoriamente do preenchimento da justificativa, não permitindo a continuidade do processo sem o preenchimento da mesma.

O Profissional Médico deverá clicar na barra **AZUL** para a abertura da tela de justificativa, conforme apresentado nas figuras abaixo:

![Prescrição](../assets/imagem63.png)

Com	a justificativa	preenchida,	o Sistema permitirá	a inclusão do medicamento ao clicar	no botão abaixo:

![Prescrição](../assets/imagem64.png)

Caso o usuário deseje visualizar a justificativa da interação, após ter fechado a tela acima, basta clicar no ícone abaixo:

![Prescrição](../assets/imagem65.png)

conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem66.png)

### Itens com Controle de Dose Máxima

O Sistema está configurado para apresentar os medicamentos que possuem controle de **DOSE MÁXIMA**, e quando for realizada a prescrição dos medicamentos que possuírem este controle, será apresentada mensagem informativa, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem67.png)

A configuração de **DOSE MÁXIMA** será validada por Faixa Etária do Paciente conforme regra de negócio estabelecida

### Itens que NÃO Obrigam Dose

Alguns itens podem ser prescritos sem a necessidade de informação de sua respectiva dose **(Ex.: INSULINA)**. O objetivo é permitir que os medicamentos que possuam características específicas e que dependem da informação de um resultado de exame ou de outros dados clínicos mutáveis possam ser prescritos sem a obrigatoriedade da informação de quantidade e unidade de dose.

![Prescrição](../assets/imagem68.png)

Neste caso não será apresentada a crítica de obrigatoriedade da dose e unidade de dose quando essas duas informações não estiverem preenchidas, no entanto, o campo **OBSERVAÇÃO** será obrigatório e não será gerada a distribuição para estes itens.

### Prescrição de Medicamentos que OBRIGAM Diluentes

Conforme definição da Farmácia Corporativa em conjunto com a Unidade Hospitalar, alguns medicamentos **OBRIGAM** a inclusão de diluentes para o respectivo preparo e administração no paciente, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem69.png)

### Prescrição de Medicamentos de USO RESTRITO

Conforme definição da Farmácia Corporativa em conjunto com a Unidade Hospitalar, quando o Profissional Médico prescrever determinado medicamento considerado de **USO RESTRITO**, o Sistema irá apresentar mensagem indicando esta especificidade, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem70.png)

Ao clicar na opção **SIM**, o Sistema apresentará a tela de justificativa, que será obrigatório o seu preenchimento pelo Profissional Médico, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem71.png)

Ao **SALVAR** a digitação da justificativa, o Sistema irá imprimir o respectivo relatório que deverá ser assinado pelo Profissional Médico e anexado ao Prontuário do paciente, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem72.png)

### Prescrição de Drippings

Para a prescrição de **DRIPPINGS**, o Profissional Médico deverá informar o **MEDICAMENTO PRINCIPAL**, com a respectiva dose, unidade da dose, via de acesso e intervalo e **ASSOCIAR** os demais medicamentos que farão a composição do referido dripping, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem73.png)

- Quadro 1: Medicamento Principal;
- Quadro 2: Medicamentos Associados;

![Prescrição](../assets/imagem74.png)

Clique no botão acima para inserir o Dripping na prescrição.

### Prescrição de Antimicrobianos

Para a prescrição de **ANTIMICROBIANOS**, o Profissional Médico deverá informar o tempo de **DURAÇÃO** do uso do medicamento para que o Sistema informe a data de **PREVISÃO DE FIM**. Desta forma, o Profissional Médico fará o acompanhamento diário da quantidade de dias que o medicamento já foi administrado e quantos dias ainda faltam para a conclusão do tratamento, podendo, caso seja necessário, prorrogar ou substituir o medicamento prescrito de acordo com a necessidade do paciente, conforme apresentado nas figuras abaixo:

![Prescrição](../assets/imagem75.png)

![Prescrição](../assets/imagem76.png)

Ao digitar um medicamento **ANTIMICROBIANO**, o Sistema abrirá o formulário **JUSTIFICATIVA DE MEDICAMENTOS ANTIMICROBIANOS**.

### Itens com Intervalos maiores que 24H

O Sistema permite associar um horário com intervalo maior que 24h. Ao realizar a prescrição de dietas, medicamentos, cuidados e/ou hemocomponentes se o horário for maior que 24h será obrigado informar a data/hora início do item e a partir desta será calculado o próximo horário previsto de acordo com o cadastro de horário.

Por exemplo, se um medicamento for prescrito para ter início no dia **30/06/2015 20:00** e o intervalo selecionado para ele foi de **3 EM 3 DIAS** o Sistema irá gerar a distribuição para o dia **30/06/2015 20:00** e os demais itens ficarão programados para o dia **03/07/2015 20:00** e assim por diante. Ao acessar a tela de prescrição no dia **01/07/2015** os medicamentos programados serão exibidos, apenas para fins informativos, sendo possível apenas suspendê-los ou adicionar mais itens.

![Prescrição](../assets/imagem77.png)

**OBS.**: Ao realizar a cópia da prescrição anterior não serão carregados os itens que estiverem caracterizados como **PROGRAMADOS**, apenas serão copiados os itens com o intervalo menor que 24h.

No dia em que o item deverá ser administrado conforme a prescrição, o sistema já apresentará o mesmo, como item válido da prescrição do dia, antes da cópia da prescrição

![Prescrição](../assets/imagem78.png)

### Cópia de Itens Prescritos

O Sistema permite que seja realizada a cópia de um item prescrito, possibilitando ao Profissional Médico replicar todas as informações digitadas anteriormente e efetuando as alterações apenas do que for necessário, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem79.png)

### Exclusão / Suspensão de Itens Prescritos

O Sistema permite o processo de exclusão ou de suspensão de itens prescritos. Este processo é realizado no mesmo caminho da inclusão dos itens só que em momentos distintos:

- **Exclusão**: Será permitida para todos os itens que AINDA NÃO FORAM CONFIRMADOS, pois, entende-se que o Profissional Médico pode ter confundido a inserção deste item na prescrição, conforme apresentado na figura abaixo:

    ![Prescrição](../assets/imagem80.png)

O Sistema irá permitir tanto a exclusão de um item principal quanto a de itens associados. Por esta razão em cada linha será apresentado o ícone abaixo para exclusão;

![Prescrição](../assets/imagem81.png)

- **Suspensão**: O processo de suspensão do item será apresentado no mesmo caminho do processo de exclusão, porém, esta ação será apenas habilitada para itens **JÁ CONFIRMADOS**. Desta forma o ícone abaxo:  

    ![Prescrição](../assets/imagem82.png)

    Será apresentado, conforme apresentado na figura abaixo:

    ![Prescrição](../assets/imagem83.png)

O Sistema também permite que todos os itens da prescrição possam ser suspensos ao mesmo tempo. Para este processo existe o botão abaixo: 

![Prescrição](../assets/imagem84.png)

Localizado na parte inferior da tela, conforme apresentado na figura abaixo:,

![Prescrição](../assets/imagem85.png)

<hr>

<!-- Prescrição de Dietas -->

## Prescrição de Dietas

### Dietas Comuns

Para a prescrição de Dietas Comuns o Profissional Médico deve posicionar o cursor no campo **PRESCREVER**, conforme visto anteriormente na prescrição de medicamentos e digitar o nome da Dieta desejada. Lembrando que o campo funciona como auto-complete, ou seja, a cada seqüência de caracteres digitados serão apresentadas as opções que atendam à pesquisa, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem86.png)

Os referidos campos determinam:

- **Via de acesso**: Configurada por item com o objetivo de apresentar as vias possíveis para cada dieta;

- **Intervalo**: São as freqüências de administração das dietas. As opções seguirão a grade de horários padrão determinada pelo Setor de Nutrição da Unidade Hospitalar;

- **Observação**: Este campo será utilizado pelo Profissional Médico para qualquer orientação necessária para a liberação da dieta e será preenchida de forma optativa;

### Dietas Enterais

Para a prescrição de Dietas Enterais o Profissional Médico deve posicionar o cursor no campo **PRESCREVER**, conforme visto anteriormente na prescrição de Dietas Comuns e digitar o nome do produto, exemplo: ***Nutrison, Nutridrink***, etc. Lembrando que o campo funciona como auto-complete, ou seja, a cada seqüência de caracteres digitados serão apresentadas as opções que atendam à pesquisa, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem87.png)

Os referidos campos determinam:

- **Via de acesso**: Configurada por item com o objetivo de apresentar as vias possíveis para cada dieta;

- **Intervalo**: São as freqüências de administração das dietas. As opções seguirão a grade de horários padrão determinada pelo Setor de Nutrição da Unidade Hospitalar;

- **Observação**: Este campo será utilizado pelo Profissional Médico para qualquer orientação necessária para a liberação da dieta e será preenchida de forma optativa;

### Dieta Parenteral

Este tipo de dieta deverá constar na prescrição apenas para controle informativo e checagem na prescrição impressa. O Profissional Médico deverá seguir o procedimento habitual para a solicitação do preparo para este tipo de dieta. Para o registro no Sistema, o Profissional Médico deve posicionar o cursor no campo **PRESCREVER**, conforme visto anteriormente na prescrição das demais dietas, e digitar o item: **NUTRICAO PARENTERAL**, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem88.png)

Os referidos campos determinam:

- **Via de acesso**: Configurada por item com o objetivo de apresentar as vias possíveis para a dieta;

- **Intervalo**: São as freqüências de administração das dietas. As opções seguirão a grade de horários padrão determinada pelo Setor de Nutrição da Unidade Hospitalar;

- **Observação**: Este campo será utilizado pelo Profissional Médico para qualquer orientação necessária para a liberação da dieta e será preenchida de forma optativa;

<hr>


<!-- Prescrição de Cuidados -->

## Prescrição de Cuidados

Para a prescrição de Cuidados o Profissional Médico deve posicionar o cursor no campo **PRESCREVER**, conforme visto anteriormente na prescrição de medicamentos e dietas e digitar o nome do Cuidado desejado. Lembrando que o campo funciona como auto-complete, ou seja, a cada seqüência de caracteres digitados serão apresentadas opções que atendam à pesquisa, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem89.png)

Os referidos campos determinam:

- **Complemento**: Cuidados e/ou preocupações adicionais que devem ser indicados ao cuidado selecionado;

- **Intervalos**: Intervalos de execução/realização do cuidado, tais como: **4h/4h, 3x ao dia, etc...** As opções seguirão a grade de horários padrão da Unidade Hospitalar;

- **Início imediato**: O Sistema informará como primeiro horário do cuidado o horário atual, ou seja, o paciente precisa receber o cuidado imediatamente;

- **Observação**: Este campo será utilizado pelo Profissional Médico para qualquer orientação necessária para o acompanhamento do paciente e será preenchido de forma optativa;

- **Data/Hora início**: Indica o primeiro horário que o cuidado será realizado, devendo ser avaliado e alterado caso o Profissional Médico entenda que o cuidado deve ser antecipado ou atrasado em virtude do estado do paciente.

<hr>

<!-- Prescrição de Hemocomponentes -->

## Prescrição de Hemocomponentes

Para a prescrição de Hemocomponentes o Profissional Médico deve posicionar o cursor no campo **PRESCREVER**, conforme visto anteriormente na prescrição de medicamentos, dietas e cuidados e digitar o nome do Hemocomponente desejado. Lembrando que o campo funciona como auto-complete, ou seja, a cada seqüência de caracteres digitados serão apresentadas opções que atendam à pesquisa, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem90.png)

Os referidos campos determinam:

- **Quantidade**: Deverá ser indicada a quantidade que o paciente necessita para a sua terapia;

- **Unidade de dose**: Deverá ser indicada a unidade de dose do item prescrito **(Ex.: BOLSA, ML, etc.)**;

- **Via de acesso**: Configurada por item com o objetivo de apresentar as vias possíveis para o hemocomponente;

- **Intervalos**: Intervalos de administração do(s) hemocomponente(s), **(Ex.: CONTÍNUO, 3 x ao dia, etc.)**. Os intervalos seguirão a grade de horários padrão estabelecida pela Unidade Hospitalar;

- **Início imediato**: O Sistema informará como primeiro horário do hemocomponente o horário atual, ou seja, o paciente precisa receber o hemocomponente imediatamente;

- **Observação**: Este campo será utilizado pelo Profissional Médico para qualquer orientação necessária para o acompanhamento do paciente, será preenchido de forma optativa;

<hr>

<!-- Prescrição Anterior -->

## Copiar Prescrição Anterior

A cópia de prescrições anteriores é uma forma de facilitar o processo de prescrição do Profissional Médico, pois, entende-se que vários pacientes necessitam de uma continuidade do tratamento clínico e esta continuidade é retratada também na prescrição.

Para copiar uma prescrição anterior (Ex.: dia anterior ou qualquer outra data), deve-se inicialmente clicar no calendário superior, selecionar a data vigente e clicar no botão abaixo:

![Prescrição](../assets/imagem91.png)

Conforme apresentado na figura abaixo, ou ‘CLICAR’ no botão abaixo:

![Prescrição](../assets/imagem92.png)

![Prescrição](../assets/imagem93.png)

Em seguida, será apresentada a seguinte tela:

![Prescrição](../assets/imagem94.png)

Nesta tela pode-se visualizar não apenas a última prescrição como também prescrições anteriores e selecionar os itens desejados, bastando escolher a opção **OUTRAS DATAS DE PRESCRIÇÃO**. O Sistema abrirá uma aba lateral para que seja permitida a escolha da data desejada para a cópia, conforme apresentado nas figuras abaixo:

![Prescrição](../assets/imagem95.png)

Caso o Profissional Médico não deseje selecionar algum dos itens anteriormente prescritos, basta utilizar a barra lateral e **DESMARCAR** o item desejado, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem96.png)

Vale salientar a existência da funcionalidade do check-box **MARCAR/DESMARCAR TODOS** que é um facilitador para a seleção dos itens desejados:

![Prescrição](../assets/imagem97.png)

<hr>

<!-- Impressão Prescrição -->

## Impressão da Prescrição

Ao concluir a digitação da prescrição, deve-se clicar no botão abaixo: 

![Prescrição](../assets/imagem98.png)

Para a gravação da mesma. Após a confirmação, o Sistema apresentará a seguinte pergunta:

![Prescrição](../assets/imagem99.png)

Clicar na opção **SIM**:

O usuário terá a seguinte tela de opções para a impressão da prescrição:

![Prescrição](../assets/imagem100.png)

![Prescrição](../assets/imagem101.png)

- Com este Check-box **MARCADO**, o Sistema irá desconsiderar os itens que já foram impressos anteriormente ou por outro Profissional Médico, devendo estar sempre ‘MARCADO’ quando for necessário a impressão de acréscimos ou modificações na prescrição vigente;

![Prescrição](../assets/imagem102.png)

- Imprimirá **TODOS** os itens da prescrição que ainda não foram impressos ou que já foram impressos. Dependendo da opção marcada no check-box acima;

![Prescrição](../assets/imagem103.png)

- Imprimirá **APENAS** itens prescritos pelo **PROFISSIONAL MÉDICO** logado que foram ou não impressos de acordo com o check-box acima;

![Prescrição](../assets/imagem104.png)

- Imprimirá itens prescritos **APENAS** por profissionais da **MESMA CATEGORIA** do usuário logado que foram ou não impressos de acordo com o check-box acima;

![Prescrição](../assets/imagem105.png)

- Com este check-box **MARCADO** serão impressos os itens prescritos com intervalos maiores que 24 horas, ou seja, **PROGRAMADOS** para datas específicas.

![Prescrição](../assets/imagem106.png)

- Será habilitado apenas quando a opção “Apenas os itens que ainda não foram impressos” estiver desmarcada, pois itens que não foram impressos devem ser **SEMPRE** impressos em sua totalidade, ou seja, esta ferramenta permite que o usuário poderá escolha itens específicos (já impressos) para reimpressão, quando houver necessidade.

Será utilizado o Layout de impressão da prescrição com o formato **ZEBRADO**. Conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem107.png)

Atentar para os ícones que serão impressos ao lado dos medicamentos e que identificam quais são: **ALÉRGICOS**, **ALTO RISCO**, e/ou **ALÉRGICO E ALTO RISCO** (simultâneos), conforme apresentado nas figuras abaixo:

![Prescrição](../assets/imagem108.png)

<hr>

<!-- Prescrição salva como ‘TUTOR’ -->

## Prescrição salva como ‘TUTOR’

A prescrição poderá ser salva (gravada) no Sistema como **TUTOR**, permitindo ao Profissional Médico resgatar a referida prescrição quando a mesma repetir um mesmo padrão, por exemplo: **PRESCRIÇÃO DE ADMISSÃO NA UTI**. Para utilizar esta funcionalidade, o Profissional Médico deve seguir as orientações conforme apresentado a seguir:

### Gravar Prescrição

A prescrição deverá estar **CONFIRMADA** para que o Sistema permita salvá-la como **TUTOR/FAVORITOS**:

![Prescrição](../assets/imagem109.png)

### Salvar como ‘TUTOR

Após ‘CONFIRMAR’ a prescrição, o Profissional Médico deverá clicar no botão abaixo:

![Prescrição](../assets/imagem112.png)

Para gravar a referida prescrição como ‘TUTOR’:

![Prescrição](../assets/imagem110.png)

Nesta tela, o Profissional Médico irá definir a descrição do respectivo **TUTOR** e como o mesmo poderá ser visualizado para os demais Profissionais Médicos nas próximas prescrições. O Sistema possibilita as seguintes opções:

- **Profissional**: O **TUTOR** será visualizado nas próximas prescrições apenas pelo Profissional Médico logado, ou seja, o responsável pela criação do **TUTOR**. Esta opção de configuração é apresentada pelo Sistema como padrão;

- **Especialidade**: O **TUTOR** será visualizado por todos os Profissionais Médicos que possuírem a mesma especialidade em seu cadastro;

- **Categoria**: O **TUTOR** será visualizado por todos os Profissionais Médicos que possuírem a mesma categoria em seu cadastro;

- **Todos**: o **TUTOR** será visualizado por todos os Profissionais Médicos que possuam usuário e senha para acesso ao Sistema;

Ao **CONFIRMAR** o cadastro, o Sistema apresentará a mensagem abaixo:

![Prescrição](../assets/imagem111.png)

### Pesquisando Prescrição salva como ‘TUTOR’

O sistema possibilita realizar a prescrição informando o **TUTOR** diretamente no campo em que são digitados os medicamentos, bastando para isto, que o Profissional Médico digite a nomenclatura do ‘TUTOR’ desejado e o Sistema realizará a sua localização, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem113.png)

Outra opção é utilizar o botão abaixo: 

![Prescrição](../assets/imagem114.png)

Para selecionar a opção desejada, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem115.png)

Clicando duas vezes sobre o **TUTOR** desejado, o Sistema apresentará os itens relacionados e o Profissional Médico poderá escolher apenas alguns dos itens apresentados **DESMARCANDO** o item não desejado e/ou deverá clicar no botão **CONFIRMAR** para prosseguir, normalmente, com a prescrição. Selecionados os itens, o Profissional Médico poderá incluir outros itens se necessário ou confirmar apenas os itens selecionados gravando a prescrição, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem116.png)

<hr>

<!-- Reimpressão da Prescrição (Tela de Prescrição) -->

## Reimpressão da Prescrição (Tela de Prescrição)

A prescrição poderá ser reimpressa abrindo a tela e clicando no ícone abaixo:

![Prescrição](../assets/imagem118.png)

Localizado na parte superior da tela, conforme apresentado na figura abaixo:

![Prescrição](../assets/imagem117.png)

![Prescrição](../assets/imagem119.png)

OBS.: Lembrando quê, o check-box abaixo:

![Prescrição](../assets/imagem120.png)

**MARCADO**, indica que deverá ser impresso **APENAS** os novos itens inseridos após a confirmação de uma prescrição já realizada.
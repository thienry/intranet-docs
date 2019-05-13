---
id: 2-clinical-parameters
title: Parâmetros Clínicos
---

## Conceito Completo

Podemos chamar de Parâmetros Clínicos os campos aferíveis dos formulários, estes campos podem ser numéricos, botões, checkbox, ou seja, qualquer necessidade identificada para o formulário clínico.

Na implantação de um prontuário eletrônico o consultor e/ou cliente precisa estudar os Formulários que serão criados em sistema e tentar entender todas as suas necessidades de parâmetros. Outro ponto importante é a visão de négocio para ajudar na modificação do documento físico em relação ao sistema, isso representa analisar campos no formulário físico que possam em sistema se tornar campos com resposta padronizadas, campos que receberão um valor de uma fórmula, campos que não são utilizados para sua retirada, entre outras análises, essa modificação sempre terá o objetivo de facilitar e agilizar o processo de aferição, que será o maior resultado que o formulário clínico poderá trazer.

Quanto mais campos forem padronizados eliminando campos descritivos, mais fácil será o retorno estatístico de análise, não será possível criar um relatório estatístico de um campo texto por exemplo, mas se este campo texto for alterado para uma resposta padrão, o mesmo será possível, exemplo:

Imagine que temos um campo no formulário físico perguntando ao profissional:

> ***"Qual cateter foi instalado no paciente?"***

Provavelmente no formulário físico este campo é descritivo para que o profissional faça a aferição, porém se colocarmos descritivo no formulário em sistema, teremos o problema de letras maiúsculass e minúsculas, erros de digitação, erros de gramática, que impossibilitarão a criação de qualquer relatório referente à este campo, isso não acontecerá se solicitarmos a lista de todos os possíveis cateteres e alterarmos o campo no formulário para Múltipla Escolha, qualquer relatório poderá ser criado, pois todos os problemas anteriores foram eliminados.

Outro ponto que podemos salientar, é que em alguns casos teremos a necessidade de criar parâmetros clínicos para auxiliar em formulários e classificações que não são necessários no formulário físico, ou parâmetros do tipo botão que chamem outros formulários ou documentos, logicamente inexistentes num formulário físico.

Diante disso podemos concluir que a criação de parâmetros clínicos é a **PRINCIPAL** análise antes da criação de qualquer formulário.

Os parâmetros clínicos poderão ser criados no seguinte caminho:

***MEDVIEW*** > ***CONFIGURAÇÃO*** > ***PARAMETROS CLÍNICOS*** > ***PARAMETROS CLÍNICOS***

![Parâmetros Clínicos](../assets/clinical-form-images/imagem4.png)


## Definição de Campos

![Parâmetros Clínicos](../assets/clinical-form-images/imagem5.png)

a) ***Código***: 8 Caracteres Alfanuméricos definidos pelo usuário, este será o campo identificado em todas as telas de configuração do formulário, e será também a informação utilizada para as fórmulas;

b) ***Descrição***: 255 Caracteres Alfanuméricos definidos pelo usuário, este campo será a informação apresentada em tela para aferição identificando o campo, caso o usuário não altere o mesmo na configuração da tela Editável. (Ver item: [Tela Editável](/docs/clinical-forms/3-clinical-forms#tela-editavel));

c) ***Representa Componente de Exame?***: O usuário deve indicar se este parâmetro será um Componente de Exames do Labhos, o mesmo será utilizado por formulários do tipo *"Representa resultados de exames externos laboratoriais?"*. (Ver item: [Tipos de Modelos de Formulários Clínicos](/docs/clinical-forms/1-types-of-clinical-forms-templates));

d) ***Tipo***: Define o Tipo de Parâmetro que será criado, o mesmo depende das várias análises identificadas anteriormente e podem ser:

1. ***Caracter***: Tamanho máximo de 255 posições, usado para textos descritivos pequenos, também poderá ser alterado para um campo com respostas padronizadas, onde será permitido apenas uma escolha. Este campo também permite máscara, como as utilizadas em CPF, CNPJ, HORA (Não existe um campo para HORA, desta forma utilizamos o campo caracter), telefone e similares;

2. ***Numérico***: Utilizados para valores numéricos, ou resultados padronizados numéricos, também possui a possibilidade de apresentar casas decimais e a definição de valor mínimo e máximo que poderá ser digitado pelo usuário, como por exemplo podemos destacar o campo idade, onde será permitido configurar valor máximo 130 anos, ou seja, na digitação de 131 anos o sistema irá criticar o usuário;

3. ***Texto***: Tamanho máximo de 4000 caracteres, geralmente utilizado para observações e justificativas, ou para campos descritivos que possam receber mais de 255 caracteres, desta forma será utilizado em substituição ao campo **CARACTER**;

4. ***Data***: Receberá uma data aferida pelo usuário, como por exemplo a Data da última menstruação, Data da última cirurgia e etc.;

5. ***Lógico***: Também conhecido como CheckBox, utilizado para sequência de opções, onde o usuário poderá escolher **"N"** opções, diferente de resultados padronizados, apenas uma opção pode ser escolhida. Será criado um parâmetro lógico para cada opção;

6. ***Botão***: Utilizado para criar um Botão em tela que poderá acessar um outro formulário, ou um outro documento. (***Observação***: Caso seja necessário acessar um outro formulário ou documento dependendo da resposta de um parâmetro anterior, não precisamos criar um botão, pois podemos colocar na regra do próprio parâmetro anterior esta característica de ativar ou não formulários e documentos);

7. ***Imagem***: Utilizado para criar parâmetros que receberão imagens de feridas ou demais afecções tratadas pelo profissional, o campo recebe uma imagem de no máximo *500kb*;

8. ***Diagnóstico***: Quando é necessário a criação de um formulário que possua um **GRID** de diagnósticos associados ao paciente, este Grid apresentará a lista de CID's do sistema, e o usuário poderá associar quantos diagnósticos forem necessários;

e) ***Componente***: Quando for indicado que o parâmetro ***"Representa Componente de Exame?"***, o usuário poderá escolher neste campo de pesquisa, qual componente configurado no Labhos o parâmetro representa, ao utilizar este campo num formulário que não for Tipo de Aferição de Exames externos, o mesmo poderá apresentar valores de resultados anteriores destes componentes para análise do usuário;

f) ***Unidade***: Informação obrigatória, usada para identificar a Unidade do valor que o parâmetro recebe, como **"%"** (percentual), **"ml"** (mililitro) e etc.;

g) ***Unidade Padronizada***: Possui o objetivo de padronizar as unidades e também permite a conversão de valores em Unidade Diferentes, exemplo: 

> Se criarmos um campo cujo valor representa ***"g"*** (grama)

Poderemos no momento da visualização do resultado do formulário identificar o mesmo como ***"mg"*** (miligrama), ***"mcg"*** (micrograma) e todas as demais opções possíveis, esta configuração de Conversão poderá ser feita no caminho: 

***MEDVIEW*** > ***CONFIGURAÇÃO*** > ***UNIDADES PADRONIZADAS***

![Parâmetros Clínicos](../assets/clinical-form-images/imagem6.png)

Pelo botão ***"CONVERSÃO"*** criamos todas as possíveis conversões das Unidades Padronizadas, através da tela à seguir:

![Parâmetros Clínicos](../assets/clinical-form-images/imagem7.png)

- ***Unidade Origem***: Indica a unidade padrão utilizada para a conversão;

- ***Destino***: Indica a unidade que será convertida, quando o valor estiver relaionado à unidade de origem;

- ***Divisor***: Informação para cálculo da conversão;

h) ***Tamanho***: Habilitado para os parâmetros do tipo Caracter e Numérico, indica o tamanho de *"casas"* que a informação poderá ser apresentada;

i) ***Decimais***: Habilitado para os parâmetros do tipo Numérico indica se o valor do campo terá casas decimais e quantas casas serão permitidas;

j) ***Mínimo***: Habilitado para os parâmetros do tipo Numérico indica qual será o valor mínimo permitido na aferição, exemplo: 

> Se no cadastro for informado o valor 5 como mínimo

O usuário não poderá informar valores menores do que ***"5"***;

k) ***Máximo***: Habilitado para os parâmetros do tipo Numérico indica qual será o valor máximo permitido na aferição, exemplo: 

> Se no cadastro for informado o valor 130 como máximo para o campo idade

O usuário não poderá informar valores maiores do que ***"130"*** para idade do paciente, evitando erros de digitação;

l) ***Informação***: São identificação de dados que o parâmetro recebe e/ou indica, da seguinte forma:

![Parâmetros Clínicos](../assets/clinical-form-images/imagem8.png)

1. ***Nenhum***: Quando o parâmetro não recebe e nem indica nenhuma informação;

2. ***SexoPac***: Quando informamos esta opção o parâmetro deve ser do tipo Caracter e ter no mínimo 9, pois irá apresentar **MASCULINO** e **FEMININO** automaticamente, dependendo do sexo do paciente, geralmente utilizado para fórmulas e Relacionamentos Condicionais, onde o sexo do paciente influencia no processo de aferição e/ou resultado;

3. ***IdadePac***: Quando informamos esta opção o parâmetro deve ser do tipo Numérico, pois receberá o valor da idade do paciente, também comumente usado para fórmulas;

4. ***CorPac***: Esta informação não receberá nenhum dado automaticamente, apenas será uma definição de que um valor atribuído ao correspondente à cor do paciente;

5. ***AlturaPac***: Esta informação não receberá nenhum dado automaticamente, apenas será uma definição de que um valor atribuído ao correspondente à altura do paciente;

6. ***PesoPac***: uando informamos esta opção o parâmetro deve ser do tipo Numérico e ter 3 casas para a informação de **KG**, esta informação não é apresentada automaticamente, geralmente este parâmetro é utilizado para criar formulários referentes à prescrição para adefinição de Dose Máxima e Kit por Faixa Etária e Peso;

7. ***NivelAlertaPac***: Esta informação servirá para indicar o Nível de Alerta do paciente, porém ela é informativa, não influencia no sistema, este parâmetro deve possuir Resultados Padronizados (Ver item: [Resultados Padronizados](/docs/clinical-forms/3-clinical-forms#resultados-padronizados)) referentes ao Cadastro de Níveis de Alerta;

8. ***CodNivelAlertaPac***: Esta informação influencia diretamente no paciente, quando aferimos este parâmetro o sistema indica o Nível de Alerta escolhido pelo código ao paciente, desta forma o campo deve ser Resultado Padronizado (Ver item: [Resultados Padronizados](/docs/clinical-forms/3-clinical-forms#resultados-padronizados)) com valores dos códigos de Nível de Alerta existentes no cadastro;

9. ***StatusPac***: Esta informação servirá para os formulários que possam alterar o Status do paciente, estes parâmetros deve ser do tipo Caracter e conter as possibilidades encontradas no cadastro de Status do Paciente;

10. ***CodEspAtend***: Utilizado para formulários de pré-classificação de risco do paciente de urgência, desta forma esta informação pode ser integrada com o wPainel que apresentará a Especialidade para qual o paciente foi pré-triado;

11. ***EspAtend***: Utilizado para formulários de pré-classificação de risco do paciente de urgência, desta forma esta informação pode ser integrada com o wPainel que apresentará a Especialidade para qual o paciente foi pré-triado;

### Integrando com MedPrev

O módulo MedPrev é utilizado para os processos de Medicina Preventiva e Gerênciamento de Pacientes Crônicos, tendo seus processos Clínicos integrados com o módulo MedView.

Esta Integração existe também nos formulários, onde podemos atualizar informações como Status, Fase, Situação, Modalidades e etc., para isso o sistema permite a utilização de várias informações nesta funcionalidade, veja abaixo:

12. ***DSProgSaude***: Desrição do Programa de Saúde que o paciente está inscrito no MedPrev, esta informação **NÂO** pode ser alterada pelos usuários, ela já vem preenchida com a informação do Programa de Saúde do paciente e serve como informativa para os processos de aferição que serão realizados pelos usuários, como orientação;

13. ***ModalProgSaude***: Informação da Modalidade que está vinculada ao paciente no Programa de Saúde, o usuário poderá alterar esta informação para outra Modalidade possível para aquele programa de saúde, já que esta informação representa a criticidade de atendimento à qual o paciente deve ser submetido, para isso o parâmetro deve ser do tipo Caracter;

14. ***DSTipoModalidade***: Informação da Modalidade que está vinculada ao paciente, esta informação é um subnível da criticidade do paciente, o usuário poderá alterar esta informação para outro tipo de Modalidade possível para aquele Programa de Saúde e atravé de análise do paciente este parâmetro deve ser do tipo Caracter;

15. ***FaseProgSaude***: Informação que representa a Fase à qual o paciente está vinculado dentro do Programa de Saúde, esta informação poderá ser alterada pelo usuário de acordo com seu critério de análise e o parâmetro deve ser do tipo Caracter;

16. ***SitProgSaude***: Situação do Paciente dentro Programa de Saúde, esta informação poderá ser alterada pelo usuário de acordo com seu critério de avaliação;

17. ***MotAlteracaoSituacao***: Deve existir obrigatoriamente um parâmetro deste tipo, quando o formulário possuir um parâmetro que permita a alteração da Situação do Paciente, nenhuma alteração da situação pode ficar sem a definição do motivo que levou a esta mudança;

18. ***ProgAtividades***: O MedPrev possui uma função de Programação de atividades, esta função gera uma lista de ações (atividades) à serem realizadas pelo programa de relação ao paciente, dentro de formulários clínicos podemos ter parâmetros que representam essas Programações, onde as mesmas poderão ser alteradas pelos usuários de acordo com seu processo de avaliação. É importante que ao criar um formulário com um parâmetro de Programação de Atividades, seja também inserido parâmetros de Modalidade e Tipos de Modalidades, pois a programação deve ser vinculada à esta informação que indicam o nível de criticidade do paciente. Parâmetro do tipo Caracter;

19. ***DataRealAtiv***: Podemos ter parâmetros que representam **ATIVIDADES** definidas pela programação de atividades do beneficiário, desta forma ao aferir este formulário o sistema entende e integra uma atividade realizada no MedPrev, para isso é obrigatório um campo do tipo Data com esta informação que representa **DATA QUE A ATIVIDADE FOI REALIZADA**;

20. ***DataInicioProg***: Este tipo de informação representa a Data de Início do Programa do Paciente, deve ser aferida pelo usuário num campo do tipo Data;

m) ***Usa Tag?*** : O sistema permite a criação de Documentos Clínicos (Ver item: [Associação de Modelos de Formulários Clínicos](/docs/clinical-forms/3-clinical-forms#associação-de-modelos-de-formulários-clínicos)), que podem ser identificados como Modelos de Impressão de Formulários, quando isso ocorre podemos utilizar os parâmetros inseridos nos formulários para a criação do documento clínico, para isso os parâmetros precisam estar marcados por esta Flag, caso contrário o sistema não reconhecerá o mesmo para impressão;

n) ***Classificação***: O sistema permite a criação de formulários que representam [Balanço Hídrico](/docs/pep/hydric-balance), estes formulários possuem o objetivo de monitorar por um intervalo definido de horas as perdas e ganhos de líquido do paciente, assim como os sinais vitais, desta forma ao se criar os parâmetros hídricos do formulário é possível definir por esta opção se o mesmo representa **PERDA DE LÍQUIDO** ou **GANHO DE LÍQUIDO**, logicamente o tipo de parâmetro deve ser Numérico;

o) ***Classificação ME ou Mobile Edition***: O sistema permite a criação de vários parâmetros para representar Peso, Altura, Pressão Sistólica e Diastólica. informações informações importantes de análise da situação clínica do paciente, porém o correto cadastro do sistema deve apresentar apenas uma opção de cada informação, quando isso não ocorre é impossível análisar uma variação destas informações quando o processo de aferição é realizado em diferentes parâmetros que contemplam o mesmo objetivo. Para que este problema não gere impacto na versão Mobile do MedView, foi criada esta opção que tenta identificar parâmetros semelhantes da mesma informação, desta forma para **TODO** o parâmetro que representa **PESO** deve ser atribuído a opção **PESO** da *Classificação ME*;
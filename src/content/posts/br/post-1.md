---
title: "Algoritmos Baseados em Árvores: Tutorial em R e Python"
pubDate: 2025-03-13
description: "Métodos como árvores de decisão, random forest e gradient boosting são amplamente utilizados em diversos problemas de ciência de dados. Por isso, é fundamental que todo analista (inclusive iniciantes) aprenda esses algoritmos e os utilize na modelagem."
author: "Gabriel Fonseca"
tags: ["Tutorial", "Algorithms", "R", "Python"]
---

Os algoritmos baseados em árvores são considerados um dos melhores e mais utilizados métodos de aprendizado supervisionado. Eles potencializam modelos preditivos com alta precisão, estabilidade e facilidade de interpretação. Ao contrário dos modelos lineares, eles conseguem mapear bem relações não lineares. Além disso, são adaptáveis para resolver qualquer tipo de problema, seja de classificação ou regressão.

Métodos como árvores de decisão, random forest e gradient boosting são amplamente utilizados em diversos problemas de ciência de dados. Por isso, é fundamental que todo analista (inclusive iniciantes) aprenda esses algoritmos e os utilize na modelagem.

Este tutorial tem como objetivo ajudar iniciantes a aprender algoritmos baseados em árvores do zero. Após concluí-lo com sucesso, espera-se que os indivíduos se tornem proficientes no uso desses algoritmos e na construção de modelos preditivos.

#### Objetivos desse tutorial:
- Compreender como classificar imagens de gestos manuais usando VGG-19
- Aprender a pré-processar conjuntos de dados de imagens personalizados para deep learning
- Adquirir habilidades na construção e treinamento de um modelo de aprendizado por transferência
- Desenvolver a capacidade de avaliar o desempenho de um modelo de classificação de imagens

## O que é uma Árvore de Decisão? Como ela funciona?
![Modelagem baseada em árvores em R e Python](/images/posts/post-1/image1.webp)
*Modelagem baseada em árvores em R e Python*

### Exemplo
Suponha que temos uma amostra de 30 alunos com três variáveis: Gênero (Masculino, Feminino), Turma (2º ano  e 3º ano) e Altura (entre 1,60m e 1,90m). Desses 30 alunos, 15 jogam queimada no tempo livre. Agora, quero criar um modelo para prever quem jogará queimada durante o intervalo da aula.

Nesse problema, precisamos separar os alunos que jogam queimada no tempo livre com base na variável de entrada mais significativa entre as três.

É aqui que o ML baseado em árvores ajuda. Ele segmentará os alunos com base em todos os valores das três variáveis e identificará aquela que cria os conjuntos mais homogêneos de alunos (que, ao mesmo tempo, sejam heterogêneos entre si). No exemplo abaixo, podemos ver que a variável Gênero consegue identificar os conjuntos mais homogêneos em comparação com as outras duas variáveis.

![Amostragem](/images/posts/post-1/image2.png)

Como mencionado acima, a árvore de decisão identifica a variável mais significativa e seu valor, que resultam nos conjuntos mais homogêneos da população. Agora, a questão que surge é: como ela identifica a variável e o ponto de divisão? Para isso, a árvore de decisão utiliza diversos algoritmos, que discutiremos na próxima seção.

## Tipos de Árvores de Decisão
Os tipos de modelos de árvore em aprendizado de máquina são definidos com base no tipo de variável-alvo que temos. Eles podem ser de dois tipos:
1. **Árvore de Decisão para Variável Categórica**: Quando a variável-alvo é categórica, a árvore de decisão é chamada de árvore de decisão para variável categórica.
**Exemplo**: No cenário mencionado anteriormente sobre os alunos, a variável-alvo era "O aluno jogará queimada ou não?", com respostas SIM ou NÃO.
2. **Árvore de Decisão para Variável Contínua**: Quando a variável-alvo é contínua, a árvore de decisão é chamada de árvore de decisão para variável contínua.
**Exemplo**: Suponha que temos precisemos prever se um cliente pagará sua renovação de seguro (SIM/NÃO). Sabemos que a renda do cliente é uma variável significativa, mas a seguradora não possui essa informação para todos os clientes. Como sabemos que essa variável é importante, podemos construir uma árvore de decisão para prever a renda do cliente com base em sua ocupação, tipo de produto e outras variáveis. Nesse caso, estamos prevendo valores para uma variável contínua.

### Terminologias Importantes Relacionada a Algoritmos Baseados em Árvores
Vamos analisar a terminologia básica utilizada com Árvores de Decisão em Python:

- **Nó Raiz (Root Node)**: Representa toda a população ou amostra e, a partir dele, a amostra é dividida em dois ou mais conjuntos homogêneos.
- **Divisão (Splitting)**: É o processo de dividir um nó em dois ou mais sub-nós.
- **Nó de Decisão (Decision Node)**: Quando um sub-nó se divide em sub-nós adicionais, ele é chamado de nó de decisão.
- **Nó Folha / Terminal (Leaf/Terminal Node)**: Nós que não se dividem são chamados de nós folha ou terminais.
- **Poda (Pruning)**: Quando removemos sub-nós de um nó de decisão, esse processo é chamado de poda. Pode-se considerar como o processo oposto à divisão.
- **Ramo / Sub-Árvore (Branch/Sub-Tree)**: Uma subseção de toda a árvore é chamada de ramo ou sub-árvore.
- **Nó Pai e Nó Filho (Parent and Child Node)**: Um nó, que é dividido em sub-nós, é chamado de nó pai dos sub-nós, enquanto os sub-nós são os filhos do nó pai.

Esses são os termos comumente usados para árvores de decisão em Python. Como sabemos, todo algoritmo tem suas vantagens e desvantagens. Abaixo, estão os fatores importantes que você deve conhecer.

### Vantagens
- **Fácil de Entender**: O resultado de uma árvore de decisão é muito fácil de entender, mesmo para pessoas sem formação analítica. Não é necessário conhecimento estatístico para ler e interpretá-las. Sua representação gráfica é bastante intuitiva e os usuários podem facilmente relacionar suas hipóteses.
- **Útil na Exploração de Dados**: O modelo de árvore de decisão é uma das formas mais rápidas de identificar as variáveis mais significativas e as relações entre duas ou mais variáveis. Com a ajuda das árvores de decisão em Python, podemos criar novas variáveis/características que têm maior poder preditivo sobre a variável alvo. Elas também podem ser usadas na fase de exploração de dados. Por exemplo, se estivermos trabalhando em um problema onde temos informações disponíveis em centenas de variáveis, a árvore de decisão ajudará a identificar as variáveis mais significativas.
- **Menos Limpeza de Dados Necessária**: Requer menos limpeza de dados em comparação com outras técnicas de modelagem. Não é tão influenciada por outliers e valores ausentes, a um grau significativo.
- **Tipo de Dado Não é uma Restrição**: Pode lidar tanto com variáveis numéricas quanto categóricas.
- **Método Não Paramétrico**: A árvore de decisão é considerada um método não paramétrico. Isso significa que as árvores de decisão em Python não fazem suposições sobre a distribuição espacial ou a estrutura do classificador.

### Desvantagens
- **Overfitting**: O overfitting é uma das dificuldades mais práticas para modelos de árvore de decisão. Esse problema pode ser resolvido ao estabelecer restrições nos parâmetros do modelo e através da poda (discutida em detalhes abaixo).
- **Não adequado para variáveis contínuas**: Ao trabalhar com variáveis numéricas contínuas, os classificadores baseados em árvore de decisão perdem informações ao categorizar as variáveis em diferentes categorias.

## Árvores de Regressão vs Árvores de Classificação
Todos sabemos que os nós terminais (ou folhas) estão localizados na parte inferior dos classificadores baseados em árvore de decisão. Isso significa que as árvores de decisão geralmente são desenhadas de cabeça para baixo, com as folhas na parte inferior e as raízes na parte superior (como mostrado abaixo).

![Árvores de Regressão vs Árvores de Classificação](/images/posts/post-1/image3.png)

### As Principais Diferenças e Semelhanças entre Árvores de Classificação e Regressão
- Usamos árvores de regressão quando a variável dependente é contínua e usamos classificadores baseados em árvores de decisão quando a variável dependente é categórica.
- No caso da árvore de regressão, o valor obtido pelos nós terminais nos dados de treinamento é a média das respostas das observações que caem naquela região. Assim, se uma observação de dados não vista cair nessa região, faremos a previsão com o valor médio.
- No caso da árvore de classificação, o valor (classe) obtido pelo nó terminal nos dados de treinamento é a moda das observações que caem naquela região. Assim, se uma observação de dados não vista cair nessa região, faremos a previsão com o valor da moda.
- Ambas as árvores dividem o espaço preditor (variáveis independentes) em regiões distintas e não sobrepondo-se. Para simplificar, você pode imaginar essas regiões como caixas de alta dimensão ou caixas.
- Ambas as árvores seguem uma abordagem "top-down" gananciosa, conhecida como "divisão binária recursiva". Chamamos de "top-down" porque começa do topo da árvore, onde todas as observações estão disponíveis em uma única região, e sucessivamente divide o espaço preditor em dois novos ramos para baixo na árvore. É chamada de "gananciosa" porque o algoritmo foca apenas na divisão atual, buscando pela melhor variável disponível, sem considerar futuras divisões que poderiam resultar em uma árvore melhor.

## Como os algoritmos baseados em árvore decidem onde fazer a divisão?
A decisão de realizar divisões estratégicas afeta fortemente a precisão de uma árvore. Os critérios de decisão são diferentes para árvores de classificação e regressão.

As árvores de decisão utilizam diversos algoritmos para decidir dividir um nó em dois ou mais sub-nós. A criação de sub-nós aumenta a homogeneidade dos sub-nós resultantes. Em outras palavras, podemos dizer que a pureza do nó aumenta em relação à variável alvo. A árvore de decisão divide os nós em todas as variáveis disponíveis e, em seguida, seleciona a divisão que resulta nos sub-nós mais homogêneos.

A seleção do algoritmo também depende do tipo de variável alvo. Vamos analisar os quatro algoritmos mais comumente utilizados em árvores de decisão:

### Gini
O Gini diz que, se selecionarmos dois itens aleatoriamente de uma população, eles devem ser da mesma classe, e a probabilidade disso acontecer é 1 se a população for pura.
- Ele funciona com variável alvo categórica, como "Sucesso" ou "Falha".  
- Realiza apenas divisões binárias.  
- Quanto maior o valor de Gini, maior a homogeneidade.  
- O CART (Classificação e Regressão de Árvores) usa o método Gini para criar divisões binárias.

#### Passos para Calcular o Gini para uma divisão
- Calcular o Gini para os sub-nós, utilizando a fórmula: soma dos quadrados das probabilidades de sucesso e falha (p² + q²).
- Calcular o Gini para a divisão utilizando a pontuação ponderada de Gini de cada nó dessa divisão.

**Exemplo:**  
Refletindo sobre o exemplo utilizado acima, onde queremos segregar os alunos com base na variável alvo (jogar queimada ou não). Na lógica abaixo, dividimos a população usando duas variáveis de entrada: Gênero e Turma. Agora, quero identificar qual divisão está gerando sub-nós mais homogêneos utilizando o Gini.

**Divisão pelo Gênero:**

- Calcular o Gini para o sub-nó **Feminino**:  
 `(0.2)*(0.2) + (0.8)*(0.8) = 0.68 `

- Calcular o Gini para o sub-nó **Masculino**:  
  `(0.65)*(0.65) + (0.35)*(0.35) = 0.55`

- Calcular o Gini ponderado para a divisão por Gênero:  
  `(10/30)*0.68 + (20/30)*0.55 = 0.59`

**Divisão pela Turma:**

- Calcular o Gini para o sub-nó **2º ano**:  
  `(0.43)*(0.43) + (0.57)*(0.57) = 0.51`

- Calcular o Gini para o sub-nó **3º ano**:  
  `(0.56)*(0.56) + (0.44)*(0.44) = 0.51`

- Calcular o Gini ponderado para a divisão por Turma:  
  `(14/30)*0.51 + (16/30)*0.51 = 0.51`

Acima, podemos ver que a pontuação de Gini para a divisão por Gênero é maior do que a divisão por Turma. Portanto, a divisão do nó será realizada com base no **Gênero**.

Você pode frequentemente encontrar o termo "Impureza de Gini", que é determinada subtraindo o valor do Gini de 1. Matematicamente, podemos expressar como:
`Impureza de Gini = 1 - Gini`

### Chi-Square
É um algoritmo utilizado para descobrir a significância estatística entre as diferenças entre sub-nós e o nó pai. Medimos isso pela soma dos quadrados das diferenças padronizadas entre as frequências observadas e esperadas da variável alvo.
- Funciona com variável alvo categórica, como "Sucesso" ou "Falha".
- Pode realizar duas ou mais divisões.
- Quanto maior o valor do Chi-Square, maior a significância estatística das diferenças entre o sub-nó e o nó pai.
- O Chi-Square de cada nó é calculado pela fórmula:  
  `Chi-square = ((Real – Esperado)² / Esperado)¹/²`

Gera classificadores baseados em árvores chamados **CHAID** (Chi-square Automatic Interaction Detector).

#### Passos para Calcular o Chi-Square para uma Divisão
- Calcular o Chi-Square para o nó individual, calculando a diferença entre Sucesso e Falha para ambos.
- Calcular o Chi-Square da divisão usando a soma de todos os Chi-Squares de Sucesso e Falha de cada nó da divisão.

**Exemplo:** Vamos trabalhar com o exemplo acima que utilizamos para calcular o Gini.

**Divisão pelo Gênero:**

- Primeiramente, vamos preencher para o nó **Feminino**. Populamos o valor real para "Jogar Queimada" e "Não Jogar Queimada", aqui sendo 2 e 8, respectivamente.
- Calcular o valor esperado para "Jogar Queimada" e "Não Jogar Queimada", aqui seria 5 para ambos, pois o nó pai tem uma probabilidade de 50%, e aplicamos essa mesma probabilidade no número de **Femininos** count(10).
- Calcular as diferenças utilizando a fórmula: **Real – Esperado**. Para "Jogar Queimada" (2 – 5 = -3) e para "Não Jogar Queimada" (8 – 5 = 3).
- Calcular o Chi-Square do nó para "Jogar Queimada" e "Não Jogar Queimada" utilizando a fórmula: ` = ((Real – Esperado)² / Esperado)¹/²`. Você pode se basear na tabela abaixo para o cálculo.
- Siga os mesmos passos para calcular o valor do Chi-Square para o nó **Masculino**.
- Agora, adicione todos os valores de Chi-Square para calcular o Chi-Square da divisão pelo **Gênero**.

**Divisão pela Turma:**

Execute os mesmos passos de cálculo para a divisão pela **Turma** e você chegará à tabela abaixo.

![Divisão pela Turma](/images/posts/post-1/image4.webp)

Acima, podemos ver que o Chi-Square também identifica que a divisão pelo **Gênero** é mais significativa em comparação com a divisão pela **Turma**.
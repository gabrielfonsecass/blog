---
title: "(Em construção) Algoritmos Baseados em Árvores: Tutorial em R e Python"
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
 $(0.2)*(0.2) + (0.8)*(0.8) = 0.68 $

- Calcular o Gini para o sub-nó **Masculino**:  
  $(0.65)*(0.65) + (0.35)*(0.35) = 0.55$

- Calcular o Gini ponderado para a divisão por Gênero:  
  $(10/30)*0.68 + (20/30)*0.55 = 0.59$

**Divisão pela Turma:**
- Calcular o Gini para o sub-nó **2º ano**:  
  $(0.43)*(0.43) + (0.57)*(0.57) = 0.51$

- Calcular o Gini para o sub-nó **3º ano**:  
  $(0.56)*(0.56) + (0.44)*(0.44) = 0.51$

- Calcular o Gini ponderado para a divisão por Turma:  
  $(14/30)*0.51 + (16/30)*0.51 = 0.51$

Acima, podemos ver que a pontuação de Gini para a divisão por Gênero é maior do que a divisão por Turma. Portanto, a divisão do nó será realizada com base no **Gênero**.

Você pode frequentemente encontrar o termo "Impureza de Gini", que é determinada subtraindo o valor do Gini de 1. Matematicamente, podemos expressar como:
$Impureza de Gini = 1 - Gini$

### Chi-Square
É um algoritmo utilizado para descobrir a significância estatística entre as diferenças entre sub-nós e o nó pai. Medimos isso pela soma dos quadrados das diferenças padronizadas entre as frequências observadas e esperadas da variável alvo.
- Funciona com variável alvo categórica, como "Sucesso" ou "Falha".
- Pode realizar duas ou mais divisões.
- Quanto maior o valor do Chi-Square, maior a significância estatística das diferenças entre o sub-nó e o nó pai.
- O Chi-Square de cada nó é calculado pela fórmula:  
  $Chi-square = ((Real – Esperado)² / Esperado)¹/²$

Gera classificadores baseados em árvores chamados **CHAID** (Chi-square Automatic Interaction Detector).

#### Passos para Calcular o Chi-Square para uma Divisão
- Calcular o Chi-Square para o nó individual, calculando a diferença entre Sucesso e Falha para ambos.
- Calcular o Chi-Square da divisão usando a soma de todos os Chi-Squares de Sucesso e Falha de cada nó da divisão.

**Exemplo:** Vamos trabalhar com o exemplo acima que utilizamos para calcular o Gini.

**Divisão pelo Gênero:**
- Primeiramente, vamos preencher para o nó **Feminino**. Populamos o valor real para "Jogar Queimada" e "Não Jogar Queimada", aqui sendo 2 e 8, respectivamente.
- Calcular o valor esperado para "Jogar Queimada" e "Não Jogar Queimada", aqui seria 5 para ambos, pois o nó pai tem uma probabilidade de 50%, e aplicamos essa mesma probabilidade no número de **Femininos** count(10).
- Calcular as diferenças utilizando a fórmula: **Real – Esperado**. Para "Jogar Queimada" (2 – 5 = -3) e para "Não Jogar Queimada" (8 – 5 = 3).
- Calcular o Chi-Square do nó para "Jogar Queimada" e "Não Jogar Queimada" utilizando a fórmula: $ = ((Real – Esperado)² / Esperado)¹/²$. Você pode se basear na tabela abaixo para o cálculo.
- Siga os mesmos passos para calcular o valor do Chi-Square para o nó **Masculino**.
- Agora, adicione todos os valores de Chi-Square para calcular o Chi-Square da divisão pelo **Gênero**.

**Divisão pela Turma:**
Execute os mesmos passos de cálculo para a divisão pela **Turma** e você chegará à tabela abaixo.

![Divisão pela Turma](/images/posts/post-1/image4.webp)

Acima, podemos ver que o Chi-Square também identifica que a divisão pelo **Gênero** é mais significativa em comparação com a divisão pela **Turma**.

### Ganho de Informação
Observe a imagem abaixo e pense: qual nó pode ser descrito de forma mais simples? Tenho certeza de que sua resposta é **C**, porque ele exige menos informação, já que todos os valores são semelhantes. Por outro lado, **B** exige mais informação para ser descrito e **A** exige a máxima quantidade de informação. Em outras palavras, podemos dizer que **C** é um nó **Puro**, **B** é menos impuro e **A** é mais impuro.

![Árvores Baseadas em Modelos](/images/posts/post-1/image5.webp)

Agora, podemos concluir que um nó menos impuro exige menos informação para ser descrito. E um nó mais impuro exige mais informação. A teoria da informação é uma medida para definir esse grau de desorganização em um sistema, conhecida como **Entropia**. Se a amostra é completamente homogênea, a entropia é zero, e se a amostra estiver igualmente dividida (50% – 50%), a entropia será um.

A entropia pode ser calculada pela fórmula:
$Entropia = -p log2(p) - q log2(q)$

Aqui, **p** e **q** são as probabilidades de sucesso e falha, respectivamente, naquele nó. A entropia também é usada com variáveis-alvo categóricas. Ela escolhe a divisão que tem a menor entropia em comparação com o nó pai e outras divisões. Quanto menor a entropia, melhor é a divisão.

**Passos para Calcular a Entropia para uma Divisão**
- Calcular a entropia do nó pai.
- Calcular a entropia de cada nó individual da divisão e calcular a média ponderada de todos os sub-nós disponíveis na divisão.

**Exemplo:** Vamos usar este método para identificar a melhor divisão no exemplo dos alunos.

- **Entropia para o nó pai:**  
  $-(15/30) log2(15/30) – (15/30) log2(15/30) = 1$  Aqui, **1** indica que é um nó impuro.
  
- **Entropia para o nó feminino:**  
  $-(2/10) log2(2/10) – (8/10) log2(8/10) = 0.72$  
  **Entropia para o nó masculino:**  
  $-(13/20) log2(13/20) – (7/20) log2(7/20) = 0.93$

- **Entropia para a divisão pelo Gênero:**  
  Média ponderada da entropia dos sub-nós:  $(10/30) * 0.72 + (20/30) * 0.93 = 0.86$

- **Entropia para o nó da Turma 2º ano:**  
  $-(6/14) log2(6/14) – (8/14) log2(8/14) = 0.99$  
  **Entropia para o nó da Turma 3º ano:**  
  $-(9/16) log2(9/16) – (7/16) log2(7/16) = 0.99$

- **Entropia para a divisão pela Classe:**  
  $(14/30) * 0.99 + (16/30) * 0.99 = 0.99$

Acima, você pode ver que a entropia para a divisão pelo **Gênero** é a mais baixa entre todas, então a árvore irá dividir pelo **Gênero**. Podemos derivar o **ganho de informação** a partir da entropia como $1 - Entropia$.

### Redução de Variância
Até agora, discutimos os algoritmos para variáveis-alvo categóricas. A **redução de variância** é um algoritmo usado para variáveis-alvo contínuas (problemas de regressão). Este algoritmo utiliza a fórmula padrão de variância para escolher a melhor divisão. A divisão com menor variância é selecionada como o critério para dividir a população:

$$Variância = \dfrac{\Sigma(X - \bar X)^2}{n}$$

Onde $\bar{X}$ é a média dos valores, $X$ é o valor real e $n$ é o número de valores.

**Passos para Calcular a Variância**
- Calcular a variância para cada nó.
- Calcular a variância para cada divisão como a média ponderada da variância de cada nó.

**Exemplo:** Vamos atribuir o valor numérico 1 para "jogar queimada" e 0 para "não jogar queimada". Agora, siga os passos para identificar a divisão correta:

- **Variância para o nó raiz:**  
  A média seria $(15 \times 1 + 15 \times 0) / 30 = 0.5$, com 15 uns e 15 zeros. Agora, a variância seria:

  
  $\frac{(15 \times (1-0.5)^2) + (15 \times (0-0.5)^2)}{30} = 0.25$

- **Média do nó feminino:**  

  $\frac{(2 \times 1 + 8 \times 0)}{10} = 0.2$  

  **Variância do nó feminino:**  

  $\frac{2 \times (1 - 0.2)^2 + 8 \times (0 - 0.2)^2}{10} = 0.16$

- **Média do nó masculino:**  

  $\frac{(13 \times 1 + 7 \times 0)}{20} = 0.65$  

  **Variância do nó masculino:**  

  $\frac{13 \times (1 - 0.65)^2 + 7 \times (0 - 0.65)^2}{20} = 0.23$

- **Variância para a divisão por Gênero:**  
  Média ponderada da variância dos sub-nós:  
  $
  \frac{10}{30} \times 0.16 + \frac{20}{30} \times 0.23 = 0.21
  $

- **Média do nó da Turma do 2º ano:**  

  $\frac{(6 \times 1 + 8 \times 0)}{14} = 0.43$  

  **Variância do nó da Turma do 2º ano:**  

  $
  \frac{6 \times (1 - 0.43)^2 + 8 \times (0 - 0.43)^2}{14} = 0.24
  $

- **Média do nó da Turma do 3º ano:**  

  $\frac{(9 \times 1 + 7 \times 0)}{16} = 0.56$ 

  **Variância do nó da Turma do 3º ano:**  

  $
  \frac{9 \times (1 - 0.56)^2 + 7 \times (0 - 0.56)^2}{16} = 0.25
  $

- **Variância para a divisão por Gênero:**  
  Média ponderada da variância dos sub-nós:

  $
  \frac{14}{30} \times 0.24 + \frac{16}{30} \times 0.25 = 0.25
  $

Acima, você pode ver que a divisão por **Gênero** tem uma variância menor em comparação com o nó pai, então a divisão ocorrerá pela variável **Gênero**.

Até aqui, aprendemos sobre os fundamentos das árvores de decisão e o processo de tomada de decisão envolvido para escolher as melhores divisões na construção de um modelo de árvore. Como mencionei, as árvores de decisão podem ser aplicadas tanto em problemas de regressão quanto de classificação. Vamos entender esses aspectos em detalhes.

## Quais são os principais parâmetros dos algoritmos baseados em árvores e como evitar o overfitting em árvores de decisão?
O overfitting é um dos principais desafios ao utilizar algoritmos baseados em árvores. Se não houver um limite definido para uma árvore de decisão, ela pode alcançar 100% de precisão no conjunto de treinamento, pois, no pior cenário, ela acabará criando uma folha para cada observação. Assim, evitar o overfitting é crucial ao modelar uma árvore de decisão, e isso pode ser feito de duas maneiras:

1. **Definindo restrições no tamanho da árvore**
2. **Poda da árvore (tree pruning)**

Vamos discutir brevemente ambas as abordagens.

### Definindo restrições nos algoritmos baseados em árvores
Isso pode ser feito usando vários parâmetros que definem a estrutura de uma árvore. 

Os parâmetros usados para definir uma árvore são explicados abaixo. Os parâmetros descritos a seguir são independentes da ferramenta. É importante entender o papel dos parâmetros usados na modelagem de árvores. Esses parâmetros estão disponíveis tanto no R quanto no Python.

#### Mínimo de amostras para a divisão de um nó
- Define o número mínimo de amostras (ou observações) necessárias em um nó para ser considerado para divisão.
- Usado para controlar o overfitting. Valores mais altos evitam que o modelo aprenda relações que possam ser altamente específicas para a amostra selecionada para uma árvore.
- Valores excessivamente altos podem levar ao underfitting, portanto, deve ser ajustado utilizando validação cruzada (CV).

#### Mínimo de amostras para um nó terminal (folha)
- Define o número mínimo de amostras (ou observações) necessárias em um nó terminal ou folha.
- Usado para controlar o overfitting, de forma similar ao `min_samples_split`.
- Geralmente, valores mais baixos devem ser escolhidos para problemas de classes desbalanceadas, pois as regiões onde a classe minoritária será majoritária serão muito pequenas.

#### Profundidade da árvore (profundidade vertical)
- Define a profundidade máxima de uma árvore.
- Usado para controlar o overfitting, já que profundidades mais altas permitem que o modelo aprenda relações muito específicas para uma amostra particular.
- Deve ser ajustado utilizando validação cruzada (CV).

#### Número máximo de nós terminais
- Define o número máximo de nós terminais ou folhas em uma árvore.
- Pode ser definido no lugar do `max_depth`. Como as árvores são binárias, uma profundidade de ‘n’ geraria no máximo 2^n folhas.

#### Características a considerar para a divisão
- Define o número de características a serem consideradas ao buscar a melhor divisão. Essas características serão selecionadas aleatoriamente.
- Como regra geral, a raiz quadrada do número total de características funciona bem, mas devemos verificar até 30-40% do número total de características.
- Valores mais altos podem levar ao overfitting, mas depende de caso a caso.

### Poda em algoritmos baseados em árvores
Como discutido anteriormente, a técnica de definir restrições é uma abordagem gananciosa. Em outras palavras, ela verifica a melhor divisão instantaneamente e segue em frente até que uma das condições de parada especificadas seja atingida. Vamos considerar o seguinte caso quando você está dirigindo:


![Carros](/images/posts/post-1/image6.png)

- Existem 2 faixas:
  - Uma faixa com carros a 80 km/h
  - Uma faixa com caminhões a 30 km/h

Neste instante, você é o carro amarelo e tem 2 escolhas:
1. Virar à esquerda e ultrapassar os outros 2 carros rapidamente
2. Continuar na faixa atual

Vamos analisar essas escolhas. Na primeira opção, você ultrapassará imediatamente o carro à frente e ficará atrás do caminhão, começando a se mover a 30 km/h, procurando uma oportunidade para voltar para a direita. Todos os carros originalmente atrás de você avançam nesse meio tempo. Essa seria a escolha ótima se seu objetivo fosse maximizar a distância percorrida nos próximos, digamos, 10 segundos. Na segunda opção, você segue à mesma velocidade, ultrapassa os caminhões e depois ultrapassa outros veículos dependendo da situação à frente. Ganancioso, não é?

Essa é exatamente a diferença entre uma árvore de decisão normal e a poda. Uma árvore de decisão com restrições não verá o caminhão à frente e adotará uma abordagem gananciosa ao virar à esquerda. Por outro lado, se usarmos poda, efetivamente olharemos alguns passos à frente e tomaremos uma decisão mais informada.

### Como Implementar a Poda em Árvores de Decisão?
- Primeiro, construímos a árvore de decisão com uma grande profundidade.
- Depois, começamos de baixo para cima e removemos as folhas que nos dão retornos negativos quando comparadas às decisões superiores.
- Suponha que uma divisão nos dê um ganho de -10 (perda de 10) e a próxima divisão nessa mesma folha nos dê um ganho de 20. Uma árvore de decisão simples pararia no passo 1, mas na poda, veríamos que o ganho total é +10 e manteríamos ambas as folhas.

Note que o classificador de árvore de decisão do `sklearn` atualmente não suporta poda. Pacotes avançados como o `xgboost` adotaram a poda de árvores em suas implementações. Mas a biblioteca `rpart` no R fornece uma função para podar árvores. Isso é ótimo para usuários de R!

## Trabalhando com algoritmos baseados em árvores: Árvores em R e Python
Para usuários de R e Python, implementar algoritmos baseados em árvores de decisão é bastante simples. Vamos dar uma olhada rapidamente no conjunto de códigos que pode te ajudar a começar com esse algoritmo. Para facilitar, compartilhei códigos padrão onde você precisará apenas substituir o nome do seu conjunto de dados e as variáveis para começar.

Na verdade, você pode construir a árvore de decisão em Python aqui mesmo! Aqui está uma janela de codificação ao vivo para você brincar com o código e gerar resultados:

```python 
'''
Construindo uma árvore de decisão
by - Gabriel Fonseca
'''

# importe as bibliotecas obrigatórias
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# leia os conjuntos de dados de treino e de testes
train_data = pd.read_csv("dados_treino.csv")
test_data = pd.read_csv("dados_teste.csv")

# formato do conjunto de dados
print('Formato dos dados de treino:', train_data.shape)
print('Formato dos dados de teste: ', test_data.shape)

# Agora nós precisamos prever a variável alvo ausente nos dados de teste
# variável alvo - Survived

# separar as variáveis independentes e a variável alvo nos dados de treino
train_x = train_data.drop(columns=['Survived'],axis=1)
train_y = train_data['Survived']

# separar as variáveis independentes e a variável alvo nos dados de teste
test_x = test_data.drop(columns=['Survived'],axis=1)
test_y = test_data['Survived']

'''
Crie o objeto do modelo de Árvore de Decisão
Você também pode adicionar outros parâmetros e testar seu código aqui
Alguns parâmetros são: max_depth e max_features
Documentação do sklearn DecisionTreeClassifier: 

https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html

'''

model = DecisionTreeClassifier()

# ajustar o modelo com os dados de treino
model.fit(train_x, train_y)

# profundidade da árvore de decisão
print('Profundidade da árvore de decisão: ', model.get_depth())

# prever a variável alvo nos dados de treino
predict_train = model.predict(train_x)
print('Alvo na variável de treino: ', predict_train)

# Accuracy Score nos dados de treino
accuracy_train = accuracy_score(train_y, predict_train)
print('accuracy_score nos dados de treino: ', accuracy_train)

# prever a variável alvo nos dados de teste
predict_test = model.predict(test_x)
print('Alvo na variável de teste: ', predict_test)

#Accuracy Score nos dados de teste
accuracy_test = accuracy_score(test_y, predict_test)
print('accuracy_score nos dados de teste: ', accuracy_test)
```

Para usuários de R, existem vários pacotes disponíveis para implementar árvores de decisão, como ctree, rpart, tree, etc.

```R
> library(rpart)
> x <- cbind(x_train,y_train)
# construir a árvore
> fit <- rpart(y_train ~ ., data = x,method="class")
> summary(fit)
# prever a saída
> predicted= predict(fit,x_test)
```

No código acima:
- y_train – representa a variável dependente.
- x_train – representa a variável independente.
- x – representa os dados de treino.

Para usuários de Python, seguimos com esse código:

```python
# Importar Biblioteca
# Importar outras bibliotecas necessárias como pandas, numpy...
from sklearn import tree
# Presume-se que você tenha, X (preditor) e Y (alvo) para o conjunto de dados de treino e x_test (preditor) do conjunto de dados de teste
# Criar o objeto da árvore
model = tree.DecisionTreeClassifier(criterion='gini') # para classificação, aqui você pode mudar o algoritmo para gini ou entropy (ganho de informação), por padrão é gini  
# model = tree.DecisionTreeRegressor() para regressão
# Treinar o modelo utilizando os conjuntos de treino e verificar a pontuação
model.fit(X, y)
model.score(X, y)
# Prever saída
predicted = model.predict(x_test)
```

## O que são métodos de ensemble em algoritmos baseados em árvores?
O significado literário da palavra "ensemble" é grupo. Métodos de ensemble envolvem um grupo de modelos preditivos para alcançar uma melhor acurácia e estabilidade do modelo. Métodos de ensemble são conhecidos por proporcionar um grande aumento de desempenho aos modelos baseados em árvores.

Como qualquer outro modelo, um algoritmo baseado em árvore também sofre com o problema de viés e variância. Viés significa "quão diferentes, em média, os valores previstos estão dos valores reais". Variância significa "quão diferentes serão as previsões do modelo no mesmo ponto se amostras diferentes forem retiradas da mesma população".

Você constrói uma árvore pequena e obterá um modelo com baixa variância e alto viés. Como você consegue equilibrar o trade-off entre viés e variância?

Normalmente, à medida que você aumenta a complexidade do seu modelo, verá uma redução no erro de previsão devido ao viés mais baixo no modelo. À medida que você continua tornando seu modelo mais complexo, você acaba sobreajustando o modelo e ele começa a sofrer com alta variância.

Um modelo campeão deve manter um equilíbrio entre esses dois tipos de erros. Isso é conhecido como gerenciamento do trade-off entre erros de viés e variância. O aprendizado de ensemble é uma maneira de executar essa análise de trade-off.

Alguns dos métodos de ensemble mais comumente usados incluem: Bagging, Boosting e Stacking. Neste tutorial, vamos focar em Bagging e Boosting em detalhes.


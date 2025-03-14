---
title: "Ciência cognitiva"
category: "Inteligência Artificial"
pubDate: 2025-03-13
description: "Uma visão abrangente sobre nativismo, empirismo e construtivismo na ciência cognitiva, aprendizado de máquina e teoria da mente, incluindo modelos probabilísticos e viéses cognitivos."
author: "Gabriel Fonseca"
tags: ["AI", "MachineLearning", "CognitiveScience", "Rationality"]
---

# nativismo, empirismo

- "problema inverso" - dado o mundo, como formamos representações?
  - ex.: dados os pixels, como entendemos o mundo?
- desenvolvimento cognitivo histórico: como formamos representações?
  - **nativismo** - Platão - representação sem aprendizado
  - **empirismo** - Aristóteles - aprendizado sem representação
  - **construtivismo** - Jean Piaget - desenvolvimento cognitivo
    - tipos:
      - assimilação - começa com um esquema, que te diz como agir
      - acomodação - ajusta o esquema com base no que vê
      - equilibração - tudo se estabiliza
    - períodos:
      | sensório-motor  | pré-operacional      | operacional concreto  | operacional formal     |
      | -------------- | ------------------- | -------------------- | --------------------- |
      | 0 - 18 meses  | 18 meses - 5 anos   | 5 anos - adolescência | adolescência e além  |
    - problemas:
      - o desenvolvimento é específico para domínios e variável
      - quando medido melhor, crianças mostram competência mais cedo
      - não especifica métodos de aprendizado
- teorias contemporâneas:
  - **nativismo** - conhecimento central ou módulos
    - Platão, Descartes
    - Chomsky - dispositivo de aquisição de linguagem
    - Spelke, Tenenbaum - conhecimento central de domínios
    - nativismo por restrição vs. nativismo do estado inicial
  - **empirismo** - conexionismo, sistemas dinâmicos, associacionismo
    - Aristóteles, David Hume
    - behaviorismo - levou ao aprendizado por reforço
    - conexionistas - McClelland, Karmiloff-Smith
    - sistemas dinâmicos - Thelen e Smith
    - **abordagem emergentista** - comportamento complexo emerge de propriedades neurais simples
    - John Locke
    - aprendizado profundo (deep learning)
  - **construtivismo** - "a teoria da teoria" (crianças são cientistas), modelos probabilísticos
    - Carey, Wellman, Gelman, Gopnik
    - características estruturais: abstrato, coerente, causal, hierárquico
    - teorias mudam com base em evidências
    - mudanças podem ocorrer em vários níveis
    - brincar
    - talvez aprendizado Bayesiano
  - processamento de informação - mudanças de memória ao longo do tempo etc.
    - Siegler
  - influências socioculturais - crianças aprendem com a sociedade/cultura
    - Vygotsky

- questões em aberto:

  - problema da busca: como as crianças buscam entre todas as hipóteses possíveis? amostragem?
  - problema da mudança conceitual: como é possível uma mudança radical nas representações?

- **contrafactual** - relacionado a ou expressando algo que não aconteceu ou não é o caso
  - ex.: Se os cangurus não tivessem caudas, eles tombariam.

# modelos causais probabilísticos

- representações abstratas que fornecem explicações computacionais sobre inferência causal
  - no nível mais alto de Marr: computação
- quanto precisamos embutir?
  - o DNA pode embutir coisas difíceis de aprender
  - começar sem nada embutido, ex.: aprendizado profundo (conexionismo)
  - começar com o melhor algoritmo de aprendizado possível e perguntar o que precisa ser embutido (modelagem Bayesiana)
  - regra de Bayes: $\overbrace{p(\theta | x)}^{\text{posterior}} = \frac{\overbrace{p(x|\theta)}^{\text{verossimilhança}} \overbrace{p(\theta)}^{\text{prior}}}{p(x)}$ onde x são dados e $\theta$ são hipóteses
    - perguntar quais priors explicam as inferências humanas
    - humanos fazem priors altamente causais - restringe o espaço de hipóteses de possíveis redes Bayesianas
    - modelo hierárquico - obter prior de algo (ex.: saber que todas as bolsas contêm a mesma cor)
- o que se desenvolve ao longo do tempo?
  - o modelo Bayesiano não responde bem a isso - apenas tem probabilidades evoluindo ao longo do tempo
  - na vida real, criamos novas hipóteses
- quais representações usamos?

# aprendizado profundo por reforço

## fundamentos de aprendizado profundo

- o que faz uma rede neural?
  - aproximador universal de funções
  - visão do aprendizado de características - aprende características que separam classes linearmente
- um único algoritmo?
  - ex.: enxergar com a língua
  - ex.: cegos usando ecolocalização
  - ex.: nervo óptico de um furão sendo redirecionado para o sistema auditivo e ele ainda assim aprende a enxergar
- viés indutivo forte? ou falta de viés?
  - filtros de Gabor surgem do aprendizado profundo, ICA, codificação esparsa, k-means - surgem dos dados, não necessariamente do algoritmo
  - redes maiores e mais simples com resíduos parecem funcionar melhor
    - tarefas sequenciais - LSTM começou a ser substituído por "attention is all you need" (atenção é basicamente um produto escalar)
    - computadores neurais diferenciáveis não funcionaram tão bem - tentaram embutir muita coisa
    - alguns vieses indutivos funcionaram: CNN, LSTM
- profundidade parece ajudar
  - composicionalidade
  - aumento no poder de representação?
  - argumentos informacionais

## supervisão

- aprendizado não supervisionado: aprender $p_\theta (x)$
  - extrair características/representações e usá-las para outras tarefas
  - reconhecer eventos novos/inusitados
  - alucinar
  - pode usar todos os dados disponíveis
  - difícil de usar efetivamente
  - exemplos: autoencoders variacionais, GANs
- aprendizado supervisionado:
  - representações são surpreendentemente boas
    - rótulos fornecem conhecimento semântico útil
- aprendizado por reforço:
  - função de recompensa não diferenciável - sem acesso direto à supervisão da saída
  - três tipos principais:
    - busca direta por política
    - predição de funções de valor
    - predição de estados futuros
  - RL precisa de mais generalização
    - queremos mais algoritmos de exploração
    - ex.: design de experimentos Bayesiano aproximado

# objetos

- *CNNs profundas* - não apenas uma cadeia, combinam diferentes camadas e talvez representem conceitos semânticos
- *aprendizado adaptativo* - muito viés de conjunto de dados - ImageNet funciona apenas no ImageNet
  - GAN - aprende um discriminador que decide se um ponto pertence a um domínio ou outro
- *agentes visuais e linguísticos explicáveis*
  - legendagem de imagens não significa que realmente entendem a cena
  - foco atual: resposta a perguntas visuais (VQA)

# desenvolvimento da linguagem

- muitas crianças têm dificuldades com linguagem
- linguagem pode ser única dos humanos
- aprendizado pode ser por associação (John Locke) ou intenção (Santo Agostinho)
- abordagem behaviorista (Skinner) - condicionamento
  - ex.: "significado" = associação entre estímulo e resposta
- crítica de Chomsky (1959) a Skinner:
  - crianças dizem coisas que nunca ouviram ("mamãe comi a maçã")
- Chomsky: conhecimento inato, gramática universal

# teoria da mente

- capacidade de compreender o estado mental de outro indivíduo
- desenvolvimento rápido, mas varia
- essencial para interações sociais

# menoswrong

- **viés cognitivo** pode ser visto como viés estatístico
  - negligência da taxa base
  - falácia dos custos irrecuperáveis
  - viés de disponibilidade
  - falácia da conjunção
  - falácia do planejamento
- **racionalidade**
  - **epistêmica** - melhorar a precisão das crenças
  - **instrumental** - alcançar valores sistematicamente
- **Sistema 1 e Sistema 2** - julgamentos rápidos vs. deliberativos

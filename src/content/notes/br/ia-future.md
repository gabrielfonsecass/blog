---
title: "Futuros da IA"
category: "Inteligência Artificial"
pubDate: 2025-03-13
description: "O risco da IA gerado por atores humanos deliberados (isto é, concentração de poder) parece ser maior do que o risco de uso não intencional (isto é, perda de controle). "
author: "Gabriel Fonseca"
tags: ["AGI", "AI", "DeepLearning"]
---

## 🤖 Reflexões sobre AGI 
- **Definição interessante de AGI**: sistemas de IA que podem substituir completamente o trabalho humano (ou ter um impacto comparável).
- O risco da IA gerado por atores humanos deliberados (isto é, concentração de poder) parece ser maior do que o risco de uso não intencional (isto é, perda de controle). [Veja alguns dos riscos (muito bem analisados por sinal) [Aqui](https://cdn.openai.com/openai-preparedness-framework-beta.pdf)]
  - **Observação**: o risco da AGI ainda pode ser alto - o uso malicioso pode facilmente ser pior do que o uso acidental.
  - A pesquisa sobre alinhamento parece ser tecnicamente mais interessante do que a pesquisa sobre segurança...
- Limitações de dados (por exemplo, na medicina) podem restringir avanços rápidos e generalizados.

---

## Compatível com Humanos
\**Notas baseadas no livro [*Compatível com Humanos\*](https://a.co/d/cTo8KGr), de Stuart Russel (2019)

### E se tivermos algum sucesso?
- Possíveis maiores eventos do futuro da humanidade:
  - Todos morremos;
  - Todos vivemos para sempre;
  - Conquistamos o universo;
  - Somos visitados por uma civilização alienígena superior;
  - Inventamos uma IA superinteligente;
- _Definição_: Humanos são inteligentes na medida em que suas ações podem ser esperadas para atingir seus objetivos (dado o que percebem).
  - Máquinas são _benéficas_ na medida em que _suas_ ações podem ser esperadas para atingir _nossos_ objetivos.
- Efeito Baldwin - o aprendizado pode facilitar a evolução.
- A _utilidade_ para coisas como o dinheiro é **decrescente**.
  - Agentes racionais maximizam a **utilidade esperada**.
- Jogn McCarthy ajudou a introduzir os _sistemas baseados em conhecimento_, que utilizam _lógica de primeira ordem_.
  - No entanto, esses sistemas não incorporavam incerteza.
  - A IA moderna usa utilidades e probabilidades em vez de objetivos e lógica.
  - Redes bayesianas são como lógica proposicional probabilísitica, combinadas com programação probabilística.
- A linguagem já codifica muito do que sabemos.
- _Programação lógica indutiva_ - propõe novos conceitos e definições para identificar teorias que sejam precisas e concisas.
- Precisamos ser capazes de aprender muitas abstrações úteis.
- Uma IA super-humana poderia realizar feitos incríveis, como:
  - Guiar cada pessoa/veículo individualmente durante uma evacuação;
  - Conduzir experimentos e comparar instantaneamente com todos os resultados existentes;
  - Meta de alto nível: elevar o padrão de vida de todos, em todos os lugares?
  - Tutoria baseada em IA.
- A regulamentação da UE (GDPR) - e a esquecida, abandonada e triste LGPD brasileira - sobre o "direito à explicação" é, na verdade, mais fraca do que parece: exige apenas "informações significativas sobre a lógica envolvida, bem como o significado e as consequências previstas desse processamento para o titular dos dados".
- _whataboutery_ - técnica para desviar questões, onde alguém sempre responde "e o que você pensa de x?" em vez de engajar diretamente.

### Dados causados pela IA
- Exemplos:
  - Vigiância, manipulação e controle;
  - Armas autônomas letais (escaláveis);
  - Extorsão automatizada;
  - Deepfakes / mídia falsa;
  - Automação - como resolver isso? Renda básica universal (Eduardo Suplicy canta essa bola desde que meu avô se conhece por gente)

### Alinhamento de valores
- Exemplos:
  - Rei Midas;
  - Direção perigosa;
  - Otimizar os níveis de oxigênio no mar e acabar removendo o oxigênio do ar;
  - Encontrar a cura para o câncer e, acidentalmente, dar tumores a todos;
- Nota: para uma IA, pode ser mais fácil convencer os humanos de um objetivo diferente do que resolvê-lo de fato.
- Praticamente qualquer objetivo de otimização pode levar uma IA a desativar seu próprio botão de desligamento.

### Possíveis soluções
- IA oráculo - só pode responder perguntas de "sim/não" ou probabilísticas, sem interagir diretamente com o mundo real.
- Aprendizado por Reforçoo Inverso (Inverse RL):
  - A IA deve ter incerteza sobre as utilidades;
  - As utilidades devem ser inferidas a partir das preferências humanas;
  - Em sistemas interativos, as preferências devem ser expressas em termos de teoria dos jogos;
- Complicações:
  - Difícil interpretar instruções humanas corretamente;
  - Pessoas são diferentes;
  - Uma IA leal a uma pessoa pode prejudicar outras;
  - Ética da IA:
    - _Consequencialismo_ - as escolhas devem ser julgadas pelos resultados esperados;
    - _Ética deontológica e ética das virtudes_ - preocupadas com o caráter moral das ações e dos indivíduos.
    - Difícil comparar utilidades entre pessoas;
    - O utilitarismo tem problemas quando envolve utilidades negativas;
  - Preferências podem mudar;
- A IA deve ser regulada.
- O aprendizado profundo (deep learning) se assemelha muito aos nossos sistemas sensoriais - a lógica ainda é necessária para agir sobre essas abstrações.

---

## Mentes possíveis
_Notas de [Mentes Possíveis](https://a.co/d/akau7zz)_, uma coletânea de ensaios organizada por Jogn Brockman (2019).

### Introdução (Brockman)
- Novas tecnologias = novas formas de perceber o mundo.
- Criamos ferramentas e nos moldamos por meio do seu uso.
- Norbert Wiener: "Devemos parar de beijar o chicote que nos açoita".
  - Seu livro inicial foi _The Human Use of Human Beings_.
  - Ele era em sua maioria analógico, caiu em desuso.
  - Inicialmente inspirou o campo da IA.
- A IA já passou por ciclos de ascensão e queda.
- **GOFAI** - Good Old-Fashiones AI (IA clássica - ou "A boa e velha querida IA").
- Coisas que achávamos difíceis, como xadrez, se mostraram fáceis para a IA.

### Errada, mas mais relevante do que nunca (Seth Lloyd)
- A IA atual é muito pior do que as pessoas pensam que é.
- Wiener era muito pessimista - WWWII / Guerra Fria.
- A singularidade não está chegando...

### As limitações das LMs opacas (Judea Pearl)
- 3 níveis de raciocínio:
  - estatístico;
  - casual;
  - contrafactual - muitos contrafactuais, mas a linguagem é boa e fornece muitos deles;
- "Explicar a ausência" = "bloqueio reverso" na literatura de condicionamento.
- Começa com a inferência casual, mas não funciona para sistemas grandes.
- Aprendizado profundo não é interpretável.
- Exemplo: pergunte a alguém por que ela se divorciou?
  - renda, idade, etc...
  - algo sobre o relacionamento...
- Correlações, causas, explicações (morais/racionais) - biologicamente tendemos a isso?
  - crenças + desejos causam ações.
- É interessante que diferentes pessoas sigam normal (por exemplo, chegar na aula às 08h).
  - você poderia fazer isso com IA?
- Exemplo de chatbot do Facebook.
- Máquina de clipes de papel, anúncios nas redes sociais.
- Estados/empresas são como IAs.
- **Equifinidade** perturbe o comportamento (como usar imagens em escala de cinza em vez de coloridas) e eles ainda podem fazer isso (como a estabilidade).

### O propósito colocado na máquina (Stuart Russell)
- Quer segurança na IA - precisa especificar o objetivo certo sem incertezas.
- **Alinhamento de valores** - coolocar o propósito certo.
- A pesquisa em IA estuda a capacidade de alcançar objetivos, não o design desses objetivos.
  - "melhor em tomar decisões - não em tomar melhores decisões".
- Quer IA comprovadamente benéfica.
- Não pode apenas maximizar recompensas - a solução ótima é controlar o humano para dar mais recompensas.
- RL inverso cooperativo - o robô aprende a função de recompensa com o humano:
  - Assim, a incerteza sobre recompensas permite que o robô preserve seu botão de desligamento;
  - Ações humanas nem sempre refletem suas verdadeiras preferências.

### A terceira lei (George Dyson)
- 2 eras: antes e depois dos computadores digitais:
  - Antes: Thomas Hobbes, Gottfried Whilhelm Leibniz;
  - Depois:
    - Alan Turing - máquinas inteligentes;
    - Claude Shannon - comunicação confiável;
    - Norbert Wiener - quando as máquinas tomariam o controle;
- Computação analógica - tudo sobre correções de erros.
- A natureza usa cofidificação digital para proteínas, mas analógica para o cérebro.
- Gráficos sociais podem usar código digital para computação analógica.
  - Sistemas analógicos parecem controlar o que estão mapeando (por exemplo, mapa de tráfego descentralizado)
- 3 leis da IA:
  - Lei de Ashby - qualquer sistema de controle eficaz deve ser tão complexo quanto o sistema que controla;
  - Lei de von Neumann - a característica definidora de um sistema complexo é que ele constitui sua própria descrição comportamental mais simples;
  - 3ª lei - qualquer sistema simples o suficiente para ser compreendido não será complicado o suficiente para se comportar de maneira inteligente (e vice-versa).

### O que podemos fazer? (Daniel Dennett)
- Dennett escreveu *Das Bactérias a Bach e Vice-versa*.
- Elogios: disposição para admitir que está errado e manter a calma.
- Releitura das coisas abre novas portas.
- Importante tratar a IA como ferramenta - o verdadeiro perigo está nos humanos se tornarem escravos da IA que surgirá naturalmente.
  - analogia com nossa dependência de frutas para vitamina C, enquanto outros animais sintetizam essa vitamina.
  - a tecnologia facilitou a manipulação de evidências.
  - Wiener: "A longo prazo, não há diferençã entre armar-nos e armar nossos inimigos."
- A IA atual é parasitária da inteligência humana.
- Somos robôs feitos de robôs feitos de robôs... sem ingredientes mágicos jogados no meio do caminho.
- Os embelezamentos humanóides atuais são _propaganda enganosa_.
- Precisamos de uma maneira de testar a segurança/interpretação dos sistemas, talvez com elementos humanos.
- As pessoas automaticamente personificam as coisas.
- Precisamos de ferramentas inteligentes, não consistentes - mais parecidas com oráculos.
- É muito difícil incorporar moralidade nas IAs - até a morte pode parecer boa.

### A unidade da inteligência (Frank Wilczek)
- Uma IA pode ser consciente/criativa/maldosa?
- A mente é uma propriedade emergente da matéria, isso implica que toda inteligência provém de uma máquina.
- David Hume: "a razão é, e deve ser apenas, escrava das paixões".
- Não há uma divisão clara entre inteligência natural e artificial: parece que ambas operam na mesma física.
- Inteligência parece ser um comportamento emergente.
- Principais diferenças entre cérebros e computadores: cérebros podem se auto-reparar, têm maior conectividade, mas menor eficiência no geral.
- A vantagem mais profunda do cérebro: conectividade e desenvolvimento interativo.
- As IAs serão boas em explorar.
- Definir inteligência geral - talvez usando linguagem?
- O ambiente da Terra não é ideal para as IAs.
- A IA poderia controlar o mundo apenas com informações, não apenas meios físicos.
- Economia afetiva - venda de emoções (como conversar com o atendente do McDonalds).
- As pessoas parecem gostar de viver no mundo humano.
  - Ex: trabalhar em cafés, bibliotecas, etc.
- Future Life Institute - financiado por Elon... talvez só tentando ganhar dinheiro.

### Vamos aspirar a mais do que nos tornarmos obsoletos (Max Tegmark)
- Às vezes é listado como alarmista.
- Talvez a consciência seja muito mais exagerada - como acordar de um estado de sonolência.
- Uma pesquisa com especialistas em IA apontou 50% de change da IA geral superar a inteligência humana até 2040-2050.
- Encontrar propósito se não formos necessários para nada?
- Importância de manter a IA benéfica.
- As possíveis IAs substituirão todos os empregos.
- Curiosidade é perigosa.
- 3 razões pelas quais o perigo da IA é minimizado:
  1. As pessoas minimizam o perigo porque isso faz suas pesquisas parecerem boas - "É difícil fazer um homem entender algo quando seu salário depende de ele não entender" - Upton Sinclair.
    - **luddista** - pessoa oposta à nova tecnologia ou maneiras de trabalhar - originado de uma organização secreta de trabalhadores têxteis ingleses que protestavam.
  2. É uma ameaça abstrata.
  3. Parece desesperador pensar sobre isso.
- A pesquisa de segurança da IA deve preceder os desenvolvimentos da IA.
- O verdadeiro risco com AGI não é a malícia, mas a competência.
- Inteligência = capacidade de alcançar objetivos complexos.
- Quão bons as pessoas são em prever o futuro da tecnologia?
- Joseph Weizenbaum excreveu sobre um bot psicoterapeuta que era bem ruim, mas o assustou.

### Mensagens Dissidentes (Jaan Tallinn)
- **Vozes que se levantam lentamente** acabam convencendo as pessoas.
- A **IA é diferente** das tecnologias que vieram antes - ela pode se **auto-multiplicar**.
- O **cérebro humano** causou muitas mudanças no mundo; a **IA será similar**.
- As pessoas parecem estar mais inclinadas a reconhecer que o **risco é grande**.
- **Riscos de curto prazo**: automação + viés.
- **Um grande risco**: risco ambiental da IA: como restringir a IA para não tornar nosso ambiente inabitável para formas biológicas.
- Precisamos parar de ver o mundo como um **jogo de soma zero**.
- **Pesquisa famosa**: Katja Grace no Future of Humanity Institute.

### Profecia Tecnológica e o Poder Causal Subestimado das Ideias (Steven Pinker)
- "Assim como Darwin tornou possível para um observador reflexivo do mundo natural viver sem criacionismo, Turing e outros tornaram possível para um observador reflexivo do mundo cognitivo viver sem espiritualismo."
- **Visão da entropia**: as IAs tentam evitar a entropia seguindo objetivos específicos.
- As **ideias movem a história humana**.
- **2 possíveis desfechos**:
  - Estado de vigilância.
  - Reconhecimento automático de fala.
- **Pinker** acha que isso não é um grande problema porque a liberdade de pensamento é movida por **normas e instituições**, não pela tecnologia.
- A maior ameaça da tecnologia parece ser amplificar **vozes duvidosas**, não suprimir as iluminadas.
- Mais tecnologia tem se correlacionado com mais **democracia**.
- A IA toma o controle - parece muito com **determinismo tecnológico**.
- **Inteligência** é a capacidade de implantar meios novos para alcançar um objetivo - não especifica qual é o objetivo.
- **Conhecimento** são coisas que sabemos - os nossos geralmente são encontrar comida, parceiros, etc. As máquinas terão **outros objetivos**.
- Se os humanos são inteligentes o suficiente para criar IA, são inteligentes o suficiente para **testá-la**.
- "A ameaça não é a máquina, mas o que pode ser feito com ela."

### Além de Recompensa e Punição (David Deutsch)
- **David Deutsch** - fundador da computação quântica.
- Pensar envolve criar novas **hipóteses**, não apenas ser bayesiano.
- O **conhecimento** em si não era enormemente benéfico do ponto de vista evolutivo no começo, mas reter conhecimento cultural era.
- No começo, as pessoas não aprendiam muito - apenas lembravam as normas culturais.
- Ninguém aspirava a nada novo.
- Até agora, a maneira como as IAs foram desenvolvidas (por exemplo, jogar xadrez) é restringir um **espaço de busca**, mas AGI quer que elas criem um novo espaço de busca.
- Geralmente, não seguimos as leis por causa das punições - as AGIs também não vão.
- **A sociedade aberta** é o único tipo estável.
- Será difícil **testar/otimizar diretamente**.
- AGI ainda pode ser **determinista**.
- **Tensão entre imitação e aprendizado**? (imitação/inovação)
- As pessoas acreditam erroneamente que a AGI deveria aprender por conta própria, como o causa sui de Nietzsche, mas os humanos não fazem isso.
- **A cultura** pode te tornar mais livre de modelos.

### O Uso Artificial dos Seres Humanos (Tom Griffiths)
- Acredita que a chave para o **ML** é o **aprendizado humano**.
- Agora temos bons modelos de **imagens/texto**, mas não de **alinhamento de valores**.
- **RL inverso**: olhe para as ações de um agente inteligente, aprenda a recompensa.
- **Precisão** (heurísticas) vs **generalização** (muitas vezes assume racionalidade).
- No entanto, as pessoas muitas vezes não são **racionais** - elas seguem **heurísticas simples**.
  - Exemplo: não calculam probabilidades, apenas tentam lembrar exemplos.
- As pessoas geralmente trocam **tempo** com a importância de uma decisão - **otimalidade limitada**.
- A IA poderia realmente produzir mais **lazer**?

### Tornando o Invisível Visível (Hans Ulrich Obrist)
- Precisamos usar a **arte** para interpretar melhor as visualizações, como o **deepdream**.
- **IA como ferramenta**, como o **photoshop**.
- Ajustar simulações é uma arte (novamente de maneira semelhante ao deep-dream).
- **Metas-meta** são importantes.
- **Arte** - um sistema de alerta precoce para pensar sobre o futuro, evocativa.
- **Design** - tem um propósito mais claro, invisível.
- **Movimento fluxista** - faça você mesmo, como flash mob, espontâneo, não elitista.
- Esta **exposição de progresso** - Guggenheim onde te entregam para as pessoas mais velhas.
- **Arte** - acompanha o que as pessoas apreciam ao longo do tempo.
- Tudo, exceto museus + pixels são **pixels**.
- **Marcel Duchamp 1917** - urinol no museu de arte foi muito valioso.

### Sonho dos Algoritmistas de Objetividade (Peter Galison)
- Historiador da ciência.
- **Histórias sobre tecnologias perigosas** foram repetidas (por exemplo, nanotecnologia, DNA recombinante).
- Uma revisão em psicologia descobriu que **modelos objetivos** superaram grupos de clínicos humanos ("procedimentos de previsão: a controvérsia clínica-estatística").
- As pessoas começaram inicialmente com **desenhos**.
- Depois mudaram para **medidas mais objetivas** (por exemplo, microscópio).
- Depois houve uma leve mudança para longe disso (por exemplo, humanos superaram algoritmos em certas coisas).
- **Objetividade não é tudo**.
- **Arte com sistema nervoso**.
- Animações com **personagens** que têm objetivos.

### Os Direitos das Máquinas (George Church)
- As **máquinas devem**, cada vez mais, ter direitos como os dos humanos.
- **Potencial da IA** para tornar os humanos mais inteligentes também.

### O Uso Artístico de Seres Cibernéticos (Caroline Jones)
- Como **esticar** as pessoas além de nossos parâmetros simples e egoístas.
- **Arte de séance cibernética**.
- Mais focado em **hardware**.
- Evolução baseada na **cultura**.
- **Vale do estranho** - se as coisas parecerem muito humanas, achamos assustadoras.
- Isso não acontece com **crianças** (até cerca de 10 anos).

### Reflexões sobre Arte com Base em Animais de Neil Mendoza
- A IA atual é mais avançada que o **jogo da vida**?

### Informação para Wiener, Shannon e para Nós (David Kaiser)
- **Wiener**: a sociedade só pode ser entendida com base na análise de **mensagens**.
- **Informação** = informação semântica.
- **Shannon**: **informação** = entropia (não redução de entropia?).
- Previsões.
- A informação não pode ser conservada (o nível eficaz da informação estará sempre avançando).
- A informação não é adequada para ser **mercadoria**.
- Pode ser facilmente **replicada**.
- A ciência começou a ter **citações** no século XVII porque antes disso as pessoas não queriam publicar.
- Transformou a **informação** em moeda.
- O mundo da **arte** teve dificuldades com isso.
- Anos 80: **arte de apropriação** - mudava apenas o título.
- A **literatura**, por muito tempo, não tinha **direitos autorais**.
- **Algoritmos** são difíceis de **patentear**.
- Aviso de **Wiener**: as máquinas nos dominariam apenas quando os **indivíduos** fossem os mesmos.
- Estilo e outros aspectos se tornam mais semelhantes à medida que estamos mais **conectados**.
- O **Twitter** seria o oposto disso.
- A **Amazon** poderia tornar as coisas mais homogêneas.
- A **moda** muda constantemente.
- Talvez uma maneira arbitrária de identificar **grupos** de dentro/fora.
- **Comparação com mercados**.
- As **cidades** parecem aumentar a **diversidade** - mais pessoas para interagir.
- O **aprendizado profundo** deve buscar mais **informação semântica** e não **estatística**.


### Escalabilidade (Neil Gershenfield)
- A IA é mais sobre **leis de escalabilidade** do que **modismos**.
- Mania: **sucesso em domínios limitados**.
- Depressão.
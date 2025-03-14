---
title: "O futuro sem futuro da IA"
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
- **Equifinidade** perturbe o comportamento (como usar imagens em escala de cinza em vez de coloridas) e eles ainda podem fazer isso (como a estabilidade)

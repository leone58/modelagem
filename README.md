# Roteiro da Aula — Semana 1 (S1)

## Levantamento de Dados e Conceitos Fundamentais

**Duração total:** 100 minutos
**Tema:** Modelagem e Desenvolvimento de Banco de Dados

Este documento contém o **roteiro falado** da aula (o que dizer em voz alta), minuto a minuto. É só ler ou adaptar com suas palavras. As explicações do conteúdo (a "cola" do professor) estão no site.

---

## Como colocar o site no ar (GitHub Pages)

O site é feito em HTML/CSS/JS puro (não precisa de servidor). Os arquivos ficam na pasta `public/`:

- `public/index.html` — a página
- `public/styles.css` — o visual
- `public/script.js` — o conteúdo e as interações

### Passo a passo

1. Crie um repositório novo no GitHub (ex.: `aula-banco-de-dados`).
2. Envie os **3 arquivos** (`index.html`, `styles.css` e `script.js`) para a **raiz** do repositório.
   - Dica: no GitHub, use o botão **Add file → Upload files** e arraste os 3 arquivos.
3. No repositório, vá em **Settings → Pages**.
4. Em **Source**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`. Clique em **Save**.
5. Aguarde ~1 minuto e recarregue a página. O GitHub vai mostrar o endereço do site, algo como:
   `https://SEU-USUARIO.github.io/aula-banco-de-dados/`

Pronto! É só abrir esse link no navegador (no computador da sala de aula, projetor, etc.).

> **Testar no seu computador antes:** basta dar dois cliques no arquivo `index.html` que ele abre no navegador — os 3 arquivos precisam estar na mesma pasta.

---

## Índice dos blocos

| Minutos | Bloco |
| --- | --- |
| 0 – 8 | Abertura e apresentação do tema |
| 8 – 28 | Aula 1 — Introdução à modelagem de banco de dados |
| 28 – 48 | Aula 2 — Levantamento de requisitos e análise de dados |
| 48 – 53 | Pausa e Responda (intervalo + pergunta rápida) |
| 53 – 80 | Aula 3 — Modelo Entidade-Relacionamento (ER) |
| 80 – 94 | Aula 4 — Ferramentas de modelagem de banco de dados |
| 94 – 100 | Encerramento, revisão e próximos passos |

---

## [0 – 8 min] Abertura e apresentação do tema

> Olá, bom dia a todos! Sejam bem-vindos. Hoje vamos começar a nossa Semana 1, sobre Levantamento de Dados e Conceitos Fundamentais de banco de dados.

> Antes de mais nada, deixa eu explicar por que isso é tão importante: praticamente todo aplicativo que vocês usam — Instagram, banco, loja online, o sistema da faculdade — guarda informação em algum lugar. Esse lugar é o banco de dados.

> Só que não basta "jogar" os dados lá dentro. A gente precisa organizar essas informações de um jeito lógico, para não ter dados repetidos, perdidos ou bagunçados. E é exatamente isso que a modelagem de banco de dados faz.

> Então o nosso objetivo de hoje é: entender o que é modelagem, aprender a levantar os requisitos (ou seja, descobrir o que o sistema precisa guardar) e conhecer o Modelo Entidade-Relacionamento, que é o desenho do nosso banco de dados.

> A aula tem 4 partes. Vou dividir bem o tempo e teremos uma pausa no meio. Podem me interromper para perguntar a qualquer momento, combinado? Então vamos lá!

---

## [8 – 28 min] Aula 1 — Introdução à modelagem de banco de dados

> Vamos começar pela primeira parte: o que é modelagem de banco de dados?

> Modelar é criar um "desenho" de como os dados vão ser organizados. É como a planta de uma casa: o pedreiro não começa a construir sem a planta, senão a casa sai torta. Com dados é a mesma coisa.

> Existem três níveis de modelagem, e eu quero que vocês guardem essa ideia de "do mais abstrato para o mais técnico":

> Primeiro, o Modelo Conceitual: é a visão geral, sem se preocupar com tecnologia. Aqui a gente só desenha as entidades e como elas se relacionam. É o que a gente vai focar hoje com o Modelo Entidade-Relacionamento.

> Segundo, o Modelo Lógico: aqui a gente detalha mais — define tabelas, colunas, chaves — mas ainda sem escolher qual banco de dados específico vai usar.

> Terceiro, o Modelo Físico: é a implementação real, já no banco escolhido (por exemplo MySQL, PostgreSQL), com os comandos que criam as tabelas de verdade.

> Resumindo com uma frase que vocês podem anotar: "Conceitual é o QUÊ, Lógico é o COMO organiza, Físico é o ONDE implementa."

> Por que fazer tudo isso antes de programar? Porque errar no papel é barato; errar depois do sistema pronto e com milhares de dados dentro é caríssimo.

---

## [28 – 48 min] Aula 2 — Levantamento de requisitos e análise de dados

> Agora que sabemos o que é modelar, vem a pergunta: como eu descubro o que preciso guardar no banco? Isso é o levantamento de requisitos.

> Levantar requisitos é conversar com o cliente ou usuário para entender o que o sistema precisa fazer e quais dados ele precisa armazenar. É a fase de "investigação".

> Existem técnicas para isso: entrevistas com os usuários, questionários, observação de como as pessoas trabalham hoje, e análise de documentos que a empresa já usa (fichas, planilhas, formulários).

> Deixa eu dar um exemplo prático. Imaginem que um dono de biblioteca pede um sistema. Eu vou perguntar: o que você precisa controlar? Ele responde: "os livros, quem são os leitores e os empréstimos".

> Percebam que dessas frases já saltam palavras-chave: LIVRO, LEITOR, EMPRÉSTIMO. Uma dica de ouro: os SUBSTANTIVOS que aparecem na conversa geralmente viram entidades (tabelas), e as características deles viram atributos (colunas).

> Por exemplo, do livro eu preciso saber: título, autor, ano. Do leitor: nome, telefone. Essas características são os atributos.

> Então o levantamento tem dois passos: primeiro descobrir o que o sistema precisa; depois analisar esses dados para separar o que é entidade e o que é atributo.

> Vamos fazer juntos: se fosse um sistema de uma pizzaria, quais entidades vocês acham que apareceriam? (deixe a turma responder: Cliente, Pedido, Pizza, Entregador...).

---

## [48 – 53 min] Pausa e Responda (intervalo + pergunta rápida)

> Vamos fazer uma pausa rápida de respiro. Antes, quero deixar uma pergunta no ar para vocês pensarem — é o nosso "Pause e Responda".

> Pergunta: numa frase como "O cliente faz vários pedidos", quem é a entidade e quem é o relacionamento? Pensem nisso e a gente retoma em seguida.

> Podem esticar as pernas, beber uma água, e já voltamos para a parte mais visual da aula: desenhar o modelo.

**Resposta esperada:** "Cliente" e "Pedido" são entidades; "faz" é o relacionamento entre elas.

---

## [53 – 80 min] Aula 3 — Modelo Entidade-Relacionamento (ER)

> Voltando! Agora chegamos ao coração da aula: o Modelo Entidade-Relacionamento, o famoso modelo ER.

> O modelo ER é um desenho, um diagrama, que mostra as entidades, os atributos e os relacionamentos do nosso sistema. É a nossa "planta" visual.

> Vamos aos três elementos principais. Primeiro: ENTIDADE. É um objeto do mundo real sobre o qual queremos guardar dados. Ex.: Aluno, Produto, Cliente. Costuma ser representada por um retângulo.

> Segundo: ATRIBUTO. É uma característica da entidade. O Aluno tem nome, matrícula, data de nascimento. É representado por uma elipse (ou dentro da tabela, dependendo da notação).

> Um atributo muito especial é a CHAVE PRIMÁRIA: é o atributo que identifica cada registro de forma única. Por exemplo, dois alunos podem ter o mesmo nome, mas nunca a mesma matrícula. A matrícula é a chave primária.

> Terceiro: RELACIONAMENTO. É a ligação entre entidades, geralmente representada por um losango. Ex.: Aluno "se matricula em" Turma.

> E agora um conceito que costuma confundir, mas é essencial: a CARDINALIDADE. Ela diz QUANTAS vezes uma entidade se relaciona com outra. Existem três tipos:

> Um para um (1:1): um registro se liga a no máximo um do outro lado. Ex.: uma pessoa tem um CPF, e um CPF pertence a uma pessoa.

> Um para muitos (1:N): o caso mais comum. Ex.: um cliente faz muitos pedidos, mas cada pedido pertence a um único cliente.

> Muitos para muitos (N:N): dos dois lados podem ser vários. Ex.: um aluno cursa várias disciplinas, e cada disciplina tem vários alunos.

> Olhem o diagrama na tela: retângulos são entidades, losangos são relacionamentos, e os números nas linhas são a cardinalidade. Consigo mostrar visualmente como o Cliente se conecta ao Pedido.

> Guardem esta frase: "Entidade é o substantivo, atributo é a característica, relacionamento é o verbo que liga as entidades."

---

## [80 – 94 min] Aula 4 — Ferramentas de modelagem de banco de dados

> Para fechar o conteúdo: quais ferramentas usamos para desenhar esses modelos na prática? Não precisa ser no papel.

> Existem várias ferramentas gratuitas e profissionais. Vou citar as mais usadas:

> brModelo: é a queridinha do ensino no Brasil, gratuita e feita para modelagem conceitual e lógica. Ótima para começar.

> MySQL Workbench: além de modelar, ela conecta no banco de verdade e gera o modelo físico. Muito usada no mercado.

> Draw.io (diagrams.net): gratuita, online, serve para vários tipos de diagrama, incluindo ER. Pr��tica e sem instalação.

> Outras que vocês vão ouvir falar: DBDesigner, Lucidchart, e o ERwin em ambientes corporativos.

> A dica é: a ferramenta é só o pincel. O que importa é vocês entenderem os conceitos — entidade, atributo, relacionamento e cardinalidade. Com isso, qualquer ferramenta vira fácil.

> Como "Pause e Responda" desta parte: se vocês fossem modelar o sistema da nossa biblioteca, qual ferramenta escolheriam e por quê?

---

## [94 – 100 min] Encerramento, revisão e próximos passos

> Estamos chegando ao fim. Vamos recapitular rapidinho tudo o que vimos hoje.

> Aprendemos que modelar é planejar a organização dos dados antes de programar, e que existem três níveis: conceitual, lógico e físico.

> Vimos como levantar requisitos conversando com o usuário, e a dica de que substantivos viram entidades e características viram atributos.

> Estudamos o modelo ER com seus três elementos — entidade, atributo e relacionamento — e o conceito de cardinalidade: 1:1, 1:N e N:N.

> E, por fim, conhecemos as ferramentas como brModelo, MySQL Workbench e Draw.io.

> Para a próxima aula, quero que vocês pensem em um sistema simples do dia a dia e tentem listar as entidades e atributos dele. Traga anotado!

> Foi um prazer, obrigado pela participação de todos e até a próxima aula!

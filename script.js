/* ==========================================================================
   DADOS DA AULA - Semana 1: Modelagem de Banco de Dados
   ========================================================================== */

const infoAula = {
  semana: "Semana 1 (S1)",
  tema: "Levantamento de Dados e Conceitos Fundamentais",
  duracaoTotal: 100,
  descricao:
    "Nesta aula os alunos vão aprender a levantar requisitos e criar modelos de dados para organizar informações de forma lógica e eficiente.",
};

const blocos = [
  {
    id: "abertura",
    titulo: "Abertura e apresentação do tema",
    minutoInicio: 0,
    minutoFim: 8,
    fase: "Abertura",
    material: {
      conceito:
        "Um banco de dados é uma coleção organizada de informações que podem ser facilmente acessadas, gerenciadas e atualizadas. Modelar é desenhar essa organização ANTES de construir o sistema.",
      pontos: [
        "Banco de dados = onde a informação de um sistema fica guardada de forma estruturada.",
        "Modelagem = planta baixa do banco, feita antes de programar (assim como um arquiteto desenha a casa antes de construir).",
        "Um bom modelo evita dados repetidos, inconsistentes ou perdidos.",
      ],
      exemplo:
        "Pense numa escola: é preciso guardar dados de alunos, professores, turmas e notas. Modelar é decidir como essas informações se organizam e se conectam.",
      dica: "Comece a aula com uma pergunta ao público: 'Onde vocês acham que ficam guardados os dados do seu perfil de rede social?' - gera engajamento.",
    },
  },
  {
    id: "aula1",
    titulo: "Aula 1 - Introdução à modelagem de banco de dados",
    minutoInicio: 8,
    minutoFim: 28,
    fase: "Aula 1",
    material: {
      conceito:
        "A modelagem organiza a informação em três níveis de abstração: Conceitual, Lógico e Físico. Vai do mais próximo do negócio (humano) ao mais próximo da máquina (técnico).",
      pontos: [
        "Modelo Conceitual: visão de alto nível, independe de tecnologia. Representado pelo Diagrama Entidade-Relacionamento (DER). Foca no 'o quê'.",
        "Modelo Lógico: define tabelas, atributos, chaves primárias e estrangeiras. Ainda independente do SGBD específico. Foca no 'como organizar'.",
        "Modelo Físico: implementação real em um SGBD (MySQL, PostgreSQL, etc.), com tipos de dados e comandos SQL. Foca no 'onde implementar'.",
        "SGBD = Sistema Gerenciador de Banco de Dados (o software que gerencia o banco, ex.: MySQL, PostgreSQL, Oracle, SQL Server).",
      ],
      exemplo:
        "Conceitual: 'Um Cliente faz Pedidos'. Lógico: tabela CLIENTE(id, nome) e tabela PEDIDO(id, data, id_cliente). Físico: CREATE TABLE cliente (id INT PRIMARY KEY, nome VARCHAR(100));",
      dica: "Analogia da planta da casa funciona muito bem aqui. Conceitual = esboço no guardanapo; Lógico = planta técnica com medidas; Físico = casa construída.",
    },
  },
  {
    id: "aula2",
    titulo: "Aula 2 - Levantamento de requisitos e análise de dados",
    minutoInicio: 28,
    minutoFim: 48,
    fase: "Aula 2",
    material: {
      conceito:
        "Levantamento de requisitos é o processo de descobrir e documentar o que o sistema precisa fazer e quais dados precisa armazenar, conversando com quem vai usar o sistema.",
      pontos: [
        "Técnicas: entrevistas, questionários, observação do dia a dia e análise de documentos existentes.",
        "Requisito funcional: o que o sistema deve fazer (ex.: 'registrar empréstimos de livros').",
        "Requisito de dados: quais informações precisam ser guardadas (ex.: título do livro, nome do leitor).",
        "Regra prática: substantivos -> candidatos a ENTIDADES; características desses substantivos -> ATRIBUTOS; verbos entre substantivos -> RELACIONAMENTOS.",
      ],
      exemplo:
        "Biblioteca: 'O leitor pega livros emprestados'. Entidades: LEITOR, LIVRO. Relacionamento: EMPRÉSTIMO. Atributos de LIVRO: título, autor, ano.",
      dica: "Faça a dinâmica da pizzaria ou de um tema que a turma goste. Peça para eles listarem entidades e atributos - é o momento mais participativo da aula.",
    },
  },
  {
    id: "pausa",
    titulo: "Pausa e Responda (intervalo + pergunta rápida)",
    minutoInicio: 48,
    minutoFim: 53,
    fase: "Aula 2",
    material: {
      conceito:
        "Momento de checagem de aprendizagem (formativa). Serve para consolidar os conceitos de entidade x relacionamento antes de partir para o diagrama.",
      pontos: [
        "Resposta esperada: 'Cliente' e 'Pedido' são entidades; 'faz' é o relacionamento entre elas.",
        "Use este momento para identificar quem não entendeu e reforçar antes de avançar.",
      ],
      dica: "Se a maioria errar, vale revisar rapidamente a Aula 2 antes de seguir. Não avance com a turma perdida.",
    },
  },
  {
    id: "aula3",
    titulo: "Aula 3 - Modelo Entidade-Relacionamento (ER)",
    minutoInicio: 53,
    minutoFim: 80,
    fase: "Aula 3",
    diagrama: true,
    material: {
      conceito:
        "O Modelo Entidade-Relacionamento (MER) é representado graficamente pelo Diagrama Entidade-Relacionamento (DER). É a principal ferramenta do modelo conceitual.",
      pontos: [
        "Entidade: objeto do mundo real com dados a guardar (retângulo). Ex.: Cliente, Produto.",
        "Atributo: característica de uma entidade (elipse). Ex.: nome, preço, data.",
        "Chave primária (PK): atributo que identifica unicamente cada registro (ex.: CPF, matrícula, id). Normalmente sublinhado no diagrama.",
        "Relacionamento: associação entre entidades (losango). Costuma ser um verbo.",
        "Cardinalidade: quantidade de associações possíveis - 1:1, 1:N e N:N.",
        "Relacionamentos N:N na prática viram uma tabela intermediária (tabela associativa) no modelo lógico.",
      ],
      exemplo:
        "CLIENTE (id_cliente PK, nome) -< FAZ >- PEDIDO (id_pedido PK, data). Cardinalidade 1:N: um cliente faz muitos pedidos; cada pedido é de um cliente.",
      dica: "Desenhe ao vivo no quadro ou use o diagrama da tela. Peça para a turma dizer a cardinalidade de exemplos do cotidiano (aluno x curso, autor x livro).",
    },
  },
  {
    id: "aula4",
    titulo: "Aula 4 - Ferramentas de modelagem de banco de dados",
    minutoInicio: 80,
    minutoFim: 94,
    fase: "Aula 4",
    material: {
      conceito:
        "Ferramentas de modelagem permitem desenhar diagramas ER e, em alguns casos, gerar o script SQL do banco automaticamente (engenharia direta).",
      pontos: [
        "brModelo: gratuita, nacional, focada em ensino; cobre conceitual e lógico.",
        "MySQL Workbench: modela e conecta ao banco real; gera modelo físico e SQL.",
        "Draw.io / diagrams.net: online e gratuita, diagramas variados incluindo ER.",
        "Outras: DBDesigner, Lucidchart, ERwin (corporativo).",
        "Engenharia direta = gerar o SQL a partir do diagrama; engenharia reversa = gerar o diagrama a partir de um banco existente.",
      ],
      exemplo:
        "No brModelo você arrasta retângulos (entidades) e losangos (relacionamentos); no Workbench, ao finalizar, ele gera o CREATE TABLE pronto.",
      dica: "Se houver tempo e laboratório, abra o brModelo ou o draw.io e monte um mini-diagrama ao vivo. Vale muito mais que só falar.",
    },
  },
  {
    id: "encerramento",
    titulo: "Encerramento, revisão e próximos passos",
    minutoInicio: 94,
    minutoFim: 100,
    fase: "Encerramento",
    material: {
      conceito:
        "O fechamento reforça a memória de longo prazo. Retomar os pontos-chave e propor uma tarefa prática conecta a teoria de hoje com a próxima aula.",
      pontos: [
        "Resumo dos 4 tópicos: modelagem (3 níveis), levantamento de requisitos, modelo ER e ferramentas.",
        "Proponha uma tarefa: listar entidades e atributos de um sistema simples.",
        "Abra espaço para dúvidas finais antes de encerrar.",
      ],
      dica: "Termine com uma pergunta aberta e uma tarefa leve. Isso mantém os alunos pensando no conteúdo até a próxima aula.",
    },
  },
];

const glossario = [
  { termo: "Banco de dados", definicao: "Coleção organizada de informações que podem ser acessadas, gerenciadas e atualizadas." },
  { termo: "SGBD", definicao: "Sistema Gerenciador de Banco de Dados - software que administra o banco (MySQL, PostgreSQL, etc.)." },
  { termo: "Modelagem", definicao: "Processo de planejar e desenhar a estrutura dos dados antes de implementar." },
  { termo: "Entidade", definicao: "Objeto do mundo real sobre o qual se guardam dados (ex.: Cliente, Produto)." },
  { termo: "Atributo", definicao: "Característica de uma entidade (ex.: nome, preço, data)." },
  { termo: "Chave primária (PK)", definicao: "Atributo que identifica cada registro de forma única (ex.: CPF, matrícula)." },
  { termo: "Chave estrangeira (FK)", definicao: "Atributo que liga uma tabela a outra, referenciando a chave primária dela." },
  { termo: "Relacionamento", definicao: "Associação entre entidades, normalmente representada por um verbo." },
  { termo: "Cardinalidade", definicao: "Número de associações possíveis entre entidades: 1:1, 1:N ou N:N." },
  { termo: "Modelo Conceitual", definicao: "Visão de alto nível, independente de tecnologia (o DER)." },
  { termo: "Modelo Lógico", definicao: "Detalha tabelas, colunas e chaves, independente do SGBD." },
  { termo: "Modelo Físico", definicao: "Implementação real no SGBD escolhido, com comandos SQL." },
];

/* ==========================================================================
   RENDERIZAÇÃO
   ========================================================================== */

function fmtMin(m) {
  return `${String(m).padStart(2, "0")}:00`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// Cabeçalho
document.getElementById("badge-semana").textContent = infoAula.semana;
document.getElementById("titulo-tema").textContent = infoAula.tema;
document.getElementById("descricao-aula").textContent = infoAula.descricao;
document.getElementById("meta-duracao").textContent = `${infoAula.duracaoTotal} minutos`;

// Diagrama ER (HTML)
function diagramaHTML() {
  return `
    <div class="diagrama">
      <p class="diagrama-titulo">Exemplo visual: Diagrama Entidade-Relacionamento</p>
      <div class="er-fluxo">
        <div class="er-entidade">
          <div class="nome">CLIENTE</div>
          <div class="attrs">id_cliente (PK), nome</div>
        </div>
        <div class="er-rel">
          <span class="er-card">1</span>
          <span class="er-losango">FAZ</span>
          <span class="er-card">N</span>
        </div>
        <div class="er-entidade">
          <div class="nome">PEDIDO</div>
          <div class="attrs">id_pedido (PK), data</div>
        </div>
      </div>
      <div class="er-legenda">
        <span><span class="dot p"></span> Entidade (retângulo)</span>
        <span><span class="dot a"></span> Relacionamento (losango)</span>
        <span>1:N = um cliente faz muitos pedidos</span>
      </div>
    </div>`;
}

// Blocos
const blocosContainer = document.getElementById("blocos");
blocos.forEach((b, i) => {
  const m = b.material;
  const el = document.createElement("div");
  el.className = "bloco" + (i === 0 ? " aberto" : "");

  const exemploHTML = m.exemplo
    ? `<div class="exemplo"><strong>Exemplo prático:</strong> ${escapeHtml(m.exemplo)}</div>`
    : "";
  const dicaHTML = m.dica
    ? `<div class="dica"><strong>Dica de didática:</strong> ${escapeHtml(m.dica)}</div>`
    : "";
  const diagrama = b.diagrama ? diagramaHTML() : "";

  el.innerHTML = `
    <button class="bloco-header" type="button" aria-expanded="${i === 0}">
      <span class="bloco-tempo">${fmtMin(b.minutoInicio)}-${fmtMin(b.minutoFim)}</span>
      <span class="bloco-titulo-wrap">
        <span class="bloco-fase">${escapeHtml(b.fase)}</span>
        <span class="bloco-titulo">${escapeHtml(b.titulo)}</span>
      </span>
      <span class="bloco-seta" aria-hidden="true">v</span>
    </button>
    <div class="bloco-conteudo">
      <div class="conceito">${escapeHtml(m.conceito)}</div>
      <p class="sub-label">Pontos-chave</p>
      <ul class="pontos">
        ${m.pontos.map((p) => `<li>${escapeHtml(p)}</li>`).join("")}
      </ul>
      ${exemploHTML}
      ${diagrama}
      ${dicaHTML}
    </div>`;

  const header = el.querySelector(".bloco-header");
  header.addEventListener("click", () => {
    const aberto = el.classList.toggle("aberto");
    header.setAttribute("aria-expanded", String(aberto));
  });

  blocosContainer.appendChild(el);
});

// Glossário
const glossarioContainer = document.getElementById("glossario");
glossario.forEach((g) => {
  const dl = document.createElement("dl");
  dl.className = "glossario-item";
  dl.innerHTML = `<dt>${escapeHtml(g.termo)}</dt><dd>${escapeHtml(g.definicao)}</dd>`;
  glossarioContainer.appendChild(dl);
});

/* ==========================================================================
   CRONÔMETRO
   ========================================================================== */

const totalSegundos = infoAula.duracaoTotal * 60;
let segundos = 0;
let intervalo = null;
let rodando = false;

const elTempo = document.getElementById("crono-tempo");
const elProgresso = document.getElementById("crono-progresso");
const btnPlay = document.getElementById("crono-play");
const btnReset = document.getElementById("crono-reset");

function atualizarCrono() {
  const min = Math.floor(segundos / 60);
  const seg = segundos % 60;
  elTempo.textContent = `${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
  const pct = Math.min((segundos / totalSegundos) * 100, 100);
  elProgresso.style.width = `${pct}%`;
}

btnPlay.addEventListener("click", () => {
  if (rodando) {
    clearInterval(intervalo);
    rodando = false;
    btnPlay.textContent = "Continuar";
  } else {
    rodando = true;
    btnPlay.textContent = "Pausar";
    intervalo = setInterval(() => {
      if (segundos < totalSegundos) {
        segundos++;
        atualizarCrono();
      } else {
        clearInterval(intervalo);
        rodando = false;
        btnPlay.textContent = "Fim";
      }
    }, 1000);
  }
});

btnReset.addEventListener("click", () => {
  clearInterval(intervalo);
  rodando = false;
  segundos = 0;
  btnPlay.textContent = "Iniciar";
  atualizarCrono();
});

atualizarCrono();

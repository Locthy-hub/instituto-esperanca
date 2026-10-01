# 🌱 Instituto Esperança

Site institucional fictício de uma ONG, desenvolvido como projeto acadêmico para a disciplina **Experiência Prática IV**. O projeto apresenta uma interface responsiva, acessível e totalmente estática, utilizando **HTML5, CSS3 e JavaScript puro**.

O objetivo é demonstrar na prática conceitos de desenvolvimento web, incluindo estrutura semântica, validação de formulários, manipulação do DOM, acessibilidade, responsividade, otimização e publicação de aplicações estáticas.

---

## 📌 Status do projeto

![Status](https://img.shields.io/badge/status-concluído-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📖 Sobre o projeto

O **Instituto Esperança** é uma organização não governamental fictícia criada para fins acadêmicos. O site foi desenvolvido para apresentar informações institucionais, projetos e uma área de cadastro para pessoas interessadas em participar como voluntárias.

O projeto faz parte da disciplina **Experiência Prática IV**, tendo como foco a aplicação de conhecimentos relacionados ao desenvolvimento, organização, acessibilidade, validação, testes, versionamento e publicação de aplicações web.

A aplicação foi desenvolvida sem frameworks ou bibliotecas externas, permitindo demonstrar os fundamentos do desenvolvimento web utilizando tecnologias nativas do navegador.

---

## 🖥️ Demonstração

O projeto é uma aplicação **100% estática**, portanto não depende de servidor de aplicação, banco de dados ou backend.

Pode ser executado diretamente no navegador ou publicado utilizando serviços de hospedagem para sites estáticos, como o **GitHub Pages**.

### Páginas disponíveis

- **Início (`index.html`)** — apresentação institucional do Instituto Esperança.
- **Projetos (`projetos.html`)** — apresentação dos projetos da ONG e interação com modal acessível.
- **Cadastro (`cadastro.html`)** — formulário para cadastro de pessoas interessadas.

### Visualização local

O projeto pode ser executado simplesmente abrindo o arquivo `index.html` em um navegador.

Também é possível utilizar a extensão **Live Server** no Visual Studio Code para executar o projeto durante o desenvolvimento.

---

## Funcionalidades

### Navegação

- Navegação entre as páginas **Início**, **Projetos** e **Cadastro**.
- Indicação da página atual utilizando `aria-current`.
- Link **"Ir para o conteúdo"** para facilitar a navegação por teclado.

### 📝 Formulário de cadastro

O formulário é organizado semanticamente utilizando:

- `fieldset`;
- `legend`;
- Dados pessoais;
- Endereço;
- Interesse;
- Mensagem.

A validação utiliza recursos nativos do HTML5, incluindo:

- `required`;
- `minlength`;
- `maxlength`;
- `pattern`;
- `type`.

Além disso, foram implementadas mensagens de validação personalizadas em português.

### Máscaras de entrada

O JavaScript aplica máscaras em tempo real para:

- CPF;
- telefone;
- CEP.

As máscaras são aplicadas conforme o usuário digita os valores.

### 🪪 Validação de CPF

O formulário possui uma validação específica para CPF, realizando a verificação dos dígitos verificadores.

Dessa forma, valores inválidos conhecidos, como:

```text
111.111.111-11
```

não são aceitos.

### ⚙️ Manipulação do DOM

O JavaScript é utilizado para:

- Manipular elementos da página;
- Responder às interações do usuário;
- Validar campos;
- Alterar estados visuais;
- Exibir mensagens de feedback;
- Controlar o modal;
- Aplicar máscaras aos campos.

###  Feedback visual

O projeto possui diferentes tipos de mensagens:

- `alert-success` — indica uma operação bem-sucedida;
- `alert-error` — indica um erro;
- `alert-info` — apresenta informações ao usuário;
- **Toast** — exibe notificações temporárias.

Os avisos são implementados utilizando JavaScript puro, sem bibliotecas externas.

### 🪟 Modal acessível

A página de projetos possui um modal com recursos de acessibilidade, incluindo:

- Foco preso dentro do diálogo;
- Fechamento pelo botão;
- Fechamento ao clicar fora do modal;
- Fechamento utilizando a tecla `Esc`;
- `role="dialog"`;
- `aria-modal`;
- `aria-labelledby`.

### 📱 Responsividade

O layout utiliza **media queries** para adaptar a interface a diferentes tamanhos de tela, incluindo:

- Computadores;
- Tablets;
- Celulares.

### ♿ Acessibilidade

Foram aplicadas diversas práticas relacionadas à acessibilidade, incluindo:

- `lang="pt-BR"`;
- Estrutura semântica;
- Link para pular diretamente ao conteúdo;
- `aria-current`;
- `aria-invalid`;
- `aria-live`;
- `role="status"`;
- `role="dialog"`;
- `aria-modal`;
- `aria-labelledby`;
- Foco visível;
- Textos alternativos (`alt`) nas imagens;
- Suporte à navegação por teclado;
- Respeito à preferência de movimento reduzido.

As animações são desativadas quando o usuário possui a preferência `prefers-reduced-motion` habilitada.

### 🔎 SEO básico

Cada página possui elementos básicos de otimização para mecanismos de busca, incluindo:

- `title` próprio;
- `meta description` própria.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| **HTML5** | Estrutura e semântica das páginas |
| **CSS3** | Estilização, layout e responsividade |
| **JavaScript (Vanilla)** | Interatividade, validações, máscaras e manipulação do DOM |
| **SVG** | Imagens e elementos gráficos locais |

O projeto não utiliza frameworks, bibliotecas externas ou ferramentas de build.

---

## 📂 Estrutura do projeto

```text
ong-projeto/
├── index.html
├── projetos.html
├── cadastro.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── imagens/
    ├── logo.svg
    ├── ong.svg
    ├── projeto.svg
    └── voluntariado.svg
```

A organização separa os arquivos de acordo com sua responsabilidade:

- `*.html` — páginas do site;
- `css/` — arquivos de estilização;
- `js/` — lógica e interatividade;
- `imagens/` — recursos gráficos em SVG.

---

## 🚀 Como executar localmente

Como o projeto é totalmente estático, não é necessário instalar dependências.

### Opção 1 — Abrir diretamente no navegador

1. Baixe ou clone o repositório.
2. Acesse a pasta do projeto.
3. Abra o arquivo:

```text
index.html
```

4. O projeto será carregado diretamente no navegador.

### Opção 2 — Utilizando o VS Code

1. Abra a pasta do projeto no **Visual Studio Code**.
2. Instale a extensão **Live Server**, caso ainda não possua.
3. Clique com o botão direito sobre `index.html`.
4. Selecione **Open with Live Server**.
5. O projeto será aberto automaticamente no navegador.

---

### Passo a passo

1. Faça o upload do projeto para um repositório no GitHub.
2. Acesse o repositório.
3. Entre em:

```text
Settings → Pages
```

4. Na opção de publicação, selecione:

```text
Deploy from a branch
```

5. Escolha a branch:

```text
main
```

6. Selecione a pasta:

```text
/ (root)
```

7. Salve as configurações.

Após a publicação, o GitHub Pages disponibilizará uma URL para acessar o site.

> O tempo necessário para a primeira publicação pode variar.

---

## ♿ Acessibilidade

A acessibilidade foi considerada durante o desenvolvimento da aplicação, buscando tornar a navegação mais clara para diferentes perfis de usuários.

Entre as práticas utilizadas estão:

- Estrutura semântica com elementos HTML apropriados;
- Definição do idioma como `pt-BR`;
- Navegação por teclado;
- Foco visual;
- Link para acesso direto ao conteúdo;
- Uso adequado de atributos ARIA;
- Mensagens de validação associadas ao estado dos campos;
- Feedback anunciado por regiões `aria-live`;
- Texto alternativo nas imagens;
- Modal com gerenciamento de foco;
- Fechamento do modal por teclado;
- Respeito à preferência `prefers-reduced-motion`.

O projeto busca atender às boas práticas relacionadas à **WCAG 2.1 nível AA**.

---

### Validação HTML

As três páginas podem ser verificadas utilizando o **W3C Markup Validation Service**:

```text
index.html
projetos.html
cadastro.html
```

### Testes funcionais

Também é recomendado testar:

- Navegação entre as páginas;
- Funcionamento dos links;
- Preenchimento do formulário;
- Campos obrigatórios;
- Limites mínimo e máximo dos campos;
- Validação do CPF;
- Máscaras de CPF, telefone e CEP;
- Mensagens de erro e sucesso;
- Toasts;
- Abertura e fechamento do modal;
- Fechamento do modal com `Esc`;
- Navegação utilizando teclado;
- Comportamento em diferentes tamanhos de tela;
- Preferência por movimento reduzido.

---

## ⚠️ Limitações conhecidas

O projeto possui caráter **acadêmico e demonstrativo**, portanto algumas funcionalidades não fazem parte do escopo.

### Não há persistência de dados

O cadastro não utiliza `localStorage` nem banco de dados. Os dados preenchidos não são armazenados após o encerramento ou atualização da página.

### Não existem templates dinâmicos

O conteúdo das páginas é estruturado diretamente no HTML. Não há sistema de templates ou geração dinâmica de conteúdo por JavaScript.

### Não utiliza SweetAlert2

Os avisos e notificações foram desenvolvidos utilizando JavaScript puro, com `alert` e componentes de toast próprios.

Não existe dependência ou instalação do **SweetAlert2** no projeto.

### Não existe backend ou API

O projeto é completamente estático.

Não há:

- Backend;
- API;
- Banco de dados;
- Autenticação;
- Servidor de aplicação;
- Persistência de cadastros.

O envio do formulário é apenas **demonstrativo** e não transmite os dados para um servidor.

---

## 📄 Licença

Este projeto foi desenvolvido para fins **acadêmicos e educacionais**.

Para disponibilização pública do código, pode ser utilizada a licença **MIT**, caso esteja de acordo com as regras da instituição e com a intenção de uso do projeto.

> Este projeto é fictício e foi desenvolvido exclusivamente para fins educacionais.

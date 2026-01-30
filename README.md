# React Tabs (JS)

Componente de abas reutilizável em React, permitindo alternar entre conteúdos diferentes a partir de uma lista de tabs.

[DEMO LINK](https://Igor-hrm.github.io/react_tabs-js/)

---

## Sobre o projeto

Este projeto implementa um componente `Tabs` totalmente controlado pelo componente pai (`App`), seguindo o padrão de **componentes stateless**.

A aba ativa é definida via props e toda a comunicação entre `App` e `Tabs` ocorre por meio de callbacks, reforçando boas práticas de fluxo de dados em React.

---

## Tecnologias utilizadas

- React
- JavaScript
- CSS
- GitHub Pages

---

## Funcionalidades implementadas

- Renderização dinâmica de abas a partir de um array
- Controle de aba ativa via props
- Destaque visual da aba selecionada
- Renderização do conteúdo da aba ativa
- Comunicação entre componentes usando callback
- Componente `Tabs` sem estado interno (stateless)

---

## Regras de funcionamento

- As abas são renderizadas dentro de uma lista (`<ul>`)
- Cada aba possui:
  - `data-cy="Tab"`
  - link interno com `data-cy="TabLink"`
- A aba ativa recebe a classe `is-active`
- Se o `activeTabId` não existir, a primeira aba é ativada por padrão
- O conteúdo da aba ativa é exibido no elemento com `data-cy="TabContent"`
- O callback `onTabSelected` só é chamado ao clicar em uma aba diferente da ativa
- O título da aba ativa é exibido no `<h1>` do `App` no formato:

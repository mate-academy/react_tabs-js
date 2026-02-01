import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

/**
 * Array de abas disponíveis na aplicação.
 * Para adicionar novas abas, inclua um objeto com { id, title, content }.
 * @type {Array<{id: string, title: string, content: string}>}
 */
export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

/**
 * Componente principal da aplicação.
 * Gerencia o estado da aba ativa e exibe o título correspondente.
 */
export const App = () => {
  // Estado que armazena o ID da aba ativa (inicia com a primeira aba)
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  // Busca o objeto da aba ativa; fallback para tabs[0] se ID inválido
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div className="section">
      {/* Título dinâmico que reflete a aba selecionada */}
      <h1 className="title">Selected tab is {activeTab.title}</h1>

      <div data-cy="TabsComponent">
        {/*
          Componente Tabs (stateless):
          - tabs: lista de abas a renderizar
          - activeTabId: ID da aba ativa atual
          - onTabSelected: callback chamado ao selecionar nova aba
        */}
        <Tabs
          tabs={tabs}
          activeTabId={activeTabId}
          onTabSelected={setActiveTabId}
        />
      </div>
    </div>
  );
};

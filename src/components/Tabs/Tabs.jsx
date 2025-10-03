import React from 'react';

// Componente Tabs que recebe as abas, ID ativo e função de callback como props
export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Encontra a aba ativa baseada no ID, com fallback para a primeira aba
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      {/* Lista de navegação das abas com estilo Bulma */}
      <div className="tabs is-boxed">
        <ul>
          {/* Renderiza cada aba mapeando o array de tabs */}
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={activeTab.id === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              {/* Link da aba com handler de click para trocar aba ativa */}
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  // Previne navegação padrão do link
                  e.preventDefault();
                  // Só chama callback se não for a aba já ativa
                  if (tab.id !== activeTab.id) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Container que exibe o conteúdo da aba ativa */}
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

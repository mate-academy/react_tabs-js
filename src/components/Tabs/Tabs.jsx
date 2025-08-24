// components/Tabs.jsx
import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Se o activeTabId não existe, usar o primeiro
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      {/* Lista de abas */}
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === activeTab.id ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault(); // evita rolar a página
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

      {/* Conteúdo da aba ativa */}
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

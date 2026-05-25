import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Encontra a aba ativa. Se não existir ou não bater, usa a primeira como fallback
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === activeTab.id;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={isActive ? 'is-active' : ''}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={event => {
                    event.preventDefault();
                    if (!isActive) {
                      onTabSelected(tab.id);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Renderiza o conteúdo da aba selecionada */}
      <div className="block" data-cy="TabContent">
        {activeTab?.content}
      </div>
    </div>
  );
};

import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  if (!tabs || tabs.length === 0) return null;

  // Verifica se activeTabId existe, senão usa o primeiro
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="Tabs">
      <ul>
        {tabs.map(tab => {
          const isActive = tab.id === activeTab.id;

          return (
            <li
              key={tab.id}
              data-cy="Tab"
              className={isActive ? 'is-active' : undefined}
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={e => {
                  e.preventDefault();
                  if (!isActive && typeof onTabSelected === 'function') {
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

      {/* Aqui está o que faltava pros testes */}
      <h1>{`Selected tab is ${activeTab.title}`}</h1>

      <div data-cy="TabContent">{activeTab.content}</div>
    </div>
  );
};

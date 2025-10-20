import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  if (!tabs || tabs.length === 0) {
    return null;
  }

  const resolvedActiveId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  const activeTab = tabs.find(tab => tab.id === resolvedActiveId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === resolvedActiveId ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  if (tab.id !== resolvedActiveId) {
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

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

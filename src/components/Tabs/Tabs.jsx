import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  if (!tabs || tabs.length === 0) return null;
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={tab.id === activeTab.id ? 'is-active' : ''}
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={event => {
                  event.preventDefault();
                  if (tab.id !== activeTabId) {
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

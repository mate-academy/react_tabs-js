import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const currentTab = tabs.find(t => t.id === activeTabId) || tabs[0];

  return (
    <div>
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === currentTab.id ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {
                if (tab.id !== currentTab.id) onTabSelected(tab.id);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};

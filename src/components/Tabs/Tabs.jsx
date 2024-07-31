import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <li
            className={tab.id === activeTab.id ? 'is-active' : ''}
            data-cy="Tab"
            key={tab.id}
            onClick={() => {
              if (tab.id !== activeTabId) {
                onTabSelected(tab.id);
              }
            }}
          >
            <a href={`#${tab.id}`} data-cy="TabLink">
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

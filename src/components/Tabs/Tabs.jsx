import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected, onKeyDown }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTab.id ? 'is-active' : ''}
              data-cy="Tab"
              role="tab"
              tabIndex={0}
              onClick={() => tab.id !== activeTab.id && onTabSelected(tab.id)}
              onKeyDown={event => onKeyDown(event, tab.id)}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
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

import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validTabId = tabs.map(tab => tab.id).includes(activeTabId)
    ? activeTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={validTabId === tab.id ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (validTabId !== tab.id) {
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
        {(tabs.find(tab => tab.id === activeTabId) || tabs[0])?.content}
      </div>
    </div>
  );
};

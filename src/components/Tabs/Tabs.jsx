import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  if (!tabs || tabs.length === 0) {
    return null;
  }

  const isValidTab = tabs.some(tab => tab.id === activeTabId);
  const validActiveTabId = isValidTab ? activeTabId : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === validActiveTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();
                  if (tab.id !== validActiveTabId) {
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
        {tabs.find(tab => tab.id === validActiveTabId)?.content}
      </div>
    </div>
  );
};

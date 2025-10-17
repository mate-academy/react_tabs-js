import React from 'react';

export const Tabs = ({ tabs = [], activeTabId, onTabSelected }) => {
  if (tabs.length === 0) {
    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul />
        </div>
        <div className="block" data-cy="TabContent" />
      </div>
    );
  }

  const resolvedActiveId =
    tabs.find(tab => tab.id === activeTabId)?.id || tabs[0].id;

  const selectedTab = tabs.find(tab => tab.id === resolvedActiveId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === resolvedActiveId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  if (tab.id !== resolvedActiveId && onTabSelected) {
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

      {}
      <div className="block" data-cy="TabContent">
        {selectedTab?.content}
      </div>
    </div>
  );
};

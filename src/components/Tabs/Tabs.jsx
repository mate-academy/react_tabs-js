import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let tabId;

  if (tabs.find(a => a.id === activeTabId)) {
    tabId = activeTabId;
  } else {
    tabId = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={tab.id === tabId ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
                id={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tab.id !== tabId) {
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

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === tabId).content}
      </div>
    </div>
  );
};

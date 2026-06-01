import React from 'react';

export const Tabs = ({ tabs = [], activeTabId, onTabSelected }) => {
  const isTabActive = tabId => {
    const hasActiveTab = tabs.some(tab => tab.id === activeTabId);

    if (hasActiveTab) {
      return tabId === activeTabId;
    }

    return tabs.length > 0 && tabId === tabs[0].id;
  };

  const currentTab = tabs.find(tab => isTabActive(tab.id));

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const active = isTabActive(tab.id);

            return (
              <li
                key={tab.id}
                className={active ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={event => {
                    event.preventDefault();
                    if (!active) {
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

      {currentTab && (
        <div className="block" data-cy="TabContent">
          {currentTab.content}
        </div>
      )}
    </div>
  );
};

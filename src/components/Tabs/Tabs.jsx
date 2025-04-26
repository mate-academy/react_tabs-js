import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const firstTabId = tabs[0]?.id;
  const currentActiveTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : firstTabId;

  const handleTabClick = tabId => {
    if (tabId !== currentActiveTabId && onTabSelected) {
      onTabSelected(tabId);
    }
  };

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={tab.id === currentActiveTabId ? 'is-active' : ''}
              >
                <a
                  data-cy="TabLink"
                  href={`#${tab.id}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

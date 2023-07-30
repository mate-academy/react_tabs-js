import React from 'react';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const getSelectedTab = () => (
    tabs.find(tab => tab.id === selectedTabId) || tabs[0]
  );

  const selectedTab = getSelectedTab();

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={tab.id === selectedTab.id ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== selectedTab.id) {
                    onTabSelected(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="block"
        data-cy="TabContent"
        data-cy-value={selectedTab.id}
      >
        {selectedTab.content}
      </div>
    </div>
  );
};

import React from 'react';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  if (!selectedTab) {
    // eslint-disable-next-line prefer-destructuring, no-const-assign
    selectedTab = tabs[0];
  }

  const handleTabClick = (tab) => {
    if (tab.id !== selectedTab.id) {
      onTabSelected(tab.id);
    }
  };

  return (
    <div data-cy="TabContent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectedTab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(tab);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};

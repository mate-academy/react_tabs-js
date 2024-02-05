import React from 'react';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const handleTabClick = (tab) => {
    onTabSelected(tab);
  };

  const handleKeyDown = (event, tab) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleTabClick(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={onTabSelected}
        >
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={`${tab.id === selectedTab.id ? 'is-active' : ''}`}
              data-cy="Tab"
              role="tab"
              tabIndex={0}
              onClick={() => handleTabClick(tab)}
              onKeyDown={e => handleKeyDown(e, tab)}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};

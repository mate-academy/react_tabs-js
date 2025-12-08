import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const hasActiveTab = tabs.some(tab => tab.id === activeTabId);
  const currentActiveTabId = hasActiveTab ? activeTabId : tabs[0].id;

  const handleTabClick = tab => {
    if (tab.id === currentActiveTabId) {
      return;
    }

    onTabSelected(tab.id);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
            <li
              className={currentActiveTabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
              onClick={() => handleTabClick(tab)}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs.find(v => v.id === currentActiveTabId)?.content}
      </div>
    </div>
  );
};

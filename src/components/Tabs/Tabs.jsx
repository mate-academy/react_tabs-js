import React from 'react';

export const Tabs = ({ tabs = [], activeTabId, onTabSelected }) => {
  const hasTabs = tabs.length > 0;

  const activeTab = hasTabs
    ? tabs.find(tab => tab.id === activeTabId) || tabs[0]
    : null;

  const resolvedActiveId = activeTab ? activeTab.id : null;

  const handleTabClick = (event, tab) => {
    event.preventDefault();

    if (tab.id !== resolvedActiveId) {
      onTabSelected(tab.id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === activeTabId ? 'is-active' : ''}
            >
              <a
                href={`#tab-${tab.id}`}
                data-cy="TabLink"
                onClick={e => handleTabClick(e, tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : null}
      </div>
    </div>
  );
};

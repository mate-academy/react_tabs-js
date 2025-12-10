import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let activeTab;

  if (tabs.length === 0) {
    activeTab = null;
  } else {
    const foundTab = tabs.find(t => t.id === activeTabId);

    activeTab = foundTab || tabs[0];
  }

  const currentActiveId = activeTab ? activeTab.id : null;
  const activeContent = activeTab ? activeTab.content : null;

  const handleTabClick = (event, tabId) => {
    event.preventDefault();

    if (tabId !== currentActiveId) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === currentActiveId;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={isActive ? 'is-active' : ''}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={e => handleTabClick(e, tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeContent}
      </div>
    </div>
  );
};

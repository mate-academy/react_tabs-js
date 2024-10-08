import React from "react";

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validTabIds = tabs.map(tab => tab.id);
  const currentTabId = validTabIds.includes(activeTabId) ? activeTabId : validTabIds[0];

  const handleTabClick = (tabId) => {
    if (tabId !== currentTabId) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={tab.id === currentTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs.find((tab) => tab.id === currentTabId)?.content}
      </div>
    </div>
  );
};

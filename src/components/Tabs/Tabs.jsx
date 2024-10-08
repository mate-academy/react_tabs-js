import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validTabIds = tabs.map(tab => tab.id);
  const currentTabId = validTabIds.includes(activeTabId)
    ? activeTabId
    : validTabIds[0];

  const handleTabClick = tabId => {
    if (tabId !== currentTabId) {
      onTabSelected(tabId);
    }
  };

  const activeTabContent = tabs.find(tab => tab.id === currentTabId)?.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              className={classNames({ 'is-active': id === currentTabId })}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(id)}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTabContent}
      </div>
    </div>
  );
};

import React from 'react';
import cn from 'classnames';

function getContentById(tabs, activeTabId) {
  return (tabs.find(tab => tab.id === activeTabId) || tabs[0]).content;
}

function getResolvedActiveTabId(tabs, activeTabId) {
  return (tabs.find(tab => tab.id === activeTabId) || tabs[0]).id;
}

const handleTabSelected = (activeTabId, newTabId, onTabSelected) => {
  if (newTabId === activeTabId) {
    return;
  }

  onTabSelected(newTabId);
};

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const resolvedActiveTabId = getResolvedActiveTabId(tabs, activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({
                'is-active': tab.id === resolvedActiveTabId,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() =>
                  handleTabSelected(resolvedActiveTabId, tab.id, onTabSelected)
                }
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="block" data-cy="TabContent">
          {getContentById(tabs, activeTabId)}
        </div>
      </div>
    </div>
  );
};

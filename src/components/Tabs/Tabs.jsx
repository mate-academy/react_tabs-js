import React from 'react';
import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, clickOnTab }) => {
  const correctTabId = tabs.find(tab => tab.id === selectedTab)
    ? selectedTab
    : tabs[0].id;

  const neededTab = tabs.find(tab => tab.id === correctTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tab.id === correctTabId })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== correctTabId) {
                    clickOnTab(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {neededTab && neededTab.content}
      </div>
    </div>
  );
};

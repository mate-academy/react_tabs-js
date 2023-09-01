import React from 'react';
import cn from 'classnames';

function findSelectedTab(tabs, selectedTabId) {
  return tabs.find(tab => tab.id === selectedTabId) || tabs[0];
}

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = findSelectedTab(tabs, selectedTabId);
  const content = findSelectedTab(tabs, selectedTabId)?.content;
  const handleClick = (tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': selectedTab.id === tab.id })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};

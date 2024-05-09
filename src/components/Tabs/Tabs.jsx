/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, setActiveTabId, onTabSelected }) => {
  const ACTIVETAB = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleTabClick = tabId => {
    if (tabId !== activeTabId) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({
                'is-active': ACTIVETAB.id === tab.id,
              })}
              data-cy="Tab"
              onClick={() => handleTabClick(tab.id)}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {ACTIVETAB.content}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelect, selectedTabId }) => {

  const tabClick = (tab) => {
    if (activeTabId === tab.id) {
      return;
    }

    setActiveTabId(tab.id);
    onTabSelect(tab.id);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': activeTabId === tab.id })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => tabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === activeTabId)?.content}
      </div>
    </div>
  );
};

import React from 'react';
import cn from 'classnames';

import { findSelectedTab } from '../../utils/utils';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = findSelectedTab(tabs, selectedTabId);
  const { content } = selectedTab;
  const handleTabSelect = (tab) => {
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
                onClick={() => handleTabSelect(tab)}
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

import React from 'react';
import cn from 'classnames';

import { findSelectedTab } from '../../utils/utils';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = findSelectedTab(tabs, selectedTabId);
  const content = selectedTab?.content;
  const handleClick = (tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={cn({ 'is-active': selectedTab.id === id })}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => handleClick({ id, title })}
              >
                {title}
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

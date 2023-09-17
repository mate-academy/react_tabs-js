import React from 'react';
import cn from 'classnames';
import { selectTab } from '../../helperfunction';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const handleClick = (tab) => {
    onTabSelected(tab);
  };

  const foundTab = selectTab(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isActive = tab.id === foundTab.id;

            return (
              <li
                className={cn({
                  'is-active': isActive,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => !isActive && handleClick(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {foundTab.content}
      </div>
    </div>
  );
};

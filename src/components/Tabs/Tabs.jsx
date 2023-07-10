import React from 'react';
import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId)
    || tabs[0];

  const tabSelect = tab => () => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(el => (
            <li
              className={cn(
                {
                  'is-active': el.id === selectedTab.id,
                },
              )}
              data-cy="Tab"
              key={el.id}
            >
              <a
                href={`#${el.id}`}
                data-cy="TabLink"
                onClick={tabSelect(el)}
              >
                {el.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};

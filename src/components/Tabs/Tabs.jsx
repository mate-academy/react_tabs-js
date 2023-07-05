import React from 'react';
import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const findSelectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const onClick = (tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn(findSelectedTab.id === tab.id && 'is-active')}
              data-cy="Tab"
            >
              <a
                onClick={() => {
                  onClick(tab);
                }}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {findSelectedTab.content}
      </div>
    </div>
  );
};

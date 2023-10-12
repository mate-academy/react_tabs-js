import cn from 'classnames';
import React from 'react';

export const Tabs = (
  {
    tabs,
    onTabSelected,
    selectedTabId,
  },
) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(prop => (
            <li
              className={cn({ 'is-active': prop.id === selectedTab.id })}
              data-cy="Tab"
              key={prop.id}
            >
              <a
                href={`#${prop.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (prop.id !== selectedTabId) {
                    onTabSelected(prop);
                  }
                }}
              >
                {prop.title}
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

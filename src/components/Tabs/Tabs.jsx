import React from 'react';
import cn from 'classnames';

export const Tabs = ({ tabs = [], activeTabId, onTabSelected }) => {
  const isIdValid = tabs.some(tab => tab.id === activeTabId);
  const effectiveActiveId = isIdValid ? activeTabId : tabs[0]?.id;

  const currentTab = tabs.find(tab => tab.id === effectiveActiveId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': tab.id === effectiveActiveId })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();
                  if (tab.id !== effectiveActiveId && onTabSelected) {
                    onTabSelected(tab.id);
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
        {currentTab?.content}
      </div>
    </div>
  );
};

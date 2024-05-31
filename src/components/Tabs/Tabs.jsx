import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const currentTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              className={classNames({ 'is-active': id === currentTab.id })}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (id !== currentTab.id) {
                    onTabSelected(id);
                  }
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};

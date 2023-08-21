import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === selectedTab);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(table => (
            <li
              key={table.id}
              className={
                classNames('tab', { 'is-active': selectedTab === table.id })
              }
              data-cy="Tab"
            >
              <a
                onClick={() => onTabSelected(table.id)
                }
                href={`#${table.id}`}
                data-cy="TabLink"
              >
                {table.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab && activeTab.content}
      </div>
    </div>
  );
};

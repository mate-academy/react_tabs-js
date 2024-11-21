/* eslint-disable prettier/prettier */
import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleClick = tabId => event => {
    event.preventDefault();

    if (selectedTab.id !== tabId) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              className={classNames({ 'is-active': id === selectedTab.id })}
              data-cy="Tab"
              key={id}
            >
              <a onClick={handleClick(id)} href={`#${id}`} data-cy="TabLink">
                {title}
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

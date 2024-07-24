import React from 'react';
import ClassNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleClick = tab => event => {
    event.preventDefault();

    if (selectedTab.id !== tab.id) {
      onTabSelected(tab.id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={ClassNames({ 'is-active': tab.id === selectedTab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                onClick={handleClick(tab)}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
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

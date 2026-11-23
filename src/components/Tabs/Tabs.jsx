import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleTabClick = (event, tab) => {
    event.preventDefault();

    if (tab.id !== activeTab.id) {
      onTabSelected(tab.id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isSelected = tab.id === activeTab.id;

            return (
              <li
                key={tab.id}
                className={classNames({ 'is-active': isSelected })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={event => handleTabClick(event, tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

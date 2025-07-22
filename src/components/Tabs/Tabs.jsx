import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) ?? tabs[0];

  return (
    <>
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={classNames({ 'is-active': tab.id === activeTab.id })}
          data-cy="Tab"
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => {
              if (tab.id !== activeTabId) {
                onTabSelected(tab.id);
              }
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </>
  );
}

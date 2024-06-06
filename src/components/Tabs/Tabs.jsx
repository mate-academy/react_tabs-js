import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div>
      <ul>
        {tabs.map(tab => {
          const isActive = tab.id === activeTab.id;

          return (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': isActive })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  if (!isActive) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="block" data-cy="TabContent" style={{ marginTop: '20px' }}>
        {activeTab.content}
      </div>
    </div>
  );
};

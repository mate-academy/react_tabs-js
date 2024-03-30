import React from 'react';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <React.Fragment>
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={tab.id === selectedTab.id ? 'is-active' : ''}
          data-cy="Tab"
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={e => {
              e.preventDefault();
              onTabSelected(tab);
            }}
            role="tab"
            tabIndex={0}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </React.Fragment>
  );
};

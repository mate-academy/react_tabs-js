import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, currentTab, selected }) => {
  function handleTab(selectedTab, tab) {
    if (selectedTab !== tab) {
      currentTab(tab);
    }
  }

  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={classNames({
            'is-active': selected === tab,
          })}
          key={tab.id}
          data-cy="Tab"
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => handleTab(selected, tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

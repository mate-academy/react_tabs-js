import React, { useState } from 'react';

export const Tabs = ({ tabs, onTabSelected }) => {
  const [isActiveTab, setIsActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setIsActiveTab(tab);
    onTabSelected(tab);
  };

  const handleKeyDown = (event, tab) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleTabClick(tab);
    }
  };

  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={`${tab.id === isActiveTab.id ? 'is-active' : ''}`}
          data-cy="Tab"
          role="tab"
          tabIndex={0}
          onClick={() => handleTabClick(tab)}
          onKeyDown={e => handleKeyDown(e, tab)}
        >
          <a href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
        </li>
      ))}
    </ul>
  );
};

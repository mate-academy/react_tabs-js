import React from 'react';
import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const { id, content } = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const handleSelectTab = (tab) => {
    if (tab.id !== id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({
                'is-active': tab.id === id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a href={`#${tab.id}`} data-cy="TabLink" onClick={() => handleSelectTab(tab)}>{tab.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};

import React from 'react';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const setOnClick = tab => selectedTab.id !== tab.id && onTabSelected(tab);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectedTab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={() => setOnClick(tab)}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab && selectedTab.content}
      </div>
    </div>
  );
};

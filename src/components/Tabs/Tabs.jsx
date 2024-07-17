import React from 'react';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const validTab = tabs.find(tab => tab.id === selectedTab.id) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isSelected = tab.id === validTab.id;

            return (
              <li
                key={tab.id}
                className={isSelected ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  onClick={() => !isSelected && onTabSelected(tab)}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};

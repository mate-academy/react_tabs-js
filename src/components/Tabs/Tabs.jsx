import React from 'react';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const actTabs = [...tabs];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {actTabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={selectedTab === tab ? 'is-active' : ''}
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={() => {
                  if (tab.id !== selectedTab.id) {
                    onTabSelected(tab);
                  }
                }}
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

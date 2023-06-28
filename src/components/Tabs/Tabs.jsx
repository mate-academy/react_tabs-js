import React from 'react';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
  selectedTab,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {
          tabs.map(tab => (
            <li
              className={`${selectedTabId === tab.id
                ? 'is-active'
                : ''
              }`}
              key={tab.id}
              data-cy="Tab"
            >
              <a
                onClick={() => {
                  onTabSelected(tab);
                }}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))
        }
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {selectedTab.content}
    </div>
  </div>
);

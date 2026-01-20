import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === activeTabId;

            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={isActive ? 'is-active' : ''}
              >
                <a
                  data-cy="TabLink"
                  href={`#${tab.id}`}
                  onClick={event => {
                    event.preventDefault();

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
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </>
  );
};

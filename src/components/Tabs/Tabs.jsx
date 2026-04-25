import React from 'react';

export const Tabs = ({ tabs = [], activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <ul className="tabs">
        {tabs.map(tab => {
          const isActive = tab.id === activeTab.id;

          return (
            <li
              key={tab.id}
              className={isActive ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
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

      <div className="content" data-cy="TabContent">
        <p>{activeTab?.content}</p>
      </div>
    </>
  );
};

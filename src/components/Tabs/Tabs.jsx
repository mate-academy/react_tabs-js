import React from 'react';

export const Tabs = ({ tabs = [], activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === activeTab?.id ? 'is-active' : ''}
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={(event) => {
                  event.preventDefault();

                  if (tab.id !== activeTab?.id) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="box" data-cy="TabContent">
        {activeTab?.content}
      </div>
    </>
  );
};

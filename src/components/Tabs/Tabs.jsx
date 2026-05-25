import React from 'react';

export const Tabs = ({ tabs = [], activeTabId, onTabSelected }) => {
  const isIdValid = tabs.some(tab => tab.id === activeTabId);
  const currentActiveId = isIdValid ? activeTabId : tabs[0]?.id;

  const activeTab = tabs.find(tab => tab.id === currentActiveId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === currentActiveId;

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
      </div>

      {activeTab && (
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      )}
    </>
  );
};

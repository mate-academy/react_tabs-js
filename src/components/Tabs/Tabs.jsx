import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTabNotExists = !tabs.some(tab => tab.id === activeTabId);
  let activTab = activeTabId;

  if (activeTabNotExists) activTab = tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === activTab ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== activTab) onTabSelected(tab.id);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {`${tabs.find(tab => tab.id === activTab).content}`}
      </div>
    </div>
  );
};

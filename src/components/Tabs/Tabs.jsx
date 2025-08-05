import React from 'react';
import '../../App.scss';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validActiveTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0]?.id;

  const activeTab = tabs.find(tab => tab.id === validActiveTabId);

  return (
    <>
      <div className="tabs is-boxed" data-cy="TabsComponent">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === validActiveTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  if (tab.id !== validActiveTabId) {
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

      <div className="block" data-cy="TabContent">
        {activeTab?.content}
      </div>
    </>
  );
};

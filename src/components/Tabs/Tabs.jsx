import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validTabId = tabs.some(tab => tab.id === activeTabId) ? activeTabId : tabs[0].id;

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li key={tab.id} className={tab.id === validTabId ? 'is-active' : ''} data-cy="Tab">
              <a
                href={`#${tab.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (tab.id !== validTabId) {
                    onTabSelected(tab.id);
                  }
                }}
                data-cy="TabLink"
                role="tab"
                aria-selected={tab.id === validTabId}
                aria-controls={tab.id}
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
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
        {tabs.find((tab) => tab.id === validTabId)?.content}
      </div>
    </div>
  );
};

import React from 'react';

export const Tabs = ({ tabs = [], activeTabId, onTabSelected }) => {
  if (!tabs.length) return null;

  const active = tabs.find(t => t.id === activeTabId) || tabs[0];
  const activeId = active.id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === activeId;

            return (
              <li
                key={tab.id}
                className={isActive ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={e => {
                    e.preventDefault();
                    if (!isActive) onTabSelected(tab.id);
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
        {active.content}
      </div>
    </div>
  );
};

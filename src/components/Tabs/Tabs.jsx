import React from 'react';

export const Tabs = ({ tabs, activeTabId, onActiveTadId }) => {
  const currentTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => {
            return (
              <li
                key={item.id}
                className={item.id === currentTab.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  onClick={() => {
                    if (item.id !== currentTab.id) {
                      onActiveTadId(item.id);
                    }
                  }}
                  href={`#${item.id}`}
                  data-cy="TabLink"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};

import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const hasActiveTab = tabs.some(tab => tab.id === activeTabId);
  const currentActiveTabId = hasActiveTab ? activeTabId : tabs[0].id;
  const activeTab = tabs.find(tab => tab.id === currentActiveTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <React.Fragment key={tab.id}>
              <li
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex
                className={currentActiveTabId === tab.id ? 'is-active' : ''}
                data-cy="Tab"
                onClick={() => {
                  if (tab.id !== currentActiveTabId) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                <a href={`#${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </a>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : null}
      </div>
    </div>
  );
};

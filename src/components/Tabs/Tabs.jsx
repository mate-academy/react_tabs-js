import React from 'react';

export const Tabs = props => {
  const { tabs, activeTabId, onTabSelected } = props;

  const isValidId = tabs.some(tab => tab.id === activeTabId);
  const selectedId = isValidId ? activeTabId : tabs[0].id;
  const selectedTab = tabs.find(tab => tab.id === selectedId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectedId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();

                  if (tab.id !== activeTabId) {
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
        <p>{selectedTab.content}</p>
      </div>
    </div>
  );
};

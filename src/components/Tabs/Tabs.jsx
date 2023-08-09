import React from 'react';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  let tabIdToShow = selectedTabId;

  if (!tabs.some(tab => tab.id === selectedTabId)) {
    tabIdToShow = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === tabIdToShow ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(event) => {
                  event.preventDefault();
                  if (tab.id !== tabIdToShow) {
                    onTabSelected(tab);
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
        {tabs.map(tab => (
          <div
            key={tab.id}
            id={tab.id}
            style={{ display: tab.id === tabIdToShow ? 'block' : 'none' }}
            data-cy="tab-content"
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

import classNames from 'classnames';
import React from 'react';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  function handleSelect(tab) {
    if (tab.id !== activeTab.id) {
      onTabSelected(tab);
    }
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
              className={classNames({
                'is-active': tab.id === activeTab.id,
              })}
              data-cy="Tab"
              key={tab.id}
              onClick={() => handleSelect(tab)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleSelect(tab);
                }
              }}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

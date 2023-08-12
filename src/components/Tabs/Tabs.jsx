import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleTabClick = (event, tab) => {
    event.preventDefault();
    if (tab.id !== selectedTab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames('is-active',
                { '': tab.id !== selectedTab.id })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => handleTabClick(event, tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.map(({ id, content, title }) => (
          <div
            key={id}
            id={id}
            className={classNames(
              'tab-content',
              {
                'tab-content-active': id === selectedTab.id,
                'tab-content-inactive': id !== selectedTab.id,
              },
            )}
            data-cy="tab-content"
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

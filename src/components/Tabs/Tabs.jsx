import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  const { id: activeId, content: activeContent } = activeTab;

  const handleTabClick = tabId => event => {
    event.preventDefault();
    if (tabId !== activeId) {
      onTabSelected(tabId);
    }
  };

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(({ id, title }) => (
              <li
                key={id}
                data-cy="Tab"
                className={classNames({ 'is-active': id === activeId })}
              >
                <a href={id} data-cy="TabLink" onClick={handleTabClick(id)}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {activeContent}
        </div>
      </div>
    </>
  );
};

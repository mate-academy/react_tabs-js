import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validTabId = tabs.some(tab => tab.id === activeTabId) ? activeTabId : tabs[0].id;

  return (
    <div className="section">
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={classNames({ 'is-active': tab.id === validTabId })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => tab.id !== activeTabId && onTabSelected(tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabs.find(tab => tab.id === validTabId)?.content || tabs[0].content}
        </div>
      </div>
    </div>
  );
};

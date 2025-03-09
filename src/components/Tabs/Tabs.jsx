import React from 'react';
import 'bulma/css/bulma.css';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === activeTabId ? 'is-active' : ''}
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
      {tabs
        .filter(tab => tab.id === activeTabId)
        .map(tab => (
          <div key={tab.id}>{tab.content}</div>
        ))}
    </div>
  </div>
);

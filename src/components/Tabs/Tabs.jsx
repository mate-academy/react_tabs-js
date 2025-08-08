import React from 'react';
import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <h1 className="title">Selected tab is {activeTab.title}</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={cn({ 'is-active': tab.id === activeTab.id })}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tab.id !== activeTab.id) {
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
        <div data-cy="TabContent">{activeTab.content}</div>
      </div>
    </>
  );
};

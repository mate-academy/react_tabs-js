import React from 'react';
import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const handleTabClick = tabId => {
    if (tabId !== activeTabId) {
      onTabSelected(tabId);
    }
  };

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const renderTabLinks = () => {
    return tabs.map(tab => (
      <li
        key={tab.id}
        className={cn({ 'is-active': tab.id === activeTab.id })}
        data-cy="Tab"
      >
        <a
          href={`#${tab.id}`}
          data-cy="TabLink"
          onClick={() => handleTabClick(tab.id)}
          aria-current={tab.id === activeTabId ? 'page' : null}
        >
          {tab.title}
        </a>
      </li>
    ));
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>{renderTabLinks()}</ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

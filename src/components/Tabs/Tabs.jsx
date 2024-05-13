import React from 'react';
import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const handleTabClick = tabId => {
    if (tabId !== activeTabId) {
      onTabSelected(tabId);
    }
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTabId)?.content;

  const renderTabLinks = () => {
    return tabs.map(tab => (
      <li
        key={tab.id}
        className={cn({ 'is-active': tab.id === activeTabId })}
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
        {activeTabContent}
      </div>
    </div>
  );
};

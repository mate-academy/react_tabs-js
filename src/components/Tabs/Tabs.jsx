import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const handleTabClick = tabId => {
    if (tabId !== activeTabId) {
      onTabSelected(tabId);
    }
  };

  const renderTabLinks = () => {
    return tabs.map(tab => (
      <li
        key={tab.id}
        className={tab.id === activeTabId ? 'is-active' : ''}
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
        {tabs.find(tab => tab.id === activeTabId)?.content}
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const [activeTab, setActiveTab] = useState(
    tabs.find(tab => tab.id === activeTabId) || tabs[0],
  );

  useEffect(() => {
    const selectedTab = tabs.find(tab => tab.id === activeTabId);

    if (selectedTab) {
      setActiveTab(selectedTab);
    } else {
      setActiveTab(tabs[0]);
    }
  }, [activeTabId, tabs]);

  const handleTabClick = tab => {
    if (tab.id !== activeTab.id) {
      setActiveTab(tab);
      onTabSelected(tab.id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === activeTab.id ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  handleTabClick(tab);
                }}
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

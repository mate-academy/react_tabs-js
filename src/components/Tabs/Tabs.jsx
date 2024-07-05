import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

export const Tabs = ({ tabs, activeTabId: propActiveTabId, onTabSelected }) => {
  const initialActiveTabId = tabs.some(tab => tab.id === propActiveTabId)
    ? propActiveTabId
    : tabs[0].id;

  const [activeTabId, setActiveTabId] = useState(initialActiveTabId);

  useEffect(() => {
    if (!tabs.some(tab => tab.id === propActiveTabId)) {
      setActiveTabId(tabs[0].id);
    } else {
      setActiveTabId(propActiveTabId);
    }
  }, [propActiveTabId, tabs]);

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleTabClick = tabId => {
    if (tabId !== activeTabId && onTabSelected) {
      onTabSelected(tabId);
    }

    setActiveTabId(tabId);
  };

  const activeTabContent = activeTab.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => {
            const isActive = id === activeTabId;

            return (
              <li
                key={id}
                className={classnames({ 'is-active': isActive })}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabClick(id)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabContent}
      </div>
    </div>
  );
};

export default Tabs;

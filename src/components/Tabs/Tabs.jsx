import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Determine the actual active tab ID
  // If activeTabId doesn't match any tab, use the first tab
  const activeTab = tabs.find(tab => tab.id === activeTabId);
  const actualActiveTabId = activeTab ? activeTabId : tabs[0]?.id;

  const handleTabClick = (tabId) => {
    if (tabId !== actualActiveTabId) {
      onTabSelected(tabId);
    }
  };

  const activeTabContent = tabs.find(tab => tab.id === actualActiveTabId)?.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === actualActiveTabId ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(tab.id);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabContent}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  activeTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

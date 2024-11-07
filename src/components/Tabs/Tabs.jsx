import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const correctedActiveTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  const handleTabClick = (e, tabId) => {
    e.preventDefault();
    if (tabId !== correctedActiveTabId) {
      onTabSelected(tabId);
    }
  };

  const activeTab = tabs.find(tab => tab.id === correctedActiveTabId);
  const activeTabContent = activeTab ? activeTab.content : '';

  return (
    <div className="tabs is-boxed" data-cy="TabsComponent">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === correctedActiveTabId ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={e => handleTabClick(e, tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="tabs-content" data-cy="TabContent">
        <div className="tabs-content-text">{activeTabContent}</div>
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

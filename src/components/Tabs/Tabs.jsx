// Tabs.jsx
import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Find the active tab, fallback to first if activeTabId is invalid
  const validActiveTabId =
    tabs.find(tab => tab.id === activeTabId)?.id || tabs[0]?.id;

  const activeTab = tabs.find(tab => tab.id === validActiveTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === validActiveTabId;

            return (
              <li
                key={tab.id}
                className={isActive ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={e => {
                    e.preventDefault();
                    if (!isActive) {
                      onTabSelected(tab.id);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {activeTab && (
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      )}
    </>
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
  activeTabId: PropTypes.string,
  onTabSelected: PropTypes.func.isRequired,
};

Tabs.defaultProps = {
  activeTabId: null,
};

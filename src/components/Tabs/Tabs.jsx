import React from 'react';
import PropTypes from 'prop-types';

export function Tabs({ tabs, activeTabId, onTabSelected }) {
  // If activeTabId is invalid, fall back to the first tab
  const active = tabs.find(tab => tab.id === activeTabId) ?? tabs[0];

  return (
    <div>
      <ul>
        {tabs.map(tab => {
          const isActive = tab.id === active.id;

          return (
            <li
              key={tab.id}
              data-cy="Tab"
              className={isActive ? 'is-active' : ''}
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
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
      <div data-cy="TabContent">{active.content}</div>
    </div>
  );
}

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

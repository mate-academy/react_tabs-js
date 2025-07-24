import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <ul>
      {tabs.map(choice => (
        <li
          className={choice.id === activeTabId ? 'is-active' : ''}
          data-cy="Tab"
          key={choice.id}
        >
          <a
            href={`#${choice.id}`}
            data-cy="TabLink"
            onClick={e => {
              e.preventDefault();
              if (choice.id !== activeTabId) {
                onTabSelected(choice.id);
              }
            }}
          >
            {choice.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

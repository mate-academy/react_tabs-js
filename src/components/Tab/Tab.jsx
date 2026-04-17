import React from 'react';
import cn from 'classnames';

export const Tab = ({ tab, activeTabId, onTabSelected }) => {
  return (
    <li
      className={cn({
        'is-active': activeTabId === tab.id,
      })}
      data-cy="Tab"
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => {
          if (activeTabId !== tab.id) {
            onTabSelected(tab.id);
          }
        }}
      >
        {tab.title}
      </a>
    </li>
  );
};

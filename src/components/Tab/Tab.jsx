import React from 'react';
import cn from 'classnames';

export const Tab = ({ tab, selected, onTabSelected }) => {
  const handleTabClick = () => {
    if (!selected) {
      onTabSelected(tab);
    }
  };

  return (
    <li
      className={cn({
        'is-active': selected,
      })}
      data-cy="Tab"
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={handleTabClick}
      >
        {tab.title}
      </a>
    </li>
  );
};

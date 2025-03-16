import React from 'react';

export const Tab = ({ tab, isActive, onTabSelected }) => {
  const handleTabClick = e => {
    e.preventDefault();
    if (!isActive) {
      onTabSelected(tab.id);
    }
  };

  return (
    <li className={isActive ? 'is-active' : ''} data-cy="Tab">
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

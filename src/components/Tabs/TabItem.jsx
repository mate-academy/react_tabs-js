import React from 'react';
import classNames from 'classnames';

export const TabItem = ({ id, title, isActive, onSelect }) => {
  const handleClick = e => {
    e.preventDefault();
    if (!isActive) {
      onSelect?.(id);
    }
  };

  return (
    <li
      data-cy="Tab"
      className={classNames('TabItem', { 'is-active': isActive })}
    >
      <a data-cy="TabLink" href={`#${id}`} onClick={handleClick}>
        {title}
      </a>
    </li>
  );
};

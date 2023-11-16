import React from 'react';
import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const validSelectedTabId = tabs.some(({ id }) => id === selectedTabId)
    ? selectedTabId
    : tabs[0].id;

  const handleTabClick = (e, tab) => {
    if (tab.id !== validSelectedTabId) {
      onTabSelected(tab);
    }

    e.preventDefault();
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title, content }) => (
            <li
              className={cn({ 'is-active': id === validSelectedTabId })}
              data-cy="Tab"
              key={id}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={e => handleTabClick(e, { id, title, content })}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(({ id }) => id === validSelectedTabId)?.content}
      </div>
    </div>
  );
};
